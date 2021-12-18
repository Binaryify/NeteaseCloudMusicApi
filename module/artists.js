// 歌手单曲
const { Singer } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const res = await request(
    'POST',
    `https://music.163.com/weapi/v1/artist/${query.id}`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  if (res.status == 200) {
    const myartist = res.body.artist
    const targetSinger = await Singer.findOne({
      where: {
        netSingerId: query.id,
      },
    })
    console.log('targetSinger=========', targetSinger)
    if (!targetSinger.dataValues.id) {
      await Singer.create({
        name: myartist.name,
        picUr: myartist.picUr,
        netSingerId: myartist.id,
      })
    }
  }

  return res
}
