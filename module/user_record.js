// 听歌排行

module.exports = (query, request) => {
    const data = {
        uid: query.uid,
        type: query.type || 1 // 1: 最近一周, 0: 所有时间
    }
    return request(
        'POST', `http://music.163.com/weapi/v1/play/record`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}