// 歌曲红心数量

module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/song/red/count`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/song/red/count',
      realIP: query.realIP,
    },
  )
}
