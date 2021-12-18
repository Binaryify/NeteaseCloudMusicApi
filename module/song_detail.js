// 歌曲详情
const { Song, Singer } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  query.ids = query.ids.split(/\s*,\s*/)
  const data = {
    c: '[' + query.ids.map((id) => '{"id":' + id + '}').join(',') + ']',
  }
  const res = await request(
    'POST',
    `https://music.163.com/api/v3/song/detail`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  const tempSongDetail = res.body.songs[0]
  // console.log('tempSongDetail', res)
  //创建歌手取id才能进行关联
  const newsinger = await Singer.create({
    netSongId: tempSongDetail.id,
  })
  console.log('newsinger', newsinger)
  if (newsinger.dataValues.id) {
    await Song.update(
      {
        singerId: newsinger.dataValues.id,
        dt: tempSongDetail.dt,
      },
      {
        where: {
          netSongId: tempSongDetail.id,
        },
      },
    )
  }
  return res
}
