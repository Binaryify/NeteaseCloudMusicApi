// 设置

module.exports = (query, request) => {
  const data = {
       
  }
  return request(
    'POST', `https://music.163.com/api/user/setting`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}