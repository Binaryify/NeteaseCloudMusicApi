// 搜索建议

module.exports = (query, request) => {
    const data = {
        s: query.keywords || ''
    }
    return request(
        'POST', `http://music.163.com/weapi/search/suggest/web`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}