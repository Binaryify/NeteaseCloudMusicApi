const md5 = require('md5')
const axios = require('axios')
module.exports = async (query, request) => {
  let urlFile = { sname: '', data: '', md5: '', mimetype: '', size: '' }
  await axios({
    method: 'get',
    url: query.songUrl,
    responseType: 'arraybuffer',
  }).then(function (response) {
    const buffer = Buffer.from(response.data, 'utf-8')
    urlFile.mimetype = 'audio/mpeg'
    urlFile.sname = query.songName
    urlFile.data = buffer
  })
  let ext = 'mp3'
  if (urlFile.sname.indexOf('flac') > -1) {
    ext = 'flac'
  }
  const filename = urlFile.sname
    .replace('.' + ext, '')
    .replace(/\s/g, '')
    .replace(/\./g, '_')
  if (urlFile.md5 == '') {
    // 命令行上传没有md5和size信息,需要填充
    urlFile.md5 = md5(urlFile.data)
    urlFile.size = urlFile.data.byteLength
  }
  //   获取key和token
  const tokenRes = await request(
    'POST',
    `https://music.163.com/weapi/nos/token/alloc`,
    {
      bucket: 'jd-musicrep-privatecloud-audio-public',
      ext: ext,
      filename: filename,
      local: false,
      nos_product: 3,
      type: 'audio',
      md5: urlFile.md5,
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )

  // 上传
  const objectKey = tokenRes.body.result.objectKey.replace('/', '%2F')
  try {
    await axios({
      method: 'post',
      url: `http://45.127.129.8/jd-musicrep-privatecloud-audio-public/${objectKey}?offset=0&complete=true&version=1.0`,
      headers: {
        'x-nos-token': tokenRes.body.result.token,
        'Content-MD5': urlFile.md5,
        'Content-Type': 'audio/mpeg',
        'Content-Length': String(urlFile.size),
      },
      data: urlFile.data,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })
  } catch (error) {
    console.log('error', error.response)
    throw error.response
  }
  return {
    ...tokenRes,
  }
}
