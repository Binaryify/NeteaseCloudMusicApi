const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

describe('测试获取评论是否正常', () => {
  it('数据的 code 应该为200', done => {
    const qs = {
      id: 32311
    }

    request.get({url: `${host}/comment/album`,qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(body.code === 200)
        done()
      }
      else{
        done(err)
      }
    })
  })
})
