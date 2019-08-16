// 用户歌单

module.exports = (query, request) => {
  const data = {
    uid: query.uid,
    limit: query.limit || 30,
    offset: query.offset || 0
  }
  return request(
    'POST', `https://music.163.com/weapi/user/playlist`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}