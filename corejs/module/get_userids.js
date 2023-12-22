module.exports = (query, request) => {
  const data = {
    nicknames: query.nicknames,
  }
  return request('POST', `https://music.163.com/api/user/getUserIds`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
