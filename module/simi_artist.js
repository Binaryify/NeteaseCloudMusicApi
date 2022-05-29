// 相似歌手
const config = require('../util/config.json')
module.exports = (query, request) => {
  const data = {
    artistid: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/discovery/simiArtist`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
