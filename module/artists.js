// 歌手单曲

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/v1/artist/${query.id}`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}