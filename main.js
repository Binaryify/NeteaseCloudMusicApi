const fs = require('fs')
const path = require('path')
const tmpPath = require('os').tmpdir()
const { cookieToJson } = require('./util')

if (!fs.existsSync(path.resolve(tmpPath, 'anonymous_token'))) {
  fs.writeFileSync(path.resolve(tmpPath, 'anonymous_token'), '', 'utf-8')
}

let firstRun = true
/** @type {Record<string, any>} */
let obj = {}
fs.readdirSync(path.join(__dirname, 'module'))
  .reverse()
  .forEach((file) => {
    if (!file.endsWith('.js')) return
    let fileModule = require(path.join(__dirname, 'module', file))
    let fn = file.split('.').shift() || ''
    obj[fn] = function (data = {}) {
      if (typeof data.cookie === 'string') {
        data.cookie = cookieToJson(data.cookie)
      }
      return fileModule(
        {
          ...data,
          cookie: data.cookie ? data.cookie : {},
        },
        async (...args) => {
          if (firstRun) {
            firstRun = false
            const generateConfig = require('./generateConfig')
            await generateConfig()
          }
          // 待优化
          const request = require('./util/request')

          return request(...args)
        },
      )
    }
  })

/**
 * @type {Record<string, any> & import("./server")}
 */
module.exports = {
  ...require('./server'),
  ...obj,
}
