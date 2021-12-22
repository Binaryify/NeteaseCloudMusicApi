// 搜索建议

module.exports = async (query, request) => {
  const data = {
    s: query.keywords || '',
  }
  let type = query.type == 'mobile' ? 'keyword' : 'web'
  const res = await  request(
    'POST',
    `https://music.163.com/weapi/search/suggest/` + type,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  console.log(res)
  return res
}
