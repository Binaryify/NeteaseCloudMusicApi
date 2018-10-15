// 创建歌单

module.exports = (query, request) => {
    query.cookie.os = 'pc'
    const data = {
        name: query.name
    }
    return request(
        'POST', `http://music.163.com/weapi/playlist/create`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}