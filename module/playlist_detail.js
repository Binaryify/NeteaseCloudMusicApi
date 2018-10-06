// 歌单详情

module.exports = (query, request) => {
    const data = {
        id: query.id,
        n: 100000,
        s: query.s || 8
    }
    return request(
        'POST', `http://music.163.com/weapi/v3/playlist/detail`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}