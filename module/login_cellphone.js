// 手机登录

const crypto = require('crypto')

module.exports = (query, request) => {
    const data = {
        phone: query.phone,
        password: crypto.createHash('md5').update(query.password).digest('hex'),
        rememberLogin: 'true'
    }
    return request(
        'POST', `http://music.163.com/weapi/login/cellphone`, data,
        {crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy}
    )
}