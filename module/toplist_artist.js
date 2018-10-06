// 歌手榜

module.exports = (query, request) => {
    const data = {
        type: 1,
        limit: 100,
        offset: 0,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/toplist/artist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}