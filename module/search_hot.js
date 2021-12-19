// 热门搜索
const { Hot } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const data = {
    type: 1111,
  }
  const res = await request(
    'POST',
    `https://music.163.com/weapi/search/hot`,
    data,
    {
      crypto: 'weapi',
      ua: 'mobile',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  console.log(res)

  if (res.status === 200) {
    const hotlist = res.body.result.hots
    hotlist.forEach((item) => {
      Hot.create({
        first: item.first,
      })
    })
  }
  return res
}
