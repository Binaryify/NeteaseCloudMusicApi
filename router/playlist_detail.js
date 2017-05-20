const http = require('http')
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  let detail, imgurl
  const data = {
    "id": req.query.id,
    "offset": 0,
    "total": true,
    "limit": 1000,
    "n": 1000,
    "csrf_token": ""
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/playlist/detail',
    'POST',
    data,
    cookie,
    music_req => {
      console.log(music_req)
      // detail = music_req
      res.send(music_req)
      // mergeRes()
    },
    err => {
      res.status(502).send('fetch error')
    }
  )

  // FIXME:i dont know the api to get coverimgurl
  // so i get it by parsing html
  // const http_client = http.get({
  //   hostname: 'music.163.com',
  //   path: '/playlist?id=' + req.query.id,
  //   headers: {
  //     'Referer': 'http://music.163.com',
  //   },
  // }, function (res) {
  //   res.setEncoding('utf8')
  //   let html = ''
  //   res.on('data', function (chunk) {
  //     html += chunk
  //   })
  //   res.on('end', function () {
  //     console.log('end', html)
  //     const regImgCover = /\<img src=\"(.*)\" class="j-img"/ig
  //     imgurl = regImgCover.exec(html)[1]
  //     mergeRes()

  //   })
  // })

  // function mergeRes() {
  //   if (imgurl != undefined && detail != undefined) {
  //     detail = JSON.parse(detail)
  //     detail.playlist.picUrl = imgurl
  //     res.send(detail)
  //   }
  // }
})



module.exports = router