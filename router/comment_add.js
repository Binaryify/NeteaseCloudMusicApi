//comment add 
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id=req.query.id//  歌曲 id
  const content = req.query.content;
  const typeMap={
    0:"R_SO_4_",//歌曲
    1:"R_MV_5_",//mv
    2:"A_PL_0_",//歌单
    3:"R_AL_3_",//专辑
    4:"A_DJ_1_",//电台
  }
  const type=typeMap[req.query.type]
  const data = {
    "threadId": `${type}${id}`,
    "content":content,
		"csrf_token": ""
  }
  
  createWebAPIRequest(
    'music.163.com',
    '/weapi/resource/comments/add',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})



module.exports = router