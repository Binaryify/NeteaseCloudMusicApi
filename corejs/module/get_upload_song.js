// 获取歌曲上传需要的key和token

module.exports = (query, request) => {
  let ext = 'mp3'
  if (query.songFile.name.indexOf('flac') > -1) {
    ext = 'flac'
  }
  const filename = query.songFile.name
    .replace('.' + ext, '')
    .replace(/\s/g, '')
    .replace(/\./g, '_')
  //   获取key和token
  return request(
    'POST',
    `https://music.163.com/weapi/nos/token/alloc`,
    {
      bucket: '',
      ext: query.ext,
      filename: query.filename,
      local: false,
      nos_product: 3,
      type: 'audio',
      md5: query.songFile.md5,
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )
}
