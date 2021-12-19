// 歌手单曲
const { copyFileSync } = require('fs')
const { Singer, Song } = require('../myapi/app/models/index')
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
    const hotsongs = res.body.hotSongs
    let targetSinger = await Singer.findOne({
      where: {
        netSingerId: myartist.id,
      },
    })
    console.log(targetSinger)
    if (targetSinger == null) {
      await Singer.create({
        name: myartist.name,
        picUrl: myartist.picUrl,
        netSingerId: myartist.id,
      })
    }
    for (let i = 0; i < hotsongs.length; i++) {
      let tempsong = await Song.findOne({
        where: {
          netSongId: hotsongs[i].id,
        },
      })
      console.log('tempsong.dataValues.id)======',tempsong)
      if (tempsong == null) {
        await Song.create({
          name: hotsongs[i].al.name,
          picUrl: hotsongs[i].al.picUrl,
          netSongId: hotsongs[i].id,
          singerId: targetSinger.dataValues.id,
        })
      } else {
        console.log(1)
        await Song.update(
          {
            singerId: targetSinger.dataValues.id
          },
          {
            where: {
              netSongId: hotsongs[i].id,
            }
          },
        )
      }
    }
  }

  return res
}
