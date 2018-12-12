// 付费电台

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 10,
        offset: query.offset || 0
    }
    return request(
        'POST', `https://music.163.com/weapi/djradio/home/paygift/list?_nmclfl=1`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}