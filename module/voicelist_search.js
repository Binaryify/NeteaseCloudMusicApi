module.exports = (query, request) => {
  const data = {
    fee: '-1',
    limit: query.limit || '200',
    offset: query.offset || '0',
    podcastName: query.podcastName || '',
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
