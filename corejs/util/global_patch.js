// Description: 全局补丁, 模拟window对象, 以及一些全局方法
// Author: LuTong
// Date: 2021/10/13

if (typeof window === 'undefined') {
  var window = {
    crypto: {
      getRandomValues: function (array) {
        for (var i = 0; i < array.length; i++) {
          array[i] = Math.floor(Math.random() * Math.pow(2, 32))
        }
        return array
      },
    },
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
}

module.exports = { encodeURIComponent, URLSearchParams }
