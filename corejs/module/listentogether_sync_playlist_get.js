// 一起听 当前列表获取

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/sync/playlist/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/sync/playlist/get',
    },
  )
}
