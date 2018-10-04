// 私人FM

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/v1/radio/get`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}