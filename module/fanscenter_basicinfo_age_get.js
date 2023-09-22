// 粉丝年龄比例
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/weapi/fanscenter/basicinfo/age/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/fanscenter/basicinfo/age/get',
    },
  )
}
