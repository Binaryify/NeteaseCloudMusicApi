module.exports = (query, request) => {
  const data = {
    key: query.key,
    type: 1,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/login/qrcode/client/login`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
