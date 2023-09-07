module.exports = (query, request) => {
  const data = {
    fee: '-1',
    limit: '200',
    podcastName: '',
  }
  return request(
    'POST',
    `https://interface.music.163.com/weapi/voice/workbench/voicelist/search`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
