// 电台节目列表

module.exports = (query, request) => {
    const data = {
        radioId: query.rid,
        limit: query.limit || 30,
        offset: query.offset || 0,
        asc: query.asc
    }
    return request(
        'POST', `https://music.163.com/weapi/dj/program/byradio`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}