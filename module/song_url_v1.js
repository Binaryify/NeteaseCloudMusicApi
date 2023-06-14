// 歌曲链接 - v1
// 此版本不再采用 br 作为音质区分的标准
// 而是采用 standard, exhigh, lossless, hires, jyeffect(高清环绕声), sky(沉浸环绕声), jymaster(超清母带) 进行音质判断

const crypto = require('crypto')
module.exports = (query, request) => {
  query.cookie.os = 'android'
  query.cookie.appver = '8.10.05'
  const data = {
    ids: '[' + query.id + ']',
    level: query.level,
    encodeType: 'flac',
  }
  if (data.level == 'sky') {
    data.immerseType = 'c51'
  }
  console.log(data)
  return request(
    'POST',
    `https://interface.music.163.com/eapi/song/enhance/player/url/v1`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/song/enhance/player/url/v1',
    },
  )
}
