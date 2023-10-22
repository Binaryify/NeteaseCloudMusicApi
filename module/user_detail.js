// 用户详情

module.exports = async (query, request) => {
  const res = await request(
    'POST',
    `https://music.163.com/weapi/v1/user/detail/${query.uid}`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  const result = JSON.stringify(res).replace(
    /avatarImgId_str/g,
    'avatarImgIdStr',
  )
  return JSON.parse(result)
}
