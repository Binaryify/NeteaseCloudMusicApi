// 云盘数据

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 10,
        offset: query.offset || 0
    }
    return request(
        'POST', `http://music.163.com/weapi/v1/cloud/get`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}