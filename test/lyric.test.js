const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

describe("测试获取歌词是否正常", () => {
  it("数据应该有 lrc 字段", done => {
    const qs = {
      id: 347230
    }

    request.get({url: `${host}/lyric`,qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(typeof body.lrc !== "undefined")
        done()
      }
      else{
        done(err)
      }
    })
  })
})
