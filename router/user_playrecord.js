//播放记录
const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  // type=1时只返回weekData, type=0时返回allData
  const data = {
    type: req.query.type || 0,
    uid: req.query.uid, //用户 id,
    csrf_token: ''
  }
  const action = `/weapi/v1/play/record`
  createWebAPIRequest(
    'music.163.com',
    action,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
