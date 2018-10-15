// 推荐歌单

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 30,
        offset: query.limit || 0,
        total: true,
        n: 1000
    }
    return request(
        'POST', `http://music.163.com/weapi/personalized/playlist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}