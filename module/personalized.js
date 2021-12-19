// 推荐歌单
const internal = require('stream')
const { Album } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const data = {
    limit: query.limit || 30,
    // offset: query.offset || 0,
    total: true,
    n: 1000,
  }
  const res = await request(
    'POST',
    `https://music.163.com/weapi/personalized/playlist`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  if (res.status == 200) {
    console.log(1)
    const arr = res.body.result
    arr.forEach((el) => {
      console.log('el', el)
      Album.create({
        name: el.name,
        picUrl: el.picUrl,
        trackCount: el.trackCount,
        playCount: el.playCount,
        netAlbumId: el.id,
        isRank: 0,
      })
    })
  }
  // console.log(res)
  return res
}
