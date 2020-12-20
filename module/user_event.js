// 用户动态

module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.0.0'
  const data = {
    getcounts: true,
    time: query.lasttime || -1,
    limit: query.limit || 30,
    total: false,
  }
  return request(
    'POST',
    `https://music.163.com/api/event/get/${query.uid}`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
