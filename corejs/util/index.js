module.exports = {
  toBoolean(val) {
    if (typeof val === 'boolean') return val
    if (val === '') return val
    return val === 'true' || val == '1'
  },
  cookieToJson(cookie) {
    // python的requests模块返回的多个cookie会用','分隔但是set-cookie的值里面也有','
    // 先用';'分隔开，再用','分隔开
    // 如果分割结果里面有'='，那么就是一个完整的cookie。如果不包含等号
    // 那么这个部分应该与前一个部分合并，因为它是前一个cookie的一部分。
    if (!cookie) return {}

    let cookies = []
    cookies = cookie.split(';')

    let cookieArr = []
    cookies.forEach((i) => {
      let parts = i.split(',')

      parts.forEach((part, i) => {
        if (part.includes('=')) {
          cookieArr.push(part)
        } else {
          cookieArr[cookieArr.length - 1] += ',' + part
        }
      })
    })

    let obj = {}
    cookieArr.forEach((i) => {
      let arr = i.split('=')
      if (arr.length === 2) {
        obj[arr[0].trim()] = arr[1]
      } else {
        obj[arr[0].trim()] = ''
      }
    })
    return obj
  },
  getRandom(num) {
    var random = Math.floor(
      (Math.random() + Math.floor(Math.random() * 9 + 1)) *
        Math.pow(10, num - 1),
    )
    return random
  },
}
