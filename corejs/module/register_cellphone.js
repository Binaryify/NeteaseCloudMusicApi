// 注册账号
// import CryptoJS from 'crypto-js'
const CryptoJS = require('crypto-js')

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    password: CryptoJS.MD5(query.password).toString(), //crypto.createHash('md5').update(query.password).digest('hex'),
    nickname: query.nickname,
    countrycode: query.countrycode || '86',
  }
  return request('POST', `https://music.163.com/api/register/cellphone`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
