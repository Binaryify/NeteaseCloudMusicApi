// 首页轮播图

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/api/v2/banner/get`, {clientType: "pc"},
        {crypto: 'linuxapi', proxy: query.proxy}
    )
}