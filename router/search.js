// 搜索
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const keywords = req.query.keywords
  const type = req.query.type || 1
  const limit = req.query.limit || 30
  const offset = req.query.offset || 0
  // *(type)* 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
  const data = {
    csrf_token: '',
    limit,
    type,
    s: keywords,
    offset
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/search/get',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
}
