// MV链接

module.exports = (query, request) => {
    const data = {
        id: query.id,
        r: query.res || 1080
    }
    return request(
        'POST', `https://music.163.com/weapi/song/enhance/play/mv/url`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}