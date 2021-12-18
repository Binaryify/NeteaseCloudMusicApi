// 热门歌手
const { Singer } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const data = {
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true,
  }

  const res = await request(
    'POST',
    `https://music.163.com/weapi/artist/top`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  if (res.status == 200) {
    const arr = res.body.artists
    console.log(res)
    arr.forEach((item) => {
      Singer.create({
        name: item.name,
        isHot: 1,
        picUrl: item.picUrl,
        netSingerId: item.id,
        area: -1,
        isHot: 1,
        type: -1,
      })
    })
  }

  return res
}
