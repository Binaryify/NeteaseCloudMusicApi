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

//模糊搜索
async function getSuggestList(ctx) {
  const { keyword } = ctx.request.query
  const songData = await Song.findAll({
    where: {
      [Op.and]: [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ],
    },
  })
  ctx.success('模糊查询歌曲结构', songData)
}
//热词推荐
async function getSuggest(ctx) {
  //对歌曲的频率进行排序，查询出列表
  const getSuggestList = await Song.findAll({
    
  })
}
//修改更新频率
async function updateFrequency() {}
module.exports = {
  getLyric,
  getSongDetail,
  getSuggestList,
}
