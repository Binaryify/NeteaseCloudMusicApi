// 歌手介绍

module.exports = (query, request) => {
    const data = {
        id: query.id
    }
    return request(
        'POST', `http://music.163.com/weapi/artist/introduction`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}