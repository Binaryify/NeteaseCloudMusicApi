// 签到
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    "csrf_token": ""
  }
  // {'android': {'point': 3, 'code': 200}, 'web': {'point': 2, 'code': 200}}
  // {'android': {'code': -2, 'msg': '重复签到'}, 'web': {'code': -2, 'msg': '重复签到'}}
  // 'android': {'code': 301}, 'web': {'code': 301}}

  let type = req.query.type || 0  //0为安卓端签到 3点经验,1为网页签到,2点经验
  const action = `/weapi/point/dailyTask?type=${type}`
  createWebAPIRequest(
    'music.163.com',
    action,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})



module.exports = router