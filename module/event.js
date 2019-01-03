// 动态

module.exports = (query, request) => {
    return request(
        'POST', `https://music.163.com/weapi/v1/event/get`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}