// 获取图片上传需要的key和token

module.exports = (query, request) => {
  const data = {
    bucket: 'yyimgs',
    ext: 'jpg',
    filename: query.imgFile.name,
    // filename: 'test.jpg',
    local: false,
    nos_product: 0,
    return_body: `{"code":200,"size":"$(ObjectSize)"}`,
    type: 'other',
  }
  return request('POST', `https://music.163.com/weapi/nos/token/alloc`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  })
}
