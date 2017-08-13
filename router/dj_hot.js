const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    cateId:req.query.cat,
    type:req.query.order,
    limit: req.query.limit,
    offset: req.query.offset,
    "csrf_token": ""
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/hot',
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