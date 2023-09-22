// mv简要百科信息
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {
    mvId: query.id,
  }
  return request('POST', `https://music.163.com/weapi/rep/ugc/mv/get`, data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
    url: '/api/rep/ugc/mv/get',
  })
}
