// 邮箱登录

const crypto = require('crypto')

module.exports = async (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    username: query.email,
    password: crypto.createHash('md5').update(query.password).digest('hex'),
    rememberLogin: 'true'
  }
  const result = await request(
    'POST', `https://music.163.com/weapi/login`, data,
    { crypto: 'weapi', ua: 'pc', cookie: query.cookie, proxy: query.proxy }
  )
  if (result.body.code === 502) {
    return {
      status: 200,
      body: {
        'msg': '账号或密码错误',
        'code': 502,
        'message': '账号或密码错误'
      }
    }
  }
  return result
}