const fs = require('fs')
const path = require('path')
const express = require('express')
// const request = require('./util/request')
const packageJSON = require('./package.json')
const exec = require('child_process').exec
const cache = require('./apicache').middleware
const { cookieToJson } = require('./corejs/util')
const fileUpload = require('express-fileupload')
const decode = require('safe-decode-uri-component')
const apiIndex = require('./corejs/util/api.js')

const request = require('./request.js')
const { encodeURIComponent, URLSearchParams } = require('./corejs/util')
const { NeteseCloudMusicApi } = require('./corejs/NeteaseCloudMusic.js')
const netease_cloud_music_api = new NeteseCloudMusicApi()
// anonymous_token获取
const tmpPath = require('os').tmpdir()
const anonymous_token = fs.readFileSync(
  path.resolve(tmpPath, './anonymous_token'),
  'utf-8',
)

/**
 * The version check result.
 * @readonly
 * @enum {number}
 */
const VERSION_CHECK_RESULT = {
  FAILED: -1,
  NOT_LATEST: 0,
  LATEST: 1,
}

/**
 * @typedef {{
 *   identifier?: string,
 *   route: string,
 *   module: any
 * }} ModuleDefinition
 */

/**
 * @typedef {{
 *   port?: number,
 *   host?: string,
 *   checkVersion?: boolean,
 *   moduleDefs?: ModuleDefinition[]
 * }} NcmApiOptions
 */

/**
 * @typedef {{
 *   status: VERSION_CHECK_RESULT,
 *   ourVersion?: string,
 *   npmVersion?: string,
 * }} VersionCheckResult
 */

/**
 * @typedef {{
 *  server?: import('http').Server,
 * }} ExpressExtension
 */

/**
 * Get the module definitions dynamically.
 *
 * @param {string} modulesPath The path to modules (JS).
 * @param {Record<string, string>} [specificRoute] The specific route of specific modules.
 * @param {boolean} [doRequire] If true, require() the module directly.
 * Otherwise, print out the module path. Default to true.
 * @returns {Promise<ModuleDefinition[]>} The module definitions.
 *
 * @example getModuleDefinitions("./module", {"album_new.js": "/album/create"})
 */
function getModulesDefinitions(specificRoute) {
  const files = Object.keys(apiIndex)
  let parseRoute = (/** @type {string} */ fileName) => {
    let result =
      specificRoute && fileName in specificRoute
        ? specificRoute[fileName]
        : `/${fileName.replace(/_/g, '/')}`
    return result
  }

  // apiIndex写入的时候已经排好序了，这里不要继续翻转
  const modules = files.map((file) => {
    const identifier = file
    const route = parseRoute(file)
    const module = apiIndex[file]

    return { identifier, route, module }
  })

  return modules
}

/**
 * Check if the version of this API is latest.
 *
 * @returns {Promise<VersionCheckResult>} If true, this API is up-to-date;
 * otherwise, this API should be upgraded and you would
 * need to notify users to upgrade it manually.
 */
async function checkVersion() {
  return new Promise((resolve) => {
    exec('npm info NeteaseCloudMusicApi version', (err, stdout) => {
      if (!err) {
        let version = stdout.trim()

        /**
         * @param {VERSION_CHECK_RESULT} status
         */
        const resolveStatus = (status) =>
          resolve({
            status,
            ourVersion: packageJSON.version,
            npmVersion: version,
          })

        resolveStatus(
          packageJSON.version < version
            ? VERSION_CHECK_RESULT.NOT_LATEST
            : VERSION_CHECK_RESULT.LATEST,
        )
      }
    })

    resolve({
      status: VERSION_CHECK_RESULT.FAILED,
    })
  })
}

/**
 * Construct the server of NCM API.
 *
 * @param {ModuleDefinition[]} [moduleDefs] Customized module definitions [advanced]
 * @returns {Promise<import("express").Express>} The server instance.
 */
