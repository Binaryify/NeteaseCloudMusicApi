// 歌曲简要百科信息
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request('POST', `https://music.163.com/weapi/rep/ugc/song/get`, data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
    url: '/api/rep/ugc/song/get',
  })
}
