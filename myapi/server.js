// 注册路径
require('module-alias/register')

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const koaJwt = require('koa-jwt')
const cors = require('koa2-cors')
const chalk = require('chalk')
const context = require('@extends/context')
const { secretKey, whiteList } = require('@core/jwt')

const config = require('@config')
const db = require('@models')
// error handler
onerror(app)

// 处理前端 history 模式
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
// app.use(
//   historyApiFallback({
//     whiteList: ["/api"],
//   })
// );

// 添加执行上下文参数
app.use(context)

app.use(
  cors({
    origin: '*',
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: [
      'x-requested-with',
      'if-modified-since',
      'Content-Type',
      'Authorization',
      'Accept',
    ], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], //设置获取其他自定义字段
  }),
)

// jwt
app.use(
  koaJwt({
    secret: secretKey,
  }).unless({
    path: whiteList,
  }),
)

app.use(
  koaBody({
    enableTypes: ['json', 'form', 'text'],
  }),
)
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'html',
  }),
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
const Banner = require('@routes/banner')
const Album = require('@routes/album')
const Singer = require('@routes/singer')
const Rank = require('@routes/rank')
const Song = require('@routes/song')
const Search = require('@routes/search')
const User = require('@routes/user')

app.use(Banner.routes(), Banner.allowedMethods())
app.use(Album.routes(), Album.allowedMethods())
app.use(Singer.routes(), Singer.allowedMethods())
app.use(Rank.routes(), Rank.allowedMethods())
app.use(Song.routes(), Song.allowedMethods())
app.use(Search.routes(), Search.allowedMethods())
app.use(User.routes(), User.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(config.PORT, () => {
  console.log('sequelize connect success')
  console.log(`sever listen on http://127.0.0.1:${config.PORT}`)
})
