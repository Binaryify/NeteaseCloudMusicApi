module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/w/nuser/account/get`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
