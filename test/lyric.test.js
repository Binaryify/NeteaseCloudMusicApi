const assert = require('assert')
const crypto = require('crypto')
const { createRequest } = require("../util/util")
const phone = "换成你的账号"
const password = "换成你的密码"

describe('测试获取歌词是否正常', () => {
  it('数据应该有 lrc 字段', done => {
    const id = 347230
    createRequest('/api/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1', 'GET', null)
      .then(result => {
        console.log(JSON.parse(result).lrc)
        assert(typeof JSON.parse(result).lrc!=='undefined')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})