// 邮箱登录

const CryptoJS = require('crypto-js')

module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.10.90'
  const data = {
    username: query.email,
    password: query.md5_password || CryptoJS.MD5(query.password).toString(),
    rememberLogin: 'true',
  }
  return request('POST', `https://music.163.com/api/login`, data, {
    crypto: 'weapi',
    ua: 'pc',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
