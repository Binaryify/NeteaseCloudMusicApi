module.exports = (req, res, createWebAPIRequest) => {
  let cookie = req.get('Cookie') ? req.get('Cookie') : ''
  cookie = 'os=pc;' + cookie
  const rid = req.query.id
  const typeMap = {
    0: 'R_SO_4_', //  歌曲
    1: 'R_MV_5_', //  mv
    2: 'A_PL_0_', //  歌单
    3: 'R_AL_3_', //  专辑
    4: 'A_DJ_1_', //  电台,
    5: 'R_VI_62_' //  视频
  }
  const type = typeMap[req.query.type]
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  const url = `/weapi/v1/resource/hotcomments/${type}${rid}`
  createWebAPIRequest(
    'music.163.com',
    url,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
}
