// 粉丝来源
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now() - 7 * 24 * 3600 * 1000,
    endTime: query.endTime || Date.now(),
    type: query.type || 0, //新增关注:0 新增取关:1
  }
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
