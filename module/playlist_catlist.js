// 全部歌单分类

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/playlist/catalogue`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}