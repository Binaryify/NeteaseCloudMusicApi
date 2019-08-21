// 每日推荐歌曲

module.exports = (query, request) => {
  const data = {
    total: true
  }
  return request(
    'POST', `https://music.163.com/weapi/v1/discovery/recommend/songs`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}