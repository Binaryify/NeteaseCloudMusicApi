// 红心与取消红心歌曲

module.exports = (query, request) => {
    query.like = (query.like ? true : false)
    const data = {
        trackId: query.id,
        like: query.like
    }
    return request(
        'POST', `http://music.163.com/weapi/radio/like?alg=${query.alg || 'itembased'}&trackId=${query.id}&like=${query.like}&time=${query.time || 25}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}