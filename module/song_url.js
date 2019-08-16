// 歌曲链接

const crypto = require('crypto')

module.exports = (query, request) => {
  if(!('MUSIC_U' in query.cookie)) query.cookie._ntes_nuid = crypto.randomBytes(16).toString('hex')
  query.cookie.os = 'pc'
  const data = {
    ids: '[' + query.id + ']',
    br: parseInt(query.br || 999000)
  }
  return request(
    'POST', `https://music.163.com/api/song/enhance/player/url`, data,
    {crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy}
  )
}