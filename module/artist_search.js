// 搜索歌手
// 可传关键字或者歌手id
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {
    keyword: query.keyword,
    limit: query.limit || 40,
  }
  return request(
    'POST',
    `https://music.163.com/api/rep/ugc/artist/search`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/rep/ugc/artist/search',
    },
  )
}
