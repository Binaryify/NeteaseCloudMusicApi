const assert = require('assert')
const got = require('got')
const host = global.host || 'http://localhost:3000'

describe('测试获取歌词是否正常', () => {
  it('数据应该有 lrc 字段', (done) => {
    const qs = {
      id: 347230,
    }

    got
      .get(`${host}/lyric`, {
        responseType: 'json',
        searchParams: qs,
      })
      .then(({ statusCode, body }) => {
        if (statusCode == 200) {
          assert(typeof body.lrc !== 'undefined')
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
