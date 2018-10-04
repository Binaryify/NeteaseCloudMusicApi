// 精选电台

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/djradio/recommend/v1`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}
