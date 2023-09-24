// 专辑简要百科信息
const crypto = require('crypto')
module.exports = (query, request) => {
  const data = {
    albumId: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/rep/ugc/album/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/rep/ugc/album/get',
    },
  )
}
