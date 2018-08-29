module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const action = req.query.action == 1 ? 'add' : 'delete'
  const typeMap = {
    0: 'R_SO_4_', //歌曲
    1: 'R_MV_5_', //mv
    2: 'A_PL_0_', //歌单
    3: 'R_AL_3_', //专辑
    4: 'A_DJ_1_' //电台
  }
  const type = typeMap[req.query.type]

  let data = {
    threadId: `${type}${id}`,
    csrf_token: ''
  }

  if (action == 'add') {
    data = {
      ...data,
      content: req.query.content
    }
  }

  if (action == 'delete') {
    data = {
      ...data,
      commentId: req.query.commentId
    }
  }

  const url = `/weapi/resource/comments/${action}`

  // console.log({ url, data })
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
