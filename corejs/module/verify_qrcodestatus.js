module.exports = (query, request) => {
  const data = {
    qrCode: query.qr,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/frontrisk/verify/qrcodestatus`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
