const { NeteseCloudMusicApi } = require('./corejs/NeteaseCloudMusic.js')
const netease_cloud_music_api = new NeteseCloudMusicApi()

const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

// netease_cloud_music_api.upload()
async function upload(file) {
  var formData = new FormData()
  formData.append('imgFile', fs.createReadStream(file))
  const imgSize = await getImgSize(file) // 你需要实现这个函数
  const res = await axios({
    method: 'post',
    url: `/playlist/cover/update?id=${playlist_id}&cookie=${cookieToken}&imgSize=${
      imgSize.width
    }&imgX=0&imgY=0&timestamp=${Date.now()}`,
    headers: formData.getHeaders(),
    data: formData,
  })
  // 在 Node.js 中，你不能直接操作 DOM
  // 你可以将 URL 保存到一个变量中，或者写入到一个文件中
  const coverUrl = res.data.data.url
}
