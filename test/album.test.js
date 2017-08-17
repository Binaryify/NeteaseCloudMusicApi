const assert = require('assert')
const crypto = require('crypto')
const { createRequest } = require('../util/util')

describe('测试获取歌手专辑列表是否正常', () => {
  it('数据的 code 应该为200', done => {
    const id = 32311
    createRequest(`/api/album/${id}`, 'GET', null)
      .then(result => {
        const code = JSON.parse(result).code
        console.log('code:' + code)
        assert(code === 200)
        done()
      })
      .catch(err => done(err))
  })
})
