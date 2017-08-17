const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/mv/toplist',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
