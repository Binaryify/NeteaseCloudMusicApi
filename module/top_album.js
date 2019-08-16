// 新碟上架

module.exports = (query, request) => {
  const data = {
    area: query.type || 'ALL', // ALL,ZH,EA,KR,JP
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true
  }
  return request(
    'POST', `https://music.163.com/weapi/album/new`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}