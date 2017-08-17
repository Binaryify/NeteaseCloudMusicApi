const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const data = {
    limit: req.query.limit || 10,
    offset: req.query.offset || 0,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/cloud/get',
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
