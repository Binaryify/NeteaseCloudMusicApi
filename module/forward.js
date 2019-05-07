// 转发动态  

const crypto = require('crypto')

module.exports = (query, request) => {
    query.cookie.os = 'osx'
    const data = {
		forwards: query.forwards,
		id: query.id,
        eventUserId: query.eventUserId,
		checkToken:query.checkToken
    }
    return request(
        'POST', `https://music.163.com/weapi/event/forward`, data,
        {crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy}
    )
}