const assert = require('assert')
const crypto = require('crypto')
const { createRequest } = require('../util/util')

describe('测试搜索是否正常', () => {
  it('获取到的数据的 name 应该和搜索关键词一致', done => {
    const keywords = '海阔天空'
    const type = 1
    const limit = 30
    const data =
      's=' + keywords + '&limit=' + limit + '&type=' + type + '&offset=0'
    createRequest('/api/search/pc/', 'POST', data)
      .then(result => {
        console.log(JSON.parse(result).result.songs[0].mp3Url)
        assert(JSON.parse(result).result.songs[0].name === '海阔天空')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
