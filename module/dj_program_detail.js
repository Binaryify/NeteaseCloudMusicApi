// 电台节目详情

module.exports = (query, request) => {
    const data = {
        id: query.id
    }
    return request(
        'POST', `http://music.163.com/weapi/dj/program/detail`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}