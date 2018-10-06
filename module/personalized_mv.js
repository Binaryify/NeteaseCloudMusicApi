// 推荐MV

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/personalized/mv`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}