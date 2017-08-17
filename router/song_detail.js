const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = parseInt(req.query.ids)
  const data = {
    // "id": id,
    c: JSON.stringify([{ id: id }]),
    ids: '[' + id + ']',
    csrf_token: ''
  }
  console.log(data)
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/song/detail',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
