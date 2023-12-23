// 相关歌单

module.exports = (query, request) => {
  return request(
    'GET',
    `https://music.163.com/playlist?id=${query.id}`,
    {},
    {
      ua: 'pc',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
