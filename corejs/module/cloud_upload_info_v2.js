// 歌曲上传云盘检查

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/upload/cloud/info/v2`,
    {
      md5: query.songFile.md5,
      songid: query.songId,
      filename: query.songFile.name,
      song: query.metadata.songName || query.filename,
      album: query.metadata.album || '未知专辑',
      artist: query.metadata.artist || '未知艺术家',
      bitrate: String(query.bitrate),
      resourceId: query.resourceId,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
