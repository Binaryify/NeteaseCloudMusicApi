// 一起听 房间情况

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/room/check`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/room/check',
    },
  )
}
