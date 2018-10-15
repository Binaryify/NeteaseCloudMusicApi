// 歌曲详情

module.exports = (query, request) => {
    query.ids = query.ids.split(/\s*,\s*/)
    const data = {
        c: '[' + query.ids.map(id => ('{"id":' + id + '}')).join(',') + ']',
        ids: '[' + query.ids.join(',') + ']'
    }
    return request(
        'POST', `http://music.163.com/weapi/v3/song/detail`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}