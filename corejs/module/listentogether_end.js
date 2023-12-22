// 一起听 结束房间

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/end/v2`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/end/v2',
    },
  )
}
