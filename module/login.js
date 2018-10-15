// 邮箱登录

const crypto = require('crypto')

module.exports = (query, request) => {
    const data = {
        username: query.email,
        password: crypto.createHash('md5').update(query.password).digest('hex'),
        rememberLogin: 'true'
    }
    return request(
        'POST', `http://music.163.com/weapi/login`, data,
        {crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy}
    )
}