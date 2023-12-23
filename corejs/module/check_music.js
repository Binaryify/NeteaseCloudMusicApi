module.exports = (query, request) => {
  const data = {
    ids: '[' + parseInt(query.id) + ']',
    br: parseInt(query.br || 999000),
  }
  return request(
    'POST',
    `https://music.163.com/weapi/song/enhance/player/url`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
