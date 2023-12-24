function toBoolean(val) {
  if (typeof val === 'boolean') return val
  if (val === '') return val
  return val === 'true' || val == '1'
}

function cookieToJson(cookie) {
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
}

function getRandom(num) {
  var random = Math.floor(
    (Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, num - 1),
  )
  return random
}

function URLSearchParams(queryString) {
  var params = {}

  if (typeof queryString === 'string') {
    queryString.split('&').forEach(function (param) {
      var index = param.indexOf('=')
      var key = param.slice(0, index)
      var value = param.slice(index + 1)
      params[key] = encodeURIComponent(value)
      console.log('params', params[key])
    })
  } else if (typeof queryString === 'object') {
    Object.entries(queryString).forEach(function ([key, value]) {
      params[key] = encodeURIComponent(value)
    })
  } else {
    console.log('来了个解析不了的~~~', queryString)
  }

  this.get = function (name) {
    return params[name]
  }

  this.toString = function () {
    return Object.entries(params)
      .map(function ([key, value]) {
        return key + '=' + value
      })
      .join('&')
  }
}

function encodeURIComponent(str) {
  str = String(str)
  var result = ''

  if (str !== undefined && str !== null) {
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i)
      if (/^[a-zA-Z0-9\-_.!~*'()]$/.test(char)) {
        // 这些字符不需要编码
        result += char
      } else {
        // 其他字符需要编码
        var charCode = str.charCodeAt(i).toString(16)
        result +=
          '%' + (charCode.length < 2 ? '0' : '') + charCode.toUpperCase()
      }
    }
  }
  return result
}

module.exports = {
  toBoolean,
  cookieToJson,
  getRandom,
  URLSearchParams,
  encodeURIComponent,
}
