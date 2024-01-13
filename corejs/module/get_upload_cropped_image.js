// 获取裁剪后图片的id

module.exports = (query, request) => {
  const imgSize = query.imgSize || 300
  const imgX = query.imgX || 0
  const imgY = query.imgY || 0
  return request(
    'POST',
    `https://music.163.com/upload/img/op?id=${query.docId}&op=${imgX}y${imgY}y${imgSize}y${imgSize}`,
    {},
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )
}
