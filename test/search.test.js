const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

describe('测试搜索是否正常', () => {
  it('获取到的数据的 name 应该和搜索关键词一致', done => {
    const qs = {
      keywords: '海阔天空',
      type: 1
    }
    request.get({url: `${host}/search`,qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(body.result.songs[0].name === '海阔天空')
        done()
      }
      else{
        done(err)
      }
    })
  })
})
