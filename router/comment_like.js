//comment like 
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    "threadId": req.query.origin,
		commentId:id,
		"csrf_token": ""
  }
  const action=(req.query.t==1?'like':'unlike')
  
  const url = `/weapi/v1/comment/${action}`
  createWebAPIRequest(
    'music.163.com',
    url,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})



module.exports = router