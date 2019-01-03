// 收藏单曲到歌单 从歌单删除歌曲

module.exports = (query, request) => {
    const data = {
        op: query.op, // del,add
        pid: query.pid, // 歌单id
        trackIds: '[' + query.tracks + ']' // 歌曲id
    }
    return request(
        'POST', `https://music.163.com/weapi/playlist/manipulate/tracks`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}