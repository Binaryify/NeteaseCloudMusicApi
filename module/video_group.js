// 视频链接

module.exports = (query, request) => {
  const data = {
    groupId: query.id,
    offset: query.offset || 0,
    needUrl: true,
    resolution: query.res || 1080
  }
  return request(
    'POST', `https://music.163.com/weapi/videotimeline/videogroup/get`, data, {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy
    }
  )
}
