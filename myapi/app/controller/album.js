///personalized
const { Album, Album_Song, Song } = require('../models/index')

//获取推荐歌单

async function getRecommendList(ctx) {
  const albumData = await Album.findAll({})
  if (albumData) {
    ctx.success('获取轮播图成功', albumData)
  } else {
    ctx.fail('获取轮播图失败')
  }
}
//获取歌单详情
async function getAlbumDetail(ctx) {
  const { id } = ctx.request.query
  const albumData = await Album.findAll({
    where: {
      netAlbumId: id,
    },
    include: [
      {
        model: Song,
      },
    ],
  })
  if (albumData) {
    ctx.success('获取歌单详情成功', albumData)
  } else {
    ctx.fail('获取歌单详情失败')
  }
}
module.exports = {
  getRecommendList,
  getAlbumDetail,
}
