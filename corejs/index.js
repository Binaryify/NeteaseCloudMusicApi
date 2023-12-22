const beforeRequest = require('./util/beforeRequest.js')
const afterRequest = require('./util/afterRequest.js')

module.exports = {
  beforeRequest,
  afterRequest,
} // 一个请求前钩子，一个请求后钩子
