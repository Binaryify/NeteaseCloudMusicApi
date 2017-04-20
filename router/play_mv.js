const express = require("express")
const router = express()
const request = require("request")
const http = require('http')
router.get("/", (req, res) => {
  let ne_req = ''
  let arr=[]
  const url = "http://v4.music.126.net/20170421073027/3685c14b705852a3e16b3a5bd73f0d74/web/cloudmusic/MjQ3NDQ3MjUw/89a6a279dc2acfcd068b45ce72b1f560/bf2750483ed02d4c6263dffefa5959d7.mp4"
  const options = {
    url: url,
    headers: {
      'Referer': 'music.163.com',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
      'Connection': 'keep-alive',
      'Content-Type': 'video/mp4',
      'Referer': 'http://music.163.com',
      'Host': 'music.163.com',
      'Cookie': req.get('Cookie') ? req.get('Cookie') : '',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',
    }
  }
  console.log(options)
  const pipe=request(options)
  pipe.on('error', function (err) {
      console.log(err)
    })
  pipe.on('data',data=>{
    console.log(111)
    arr.push(data)
  }) 
  pipe.on('end',()=>{
    const d=Buffer.concat(arr)
    res.send(d)
  })
})

module.exports = router