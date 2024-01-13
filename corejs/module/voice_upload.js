// const { default: axios } = require('axios')
// var xml2js = require('xml2js')

// var parser = new xml2js.Parser(/* options */)
function createDupkey() {
  // 格式:3b443c7c-a87f-468d-ba38-46d407aaf23a
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}
module.exports = (query, request) => {
  return request(
    'post',
    `https://interface.music.163.com/weapi/voice/workbench/voice/batch/upload/v2`,
    {
      dupkey: createDupkey(),
      voiceData: JSON.stringify([
        {
          name: query.filename,
          autoPublish: query.autoPublish == 1 ? true : false,
          autoPublishText: query.autoPublishText || '',
          description: query.description,
          voiceListId: query.voiceListId,
          coverImgId: query.coverImgId,
          dfsId: query.docId,
          categoryId: query.categoryId,
          secondCategoryId: query.secondCategoryId,
          composedSongs: query.composedSongs
            ? query.composedSongs.split(',')
            : [],
          privacy: query.privacy == 1 ? true : false,
          publishTime: query.publishTime || 0,
          orderNo: query.orderNo || 1,
        },
      ]),
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      headers: {
        'x-nos-token': query.token,
      },
    },
  )
}
