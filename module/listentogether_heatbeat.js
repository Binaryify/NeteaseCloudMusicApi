// 一起听 发送心跳

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
    songId: query.songId,
    playStatus: query.playStatus,
    progress: query.progress,
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/heartbeat`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/heartbeat',
    },
  )
}
