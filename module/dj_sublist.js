// 我的电台列表

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 30,
        offset: query.offset || 0,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/djradio/get/subed`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}