const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const data = {
    userId: req.query.uid,
    csrf_token: ''
  }
  console.log(data)
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/get/byuser',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router
