// 歌单详情
const { Song, Album_Song, Album } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const data = {
    id: query.id,
    n: 100000,
    s: query.s || 8,
  }
  const res = await request(
    'POST',
    `https://music.163.com/api/v6/playlist/detail`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  const ans = await Album.findOne({
    where: {
      netAlbumId: data.id,
    },
  })
  const newalbum = ans.dataValues.id

  if (res.status == 200) {
    const myAlbum = res.body.playlist
    const temptrack = myAlbum.tracks

    await Album.update(
      {
        creatorAvatarUrl: myAlbum.creator.avatarUrl,
        creatorNickName: myAlbum.creator.nickname,
        subscribedCount: myAlbum.subscribedCount,
      },
      {
        where: {
          netAlbumId: myAlbum.id,
        },
      },
    )

    temptrack.forEach(async (item, index) => {
      //先创建后关联
      var arname = ''
      if (item.ar.length >= 1) {
        for (let i = 0; i < item.ar.length; i++) {
          if (i == item.ar.length - 1) {
            arname += item.ar[i].name
          } else {
            arname += item.ar[i].name + '-'
          }
        }
      }

      const res = await Song.create({
        artistName: arname,
        netSongId: item.id,
        name: item.name,
        picUrl: item.al.picUrl,
        playCount: item.al.pic,
      })
      const newsongid = res.dataValues.id
      await Album_Song.create({
        albumId: newalbum,
        songId: newsongid,
        order: index + 1,
      })
    })
  }
  return res
}
