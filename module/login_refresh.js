// 登录刷新

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/login/token/refresh`, {},
        {crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy}
    )
}