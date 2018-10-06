// 收藏计数

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/subcount`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}