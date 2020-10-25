module.exports = (query, request) => {
  const data = {
    userTaskId: query.userTaskId,
    depositCode: '0',
  }
  return request(
    'POST',
    `https://music.163.com/api/usertool/task/point/receive`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
