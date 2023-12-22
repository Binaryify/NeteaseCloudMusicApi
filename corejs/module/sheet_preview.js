// 乐谱预览
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi//music/sheet/preview/info?id=${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api//music/sheet/preview/info', // 我没写错! 他们就是这么请求的!
    },
  )
}
