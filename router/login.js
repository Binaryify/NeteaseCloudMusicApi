const express = require("express")
const crypto = require('crypto')
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const email = req.query.email
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const md5sum = crypto.createHash('md5')
  md5sum.update(req.query.password)
  const data = {
    'username': email,
    'password': md5sum.digest('hex'),
    'rememberLogin': 'true'
  }
  console.log(email,req.query.password);
  
  createWebAPIRequest(
    'music.163.com',
    '/weapi/login?csrf_token=',
    'POST',
    data,
    cookie,
    (music_req, cookie) => {
      console.log(music_req)
      res.set({
        'Set-Cookie': cookie,
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router