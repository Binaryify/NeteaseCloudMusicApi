// 曲风详情

module.exports = (query, request) => {
  const data = {
    tagId: query.tagId,
  }
  return request(
    'POST',
    `https://music.163.com/api/style-tag/home/head`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
