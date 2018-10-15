// 推荐新歌

module.exports = (query, request) => {
    const data = {
        type: "recommend"
    }
    return request(
        'POST', `http://music.163.com/weapi/personalized/newsong`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}