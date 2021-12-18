const { Singer } = require('../models/index')

async function getHotSingerList(ctx) {
  const { offset = 30 } = ctx.request.query
  const singerDate = await Singer.findAll({
    where: {
      isHot: 1,
    },
    limit: Number(offset),
  })
  ctx.success('歌手列表获取成功', singerDate)
}
async function getSingerList(ctx) {
  //进行分页查询
  const { type = '-1', area = '-1', initial, limit = 30 } = ctx.request.query

  const singerDate = await Singer.findAll({
    where: {
      type,
      area,
      initial: initial.toUpperCase().charCodeAt(),
    },
    limit: 30,
  })
  ctx.success('歌手列表获取成功', singerDate)
}
//获取歌手详情
async function getSingerDetail(ctx) {
  //进行分页查询
  const { id } = ctx.request.query
  //进行数据库存放
  //数据库查询
  const singerdetail = await Singer.findAll({
    where: {
      netSingerId: id,
    },
  })
  ctx.success('歌手列表获取成功', singerdetail)
}

module.exports = {
  getHotSingerList,
  getSingerList,
  getSingerDetail,
}
