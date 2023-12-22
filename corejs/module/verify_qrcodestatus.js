module.exports = async (query, request) => {
  const data = {
    qrCode: query.qr,
  }
  const res = await request(
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
  return res
}
