const assert = require('assert')
const axios = require('axios')
const host = global.host || 'http://localhost:3000'
const config = require('../util/config.json')
describe('测试获取歌曲是否正常', () => {
  it('歌曲的 url 不应该为空', (done) => {
    const qs = {
      id: 462791935,
      br: 999000,
      realIP: '116.25.146.177',
      cookie: config.anonymous_token,
    }

    axios
      .get(`${host}/song/url`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(!!data.data[0].url)
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
