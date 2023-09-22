// 获取达人达标信息
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/influencer/web/apply/threshold/detail/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/influencer/web/apply/threshold/detail/get',
    },
  )
}
