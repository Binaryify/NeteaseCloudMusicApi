const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/login/token/refresh`,
    'POST',
    data,
    cookie,
    (music_req, cookie) => {
      res.set({
        'Set-Cookie': cookie
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
