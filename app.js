const express = require('express')
const apicache = require('apicache')
const path = require('path')
const fs = require('fs')
const app = express()
let cache = apicache.middleware
const { exec } = require('child_process');
exec('npm info NeteaseCloudMusicApi version', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  const onlinePackageVersion = stdout.trim();
  const package = require('./package.json')
  if (package.version < onlinePackageVersion) {
    console.log(
      '最新版:Version:' +
      onlinePackageVersion +
        ',当前版本:' +
        package.version +
        ',请及时更新'
    )
  }
})

// 跨域设置
app.all('*', function(req, res, next) {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header('Access-Control-Allow-Credentials', true)
    // 这里获取 origin 请求头 而不是用 *
    res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
  }
  next()
})

const onlyStatus200 = (req, res) => res.statusCode === 200

app.use(cache('2 minutes', onlyStatus200))

app.use(express.static(path.resolve(__dirname, 'public')))

// 补全缺失的cookie
const { completeCookie } = require('./util/init')
app.use(function(req, res, next) {
  let cookie = completeCookie(req.headers.cookie)
  req.headers.cookie = cookie.map(x => x[0]).concat(req.headers.cookie || []).join('; ')
  res.append('Set-Cookie', cookie.map(x => (x.concat('Path=/').join('; '))))
  next()
})

// cookie parser
app.use(function(req, res, next) {
  req.cookies = {}, (req.headers.cookie || '').split(/\s*;\s*/).forEach(pair => {
    let crack = pair.indexOf('=')
    if(crack < 1 || crack == pair.length - 1) return
    req.cookies[decodeURIComponent(pair.slice(0, crack)).trim()] = decodeURIComponent(pair.slice(crack + 1)).trim()
  })
  next()
})

app.use(function(req, res, next) {
  const proxy = req.query.proxy
  if (proxy) {
    req.headers.cookie += `__proxy__${proxy}`
  }
  next()
})

// 因为这几个文件对外所注册的路由 和 其他文件对外注册的路由规则不一样, 所以专门写个MAP对这些文件做特殊处理
const UnusualRouteFileMap = {
  // key 为文件名, value 为对外注册的路由
  'daily_signin.js': '/daily_signin',
  'fm_trash.js': '/fm_trash',
  'personal_fm.js': '/personal_fm'
}


// 改写router为module
const requestMod = require('./util/request')
let dev = express()
fs.readdirSync(path.join(__dirname, 'module'))
.reverse()
.forEach(file => {
  if (!(/\.js$/i.test(file))) return
  let route = (file in UnusualRouteFileMap) ?  UnusualRouteFileMap[file] : '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
  let question = require(path.join(__dirname, 'module', file))
  
  dev.use(route, (req, res) => {
    let query = {...req.query, cookie: req.cookies}
    question(query, requestMod)
    .then(answer => {
      console.log('[OK]', decodeURIComponent(req.originalUrl))
      res.append('Set-Cookie', answer.cookie)
      res.status(answer.status).send(answer.body)
    })
    .catch(answer => {
      console.log('[ERR]', decodeURIComponent(req.originalUrl))
      res.append('Set-Cookie', answer.cookie)
      res.status(answer.status).send(answer.body)
    })
  })
})
app.use('/', dev)

const port = process.env.PORT || 3000

app.server = app.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`)
})

module.exports = app
