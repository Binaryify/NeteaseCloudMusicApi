// 手机登录

// import CryptoJS from 'crypto-js'
const CryptoJS = require('crypto-js')

module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.10.90'
  const data = {
    phone: query.phone,
    countrycode: query.countrycode || '86',
    captcha: query.captcha,
    [query.captcha ? 'captcha' : 'password']: query.captcha
      ? query.captcha
      : query.md5_password ||
        //crypto.createHash('md5').update(query.password).digest('hex'),
        CryptoJS.MD5(query.password).toString(),
    rememberLogin: 'true',
  }
  return request('POST', `https://music.163.com/weapi/login/cellphone`, data, {
    crypto: 'weapi',
    ua: 'pc',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
