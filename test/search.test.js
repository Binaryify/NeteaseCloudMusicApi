const assert = require('assert')
const { default: axios } = require('axios')
const host = global.host || 'http://localhost:3000'
const config = require('../util/config.json')
describe('测试搜索是否正常', () => {
  it('获取到的数据的 name 应该和搜索关键词一致', (done) => {
    const qs = {
      keywords: '海阔天空',
      type: 1,
      realIP: '116.25.146.177',
    }
    axios
      .get(`${host}/search`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(data.result.songs[0].name === '海阔天空')
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
