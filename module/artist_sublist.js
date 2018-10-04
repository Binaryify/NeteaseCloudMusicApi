// 我的歌手列表

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 25,
        offset: query.offset || 0,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/artist/sublist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}