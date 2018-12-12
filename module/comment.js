// 发送与删除评论

module.exports = (query, request) => {
    query.cookie.os = 'pc'
    query.t = (query.t == 1 ? 'add' : 'delete')
    query.type = {
        0: 'R_SO_4_', //  歌曲
        1: 'R_MV_5_', //  MV
        2: 'A_PL_0_', //  歌单
        3: 'R_AL_3_', //  专辑
        4: 'A_DJ_1_', //  电台,
        5: 'R_VI_62_' //  视频
    }[query.type]
    const data = {
        threadId: query.type + query.id
    }
    if(query.t == 'add')
        data.content = query.content
    else if(query.t == 'delete')
        data.commentId = query.commentId
    return request(
        'POST', `https://music.163.com/weapi/resource/comments/${query.t}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}