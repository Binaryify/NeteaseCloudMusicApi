// 获取歌曲上传需要的key和token

module.exports = (query, request) => {
  //   获取key和token
  return request(
    'POST',
    `https://music.163.com/weapi/nos/token/alloc`,
    {
      bucket: 'ymusic',
      ext: query.ext,
      filename: query.filename,
      local: false,
      nos_product: 0,
      type: 'other',
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )
}
