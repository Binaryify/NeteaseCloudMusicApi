// 电台节目列表
// import { toBoolean } from '../util/index.js'
const toBoolean = require('../util/index.js').toBoolean
module.exports = (query, request) => {
  const data = {
    radioId: query.rid,
    limit: query.limit || 30,
    offset: query.offset || 0,
    asc: toBoolean(query.asc),
  }
  return request(
    'POST',
    `https://music.163.com/weapi/dj/program/byradio`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
