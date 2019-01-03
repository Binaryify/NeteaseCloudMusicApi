// 热门电台

module.exports = (query, request) => {
    const data = {
        cat: query.type,
        cateId: query.type,
        type: query.type,
        categoryId: query.type,
        category: query.type,
        limit: query.limit,
        offset: query.offset
    }
    return request(
        'POST', `https://music.163.com/weapi/djradio/hot/v1`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}