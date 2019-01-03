// 云盘数据详情(暂时不要使用)

module.exports = (query, request) => {
    const data = {
        byids: query.id,
        id: query.id
    }
    return request(
        'POST', `https://music.163.com/weapi/v1/cloud/get/byids`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}