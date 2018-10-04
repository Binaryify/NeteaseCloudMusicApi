// 音乐链接

module.exports = (query, request) => {
    const data = {
        ids: '[' + parseInt(query.id) + ']',
        br: parseInt(query.br || 999000)
    }
    return request(
        'POST', `http://music.163.com/weapi/song/enhance/player/url`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}