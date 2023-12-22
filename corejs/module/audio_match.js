function createRandomString(len) {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = len; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)]
  return result
}
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    algorithmCode: 'shazam_v2',
    times: 1,
    sessionId: createRandomString(16),
    duration: Number(query.duration),
    from: 'recognize-song',
    decrypt: '1',
    rawdata: query.audioFP,
  }
  return request('POST', `https://music.163.com/api/music/audio/match`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
