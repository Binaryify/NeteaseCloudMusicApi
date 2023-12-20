// 歌手简要百科信息
module.exports = (query, request) => {
  const data = {
    artistId: query.id,
  }
  return request('POST', `https://music.163.com/api/rep/ugc/artist/get`, data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
    url: '/api/rep/ugc/artist/get',
  })
}
