// Todo
const QRCode = ''

module.exports = (query, request) => {
  return new Promise(async (resolve) => {
    const url = `https://music.163.com/login?codekey=${query.key}`
    return resolve({
      code: 200,
      status: 200,
      body: {
        code: 200,
        data: {
          qrurl: url,
          // Todo toDataURL 不是标准函数
          qrimg: query.qrimg ? await QRCode.toDataURL(url) : '',
        },
      },
    })
  })
}
