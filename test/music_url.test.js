const assert = require('assert')
const request = require('request')
const host = global.host || 'http://localhost:3000'

describe('测试获取歌曲是否正常', () => {
  it('歌曲的 url 不应该为空', done => {
    const qs = {
      id: 462791935,
      br: 999000
    }

    request.get({url: `${host}/song/url`, qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        assert(!!body.data[0].url)
        done()
      }
      else{
        done(err)
      }
    })
  });
});
