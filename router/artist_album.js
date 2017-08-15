const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    'offset': req.query.offset || 0,
    getcounts:true,
    'limit': req.query.limit || 999,
    "csrf_token": ""
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/albums/${id}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})


module.exports = router