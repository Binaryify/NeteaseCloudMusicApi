const { Hot } = require('../models/index')

//获取轮播图

async function getHotList(ctx) {
  const hotData = await Hot.findAll({})
  if (hotData) {
    ctx.success('获取轮播图成功', hotData)
  } else {
    ctx.fail('获取轮播图失败')
  }
}

module.exports = {
  getHotList,
}
