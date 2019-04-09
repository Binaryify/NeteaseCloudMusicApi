// 发送验证码

module.exports = (query, request) => {
  const data = {
    ctcode: '86',
    cellphone: query.cellphone,
    captcha: query.captcha
  }
  return request(
    'POST',
    `https://music.163.com/weapi/sms/captcha/verify`,
    data,
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
  )
}
