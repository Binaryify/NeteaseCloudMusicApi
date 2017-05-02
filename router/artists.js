const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
		"csrf_token": ""
  }
  const id = req.query.id
  const offset = req.query.offset || 0
  const limit = req.query.limit || 50
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/artist/${id}?offset=${offset}&limit=${limit}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})


module.exports = router