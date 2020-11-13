module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '7.3.27'
  query.type = {
    0: 'R_SO_4_', //  歌曲
    1: 'R_MV_5_', //  MV
    2: 'A_PL_0_', //  歌单
    3: 'R_AL_3_', //  专辑
    4: 'A_DJ_1_', //  电台,
    5: 'R_VI_62_', //  视频
    6: 'A_EV_2_', //  动态
  }[query.type]
  const threadId = query.type + query.id
  const data = {
    targetUserId: query.uid,
    commentId: query.cid,
    cursor: '-1',
    threadId: threadId,
    pageNo: 1,
    idCursor: -1,
    pageSize: 100,
  }
  return request(
    'POST',
    `https://music.163.com/api/v2/resource/comments/hug/list`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
