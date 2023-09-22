// 获取达人用户信息
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/weapi/user/creator/authinfo/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/user/creator/authinfo/get',
    },
  )
}
