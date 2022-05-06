// 歌词

module.exports = (query, request) => {
  query.cookie.os = 'ios'

  const data = {
    id: query.id,
    tv: '5',
    lv: '4',
    rv: '4',
    kv: '4',
  }
  return request(
    'POST',
    `https://music.163.com/api/song/lyric?_nmclfl=1`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
