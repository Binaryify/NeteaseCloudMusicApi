// 专辑评论

module.exports = (query, request) => {
    const data = {
        rid: query.id,
        limit: query.limit || 20,
        offset: query.offset || 0
    }
    return request(
        'POST', `http://music.163.com/weapi/v1/resource/comments/R_AL_3_${query.id}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}