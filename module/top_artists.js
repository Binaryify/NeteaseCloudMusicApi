// 热门歌手

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 50,
        offset: query.offset || 0,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/artist/top`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}