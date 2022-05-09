const assert = require('assert')
const got = require('got')
const host = global.host || 'http://localhost:3000'

describe('测试获取歌曲是否正常', () => {
  it('歌曲的 url 不应该为空', (done) => {
    const qs = {
      id: 462791935,
      br: 999000,
      realIP: '116.25.146.177',
    }

    got
      .get(`${host}/song/url`, {
        responseType: 'json',
        searchParams: qs,
      })
      .then(({ statusCode, body }) => {
        if (statusCode == 200) {
          assert(!!body.data[0].url)
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
