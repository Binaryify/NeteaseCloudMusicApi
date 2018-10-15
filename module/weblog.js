// 操作记录

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/feedback/weblog`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}