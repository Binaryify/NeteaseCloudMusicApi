module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'

  return request(
    'POST',
    `https://interface.music.163.com/api/cloud/pub/v2`,
    {
      songid: query.songId,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
