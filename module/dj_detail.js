// 电台详情

module.exports = (query, request) => {
  const data = {
    id: query.rid
  }
  return request(
    'POST', `https://music.163.com/weapi/djradio/get`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}