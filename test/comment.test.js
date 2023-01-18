const assert = require('assert')
const { default: axios } = require('axios')
const host = global.host || 'http://localhost:3000'
const config = require('../util/config.json')
describe('测试获取评论是否正常', () => {
  it('数据的 code 应该为200', (done) => {
    const qs = {
      id: 32311,
      realIP: '116.25.146.177',
    }

    axios
      .get(`${host}/comment/album`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(data.code === 200)
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
