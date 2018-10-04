// 退出登录

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/logout`, {},
        {crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy}
    )
}