// 所有榜单介绍

module.exports = (query, request) => {
  return request(
    'POST', `https://music.163.com/weapi/toplist`, {},
    {crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy}
  )
}