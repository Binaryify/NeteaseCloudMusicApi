// 歌曲音质详情

module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/song/music/detail/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/song/music/detail/get',
      realIP: query.realIP,
    },
  )
}
