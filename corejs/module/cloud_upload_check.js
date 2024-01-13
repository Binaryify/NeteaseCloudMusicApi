// 歌曲上传云盘检查

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/api/cloud/upload/check`,
    {
      bitrate: String(query.bitrate),
      ext: '',
      length: query.songFile.size,
      md5: query.songFile.md5,
      songId: '0',
      version: 1,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
