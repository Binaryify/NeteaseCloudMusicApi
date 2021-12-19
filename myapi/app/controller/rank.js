const { Album, Song } = require('../models/index')

async function getRankList(ctx) {
  const rankData = await Album.findAll({
    where: {
      isRank: 1,
    },
    include: [
      {
        model: Song,
      },
    ],
  })
  if (rankData) {
    ctx.success('获取排行榜详情成功', rankData)
  } else {
    ctx.fail('获取排行榜详情失败')
  }
}

module.exports = {
  getRankList,
}
