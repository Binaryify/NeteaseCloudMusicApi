const { Hot, Song, Singer } = require('../models/index')

async function getHotList(ctx) {
  const hotData = await Hot.findAll({})
  if (hotData) {
    ctx.success('热词推荐成功', hotData)
  } else {
    ctx.fail('获取热词推荐失败')
  }
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
  const getSuggestList = await Song.findAll({})
}


//修改更新频率
async function updateFrequency() {}

module.exports = {
  getHotList,
}
