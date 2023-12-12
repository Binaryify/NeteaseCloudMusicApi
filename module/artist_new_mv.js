module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.20.21'
  const data = {
    limit: query.limit || 20,
    startTimestamp: query.before || Date.now(),
  }
  return request(
    'POST',
    `https://music.163.com/api/sub/artist/new/works/mv/list`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
