// 每日推荐歌曲-不感兴趣
module.exports = (query, request) => {
  const data = {
    resId: query.id, // 日推歌曲id
    resType: 4,
    sceneType: 1,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/v2/discovery/recommend/dislike`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
