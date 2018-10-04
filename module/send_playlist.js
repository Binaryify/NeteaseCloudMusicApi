// 私信歌单

module.exports = (query, request) => {
    const data = {
        id: query.playlist,
        type: 'playlist',
        msg: query.msg,
        userIds: '[' + query.user_ids + ']'
    }
    return request(
        'POST', `http://music.163.com/weapi/msg/private/send`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}