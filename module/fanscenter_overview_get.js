// 粉丝数量
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/weapi/fanscenter/overview/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/fanscenter/overview/get',
    },
  )
}
