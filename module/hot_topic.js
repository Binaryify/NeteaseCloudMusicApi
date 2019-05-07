//热门话题

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0
  }
  return request(
    'POST', `http://music.163.com/weapi/act/hot`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}; 