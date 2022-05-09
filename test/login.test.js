const assert = require('assert')
const got = require('got')
const host = global.host || 'http://localhost:3000'

console.log('注意: 测试登录需在 test/login.test.js 中填写账号密码!!!')
const country_code = '1'
const phone = '3156678705'
const password = '1q2w3e4R'
describe('测试登录是否正常', () => {
  it('手机登录 code 应该等于200', (done) => {
    const qs = {
      countrycode:
        process.env.NCM_API_TEST_LOGIN_COUNTRY_CODE || country_code || '',
      phone: process.env.NCM_API_TEST_LOGIN_PHONE || phone || '',
      password: process.env.NCM_API_TEST_LOGIN_PASSWORD || password || '',
    }

    got
      .get(`${host}/login/cellphone`, {
        responseType: 'json',
        searchParams: qs,
      })
      .then(({ statusCode, body }) => {
        if (statusCode == 200) {
          console.log('昵称:' + body.profile.nickname)
          assert(body.code === 200)
          done()
        } else {
          done('登录错误')
        }
      })
      .catch((err) => {
        done(err)
      })
  })
})
