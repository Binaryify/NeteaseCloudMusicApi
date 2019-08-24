// MV详情

module.exports = (query, request) => {
  const data = {
    id: query.mvid
  }
  return request(
    'POST', `https://music.163.com/weapi/mv/detail`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}