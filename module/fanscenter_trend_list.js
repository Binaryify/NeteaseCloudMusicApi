// 粉丝来源
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/weapi/fanscenter/trend/list`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/fanscenter/trend/list',
    },
  )
}
