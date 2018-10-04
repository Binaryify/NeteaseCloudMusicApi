// 专辑内容

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/v1/album/${query.id}`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}