// 所有榜单内容摘要
const { Album } = require('../myapi/app/models/index')

module.exports = async (query, request) => {
  const res = await request(
    'POST',
    `https://music.163.com/weapi/toplist/detail`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  console.log(res)
  if (res.status == 200) {
    const arr = res.body.list
    var rankRes = ''
    arr.forEach(async (item) => {
      if (item.tracks && item.tracks.length > 0) {
        Album.create({
          coverImgId: item.coverImgId,
          picUrl: item.coverImgUrl,
          updateFrequency: item.updateFrequency,
          netAlbumId: item.id,
          name: item.name,
          globalList: 1,
          subscribedCount: item.subscribedCount,
          playCount: item.playCount,
          trackCount: item.trackCount,
          isRank: 1,
        })
      } else {
        Album.create({
          coverImgId: item.coverImgId,
          picUrl: item.coverImgUrl,
          updateFrequency: item.updateFrequency,
          netAlbumId: item.id,
          name: item.name,
          globalList: 0,
          subscribedCount: item.subscribedCount,
          playCount: item.playCount,
          trackCount: item.trackCount,
          isRank: 1,
        })
      }
    })
  }
  return res
}
