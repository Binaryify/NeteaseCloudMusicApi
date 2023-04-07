// 数字专辑-新碟上架
module.exports = (query, request) => {
  const data = {}
  return request('POST', `https://music.163.com/weapi/pl/count`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
