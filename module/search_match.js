// 本地歌曲匹配音乐信息

module.exports = (query, request) => {
  let songs = [
    {
      title: query.title || '',
      album: query.album || '',
      artist: query.artist || '',
      duration: query.duration || 0,
      persistId: query.md5,
    },
  ]
  const data = {
    songs: JSON.stringify(songs),
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/search/match/new`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/search/match/new',
      realIP: query.realIP,
    },
  )
}
