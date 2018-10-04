// 最新单曲(暂时废弃?)

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/v1/discovery/new/songs`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}