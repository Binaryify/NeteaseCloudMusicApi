const { default: axios } = require('axios')
var xml2js = require('xml2js')
var parser = new xml2js.Parser(/* options */)
module.exports = async (query, request) => {
  let ext = 'mp3'
  if (query.songFile.name.indexOf('flac') > -1) {
    ext = 'flac'
  }
  const filename = query.songFile.name
    .replace('.' + ext, '')
    .replace(/\s/g, '')
    .replace(/\./g, '_')
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  if (!query.songFile) {
    return Promise.reject({
      status: 500,
      body: {
        msg: '请上传音乐文件',
        code: 500,
      },
    })
  }

  const tokenRes = await request(
    'POST',
    `https://music.163.com/weapi/nos/token/alloc`,
    {
      bucket: 'ymusic',
      ext: ext,
      filename: filename,
      local: false,
      nos_product: 0,
      type: 'other',
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy },
  )

  const objectKey = tokenRes.body.result.objectKey.replace('/', '%2F')
  const res = await axios({
    method: 'post',
    url: `https://ymusic.nos-hz.163yun.com/${objectKey}?uploads`,
    headers: {
      'x-nos-token': tokenRes.body.result.token,
      'Content-Type': 'audio/mpeg',
    },
    data: null,
  })
  // return xml
  const res2 = await parser.parseStringPromise(res.data)

  await axios({
    method: 'put',
    url: `https://ymusic.nos-hz.163yun.com/${objectKey}?partNumber=1&uploadId=${res2.InitiateMultipartUploadResult.UploadId[0]}`,
    headers: {
      'x-nos-token': tokenRes.body.result.token,
    },
    data: query.songFile.data,
  })
  return {
    status: 200,
    body: {
      code: 200,
    },
  }
}
