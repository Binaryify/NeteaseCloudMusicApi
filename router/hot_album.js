
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

// type ALL, ZH,EA,KR,JP
router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
		"csrf_token": ""
  }
  createWebAPIRequest(
    'music.163.com',
    '/api/discovery/newAlbum',
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