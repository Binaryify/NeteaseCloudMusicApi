// 获取音乐人任务

module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/nmusician/workbench/mission/stage/list `,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
