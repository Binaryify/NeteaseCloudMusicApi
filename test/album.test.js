const assert = require('assert')
const got = require('got')
const host = global.host || 'http://localhost:3000'

describe('测试获取歌手专辑列表是否正常', () => {
  it('数据的 code 应该为200', (done) => {
    const qs = {
      id: 32311,
    }

    got
      .get(`${host}/album`, {
        responseType: 'json',
        searchParams: qs,
      })
      .then(({ statusCode, body }) => {
        if (statusCode == 200) {
          assert(body.code === 200)
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
