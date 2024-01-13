module.exports = (query, request) => {
  const data = {
    type: 1,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/login/qrcode/unikey`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
