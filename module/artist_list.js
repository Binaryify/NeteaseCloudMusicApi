// 歌手分类

/* 
    type 取值
    1:男歌手
    2:女歌手
    3:乐队

    area 取值
    -1:全部
    7华语
    96欧美
    8:日本
    16韩国
    0:其他

    initial 取值 a-z/A-Z
*/
const { Singer } = require('../myapi/app/models/index')
module.exports = async (query, request) => {
  const data = {
    initial: isNaN(query.initial)
      ? (query.initial || '').toUpperCase().charCodeAt() || undefined
      : query.initial,
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: true,
    type: query.type || '1',
    area: query.area,
  }
  const res = await request('POST', `https://music.163.com/api/v1/artist/list`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })

  console.log(res)
  if(res.status == 200) {
    const arr = res.body.artists
    console.log(data, typeof data.initial)
    arr.forEach(item => {
      Singer.create({
        name: item.name,
        picUrl: item.picUrl,
        type: data.type,
        initial: data.initial,
        area: data.area,
        isHot: 0,
        netSingerId: item.id
      })
    });
  }

  return res
}
