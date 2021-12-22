const { Song } = require('../models/index')
const { Op } = require('sequelize')

//歌曲歌词
async function getLyric(ctx) {
  const { id } = ctx.request.query
  const songData = await Song.findOne({
    where: {
      netSongId: id,
    },
  })
  ctx.success('歌手歌词获取成功', songData)
}

//歌曲详细内容
async function getSongDetail(ctx) {
  const { ids } = ctx.request.query
  const songData = await Song.findOne({
    where: {
      netSongId: ids,
    },
  })
  ctx.success('歌曲详情获取成功', songData)
}


module.exports = {
  getLyric,
  getSongDetail,
}
