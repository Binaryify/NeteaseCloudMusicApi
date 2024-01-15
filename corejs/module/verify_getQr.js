module.exports = (query, request) => {
  const data = {
    verifyConfigId: query.vid,
    verifyType: query.type,
    token: query.token,
    params: JSON.stringify({
      event_id: query.evid,
      sign: query.sign,
    }),
    size: 150,
  }

  return request(
    'POST',
    `https://music.163.com/weapi/frontrisk/verify/getqrcode`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
