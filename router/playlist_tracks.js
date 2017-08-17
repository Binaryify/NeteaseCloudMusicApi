const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')
//收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
router.get('/', (req, res) => {
  const op = req.query.op
  const pid = req.query.pid
  const tracks = req.query.tracks
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  // console.log('COOKIESS', cookie)
  const data = {
    op: op,
    pid: pid,
    tracks: tracks,
    trackIds: JSON.stringify([tracks]),
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/manipulate/tracks',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
