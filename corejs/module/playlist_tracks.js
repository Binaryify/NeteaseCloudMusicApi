// 收藏单曲到歌单 从歌单删除歌曲
// Todo 这个错误捕捉的逻辑之后补到SDK吧
module.exports = async (query, request) => {
  // query.cookie.os = 'pc'
  const tracks = query.tracks.split(',')

  try {
    const res = await request(
      'POST',
      `https://music.163.com/weapi/playlist/manipulate/tracks`,
      {
        op: query.op, // del,add
        pid: query.pid, // 歌单id
        trackIds: JSON.stringify(tracks), // 歌曲id
        imme: 'true',
      },
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
      },
    )
    return {
      status: 200,
      body: {
        ...res,
      },
    }
  } catch (error) {
    if (error.body.code === 512) {
      return request(
        'POST',
        `https://music.163.com/api/playlist/manipulate/tracks`,
        {
          op: query.op, // del,add
          pid: query.pid, // 歌单id
          trackIds: JSON.stringify([...tracks, ...tracks]),
          imme: 'true',
        },
        {
          crypto: 'weapi',
          cookie: query.cookie,
          proxy: query.proxy,
          realIP: query.realIP,
        },
      )
    } else {
      return {
        status: 200,
        body: error.body,
      }
    }
  }
}
