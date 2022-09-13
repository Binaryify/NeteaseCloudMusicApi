const mm = require('music-metadata')
const uploadPlugin = require('../plugins/song_upload_out')
const md5 = require('md5')
const axios = require('axios').default
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
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const bitrate = 999000
  if (!urlFile) {
    return Promise.reject({
      status: 500,
      body: {
        msg: '请上传音乐文件',
        code: 500,
      },
    })
  }
  if (urlFile.md5 == '') {
    // 命令行上传没有md5和size信息,需要填充
    urlFile.md5 = md5(urlFile.data)
    urlFile.size = urlFile.data.byteLength
  }
  const res = await request(
    'POST',
    `https://interface.music.163.com/api/cloud/upload/check`,
    {
      bitrate: String(bitrate),
      ext: '',
      length: urlFile.size,
      md5: urlFile.md5,
      songId: '0',
      version: 1,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  let artist
  let album
  let songName
  try {
    const metadata = await mm.parseBuffer(urlFile.data, urlFile.mimetype)
    const info = metadata.common

    if (info.title) {
      songName = info.title
    }
    if (info.album) {
      album = info.album
    }
    if (info.artist) {
      artist = info.artist
    }
    // if (metadata.native.ID3v1) {
    //   metadata.native.ID3v1.forEach((item) => {
    //     // console.log(item.id, item.value)
    //     if (item.id === 'title') {
    //       songName = item.value
    //     }
    //     if (item.id === 'artist') {
    //       artist = item.value
    //     }
    //     if (item.id === 'album') {
    //       album = item.value
    //     }
    //   })
    //   // console.log({
    //   //   songName,
    //   //   album,
    //   //   songName,
    //   // })
    // }
    // console.log({
    //   songName,
    //   album,
    //   songName,
    // })
  } catch (error) {
    console.log(error)
  }
  const tokenRes = await request(
    'POST',
    `https://music.163.com/weapi/nos/token/alloc`,
    {
      bucket: '',
      ext: ext,
      filename: filename,
      local: false,
      nos_product: 3,
      type: 'audio',
      md5: urlFile.md5,
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )

  if (res.body.needUpload) {
    const uploadInfo = await uploadPlugin(query, request)
    // console.log('uploadInfo', uploadInfo.body.result.resourceId)
  }
  // console.log(tokenRes.body.result)
  const res2 = await request(
    'POST',
    `https://music.163.com/api/upload/cloud/info/v2`,
    {
      md5: urlFile.md5,
      songid: res.body.songId,
      filename: urlFile.sname,
      song: songName || filename,
      album: album || '未知专辑',
      artist: artist || '未知艺术家',
      bitrate: String(bitrate),
      resourceId: tokenRes.body.result.resourceId,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  // console.log({ res2, privateCloud: res2.body.privateCloud })
  // console.log(res.body.songId, 'songid')
  const res3 = await request(
    'POST',
    `https://interface.music.163.com/api/cloud/pub/v2`,
    {
      songid: res2.body.songId,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  // console.log({ res3 })
  return {
    status: 200,
    body: {
      ...res.body,
      ...res3.body,
      // ...uploadInfo,
    },
    cookie: res.cookie,
  }
}
