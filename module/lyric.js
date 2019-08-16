// 歌词

module.exports = (query, request) => {
  const data={
    id: query.id
  }
  return request(
    'POST', `https://music.163.com/weapi/song/lyric?lv=-1&kv=-1&tv=-1`, data,
    {crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy}
  )
}