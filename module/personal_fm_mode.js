// 私人FM - 模式选择

// aidj, DEFAULT, FAMILIAR, EXPLORE, SCENE_RCMD ( EXERCISE, FOCUS, NIGHT_EMO  )
// 来不及解释这几个了

module.exports = (query, request) => {
    const data = {
        mode: query.mode,
        subMode: query.submode,
        limit: query.limit ?? 3
    }
    return request(
      'POST',
      `https://interface3.music.163.com/eapi/v1/radio/get`,
      data,
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
        url: "/api/v1/radio/get"
      },
    )
  }
  