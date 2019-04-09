// 注册账号
const crypto = require('crypto')

module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    password: crypto.createHash('md5').update(query.password).digest('hex'),
    nickname: query.nickname
  }
  return request(
    'POST',
    `https://music.163.com/weapi/register/cellphone`,
    data,
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
  )
}