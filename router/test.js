const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    'cat': req.query.id,
    rid: req.query.id,
    id:req.query.id,
    cateId: req.query.id,
    type: "recommend",
    categoryId: req.query.id,
    category: req.query.id,
    categoryCode:req.query.id,
    "total": true,
    uid:req.query.id,
    userid:req.query.id,
    userId:req.query.id,
    offset: req.query.offset || 0,
    limit: req.query.limit || 5
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/get',
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