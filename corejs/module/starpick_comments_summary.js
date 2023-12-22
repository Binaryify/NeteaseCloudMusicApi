// 云村星评馆 - 简要评论列表
module.exports = (query, request) => {
  const data = {
    cursor: JSON.stringify({
      offset: 0,
      blockCodeOrderList: ['HOMEPAGE_BLOCK_NEW_HOT_COMMENT'],
      refresh: true,
    }),
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/homepage/block/page`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/homepage/block/page',
      realIP: query.realIP,
    },
  )
}