async function consturctServer(moduleDefs) {
  const app = express()
  const { CORS_ALLOW_ORIGIN } = process.env
  app.set('trust proxy', true)

  /**
   * CORS & Preflight request
   */
  app.use((req, res, next) => {
    if (req.path !== '/' && !req.path.includes('.')) {
      res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin':
          CORS_ALLOW_ORIGIN || req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json; charset=utf-8',
      })
    }
    req.method === 'OPTIONS' ? res.status(204).end() : next()
  })

  /**
   * Cookie Parser
   */
  app.use((req, _, next) => {
    req.cookies = {}
    //;(req.headers.cookie || '').split(/\s*;\s*/).forEach((pair) => { //  Polynomial regular expression //
    ;(req.headers.cookie || '').split(/;\s+|(?<!\s)\s+$/g).forEach((pair) => {
      let crack = pair.indexOf('=')
      if (crack < 1 || crack == pair.length - 1) return
      req.cookies[decode(pair.slice(0, crack)).trim()] = decode(
        pair.slice(crack + 1),
      ).trim()
    })
    next()
  })

  /**
   * Body Parser and File Upload
   */
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use(fileUpload())

  /**
   * Serving static files
   */
  app.use(express.static(path.join(__dirname, 'public')))

  /**
   * Cache
   */
  app.use(cache('2 minutes', (_, res) => res.statusCode === 200))

  /**
   * Special Routers
   */
  const special = {
    daily_signin: '/daily_signin',
    fm_trash: '/fm_trash',
    personal_fm: '/personal_fm',
  }

  /**
   * Load every modules in this directory
   */
  const moduleDefinitions = moduleDefs || getModulesDefinitions(special)

  for (const moduleDef of moduleDefinitions) {
    // Register the route.
    app.use(moduleDef.route, async (req, res) => {
      ;[req.query, req.body].forEach((item) => {
        if (typeof item.cookie === 'string') {
          item.cookie = cookieToJson(decode(item.cookie))
        }
      })

      let query = Object.assign(
        {},
        { cookie: req.cookies },
        req.query,
        req.body,
        req.files,
        { anonymous_token: anonymous_token },
        { ip: req.ip },
      )

      try {
        let moduleResponse = await netease_cloud_music_api.request(
          moduleDef.identifier,
          query,
        )

        console.log('[OK]', decode(req.originalUrl))

        /**
         * 拿到请求结果的 cookie,
         * 如果是 https 就加上SameSite=None; Secure属性,
         * 如果query 有noCookie参数,返回结果的 header 就不带 cookie
         * 因为扫码登录后网易返回的 cookie 特别大,容易报错
         */
        const cookies = moduleResponse.cookie
        if (!query.noCookie) {
          if (Array.isArray(cookies) && cookies.length > 0) {
            if (req.protocol === 'https') {
              // Try to fix CORS SameSite Problem
              res.append(
                'Set-Cookie',
                cookies.map((cookie) => {
                  return cookie + '; SameSite=None; Secure'
                }),
              )
            } else {
              res.append('Set-Cookie', cookies)
            }
          }
        }

        console.log('返回结果', moduleResponse)

        res.status(moduleResponse.code).send(moduleResponse.data)
      } catch (/** @type {*} */ moduleResponse) {
        console.log('错误', moduleResponse)
        console.log('[ERR]', decode(req.originalUrl), {
          status: moduleResponse.status,
          body: moduleResponse.data,
        })
        if (!moduleResponse.data) {
          res.status(404).send({
            code: 404,
            data: null,
            msg: 'Not Found',
          })
          return
        }
        if (moduleResponse.data.code == '301')
          moduleResponse.data.msg = '需要登录'
        if (!query.noCookie) {
          res.append('Set-Cookie', moduleResponse.data.cookie)
        }

        res.status(moduleResponse.code).send(moduleResponse.data)
      }
    })
  }

  return app
}

/**
 * Serve the NCM API.
 * @param {NcmApiOptions} options
 * @returns {Promise<import('express').Express & ExpressExtension>}
 */
async function serveNcmApi(options) {
  const port = Number(options.port || process.env.PORT || '3000')
  const host = options.host || process.env.HOST || ''

  const checkVersionSubmission =
    options.checkVersion &&
    checkVersion().then(({ npmVersion, ourVersion, status }) => {
      if (status == VERSION_CHECK_RESULT.NOT_LATEST) {
        console.log(
          `最新版本: ${npmVersion}, 当前版本: ${ourVersion}, 请及时更新`,
        )
      }
    })
  const constructServerSubmission = consturctServer(options.moduleDefs)

  const [_, app] = await Promise.all([
    checkVersionSubmission,
    constructServerSubmission,
  ])

  /** @type {import('express').Express & ExpressExtension} */
  const appExt = app
  appExt.server = app.listen(port, host, () => {
    console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
  })

  return appExt
}

module.exports = {
  serveNcmApi,
  getModulesDefinitions,
}
