module.exports = (query, request) => {
  const data = {
    position: query.position,
    programId: query.programId,
    radioId: query.radioId,
  }
  return request(
    'POST',
    `https://interface.music.163.com/weapi/voice/workbench/radio/program/trans`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
