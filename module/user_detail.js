// 用户详情

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/v1/user/detail/${query.uid}`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}