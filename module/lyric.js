// 歌词
const { Song } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    lv: -1,
    kv: -1,
    tv: -1,
  }
  const res = await request(
    'POST',
    `https://music.163.com/api/song/lyric`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  console.log(res)
  if (res.status == 200) {
    const mylyric = res.body.lrc.lyric
    const targetSong = await Song.findOne({
      where: {
        netSongId: query.id,
      },
    })
    console.log('targetSong========', targetSong)
    if (targetSong.dataValues.id) {
      await Song.update(
        {
          lyric: mylyric,
        },
        {
          where: {
            netSongId: data.id,
          }
        },
      )
    } else {
      await Song.create({
        lyric: mylyric,
        netSongId: data.id,
      })
    }
  }
  return res
}
