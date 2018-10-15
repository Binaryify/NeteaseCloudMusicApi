// 用户动态

module.exports = (query, request) => {
    const data = {
        time: -1,
        getcounts: true
    }
    return request(
        'POST', `http://music.163.com/weapi/event/get/${query.uid}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}