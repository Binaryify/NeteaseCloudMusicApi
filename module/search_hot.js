// 热门搜索

module.exports = (query, request) => {
    const data = {
        type: 1111
    }
    return request(
        'POST', `http://music.163.com/weapi/search/hot`, data,
        {crypto: 'weapi', ua: 'mobile', cookie: query.cookie, proxy: query.proxy}
    )
}