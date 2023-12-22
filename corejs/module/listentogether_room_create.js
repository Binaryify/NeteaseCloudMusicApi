// 一起听创建房间

module.exports = (query, request) => {
  const data = {
    refer: 'songplay_more',
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/room/create`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/room/create',
    },
  )
}
