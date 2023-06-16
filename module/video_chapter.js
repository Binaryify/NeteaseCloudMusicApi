// 动漫-搜索
module.exports = (query, request) => {
  return request(
    'get',
    `http://api.pingcc.cn/videoChapter/search/${query.id}`,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
