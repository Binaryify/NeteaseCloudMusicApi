// 发送文本动态

module.exports = (query, request) => {
  const data = {
    msg: query.msg,
    type: 'noresource',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/share/friends/resource`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/share/friends/resource',
    },
  )
}
