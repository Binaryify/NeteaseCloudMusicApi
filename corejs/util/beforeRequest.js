// import api from "./api.js";
// import { cookieToJson } from "./index.js";
// import request_param from "./request_param.js";

const api = require('./api.js')
const cookieToJson = require('./index.js').cookieToJson
const request_param = require('./request_param.js')

let USEJSON = false // 是否使用json格式的返回值

function hasApi(name) {
  return Object.keys(api).includes(name)
}

function beforeRequest(name, query) {
  // 兼容query为JSON格式
  if (typeof query === 'string') {
    query = JSON.parse(query)
    USEJSON = true // 使用json格式的返回值
  } else {
    USEJSON = false
  }

  // 处理字符串格式的 cookie
  if (typeof query.cookie === 'string') {
    query.cookie = cookieToJson(query.cookie)
  }

  // 处理游客登录
  if (!query.cookie.MUSIC_U) {
    // 游客
    if (!query.cookie.MUSIC_A) {
      query.cookie.MUSIC_A = query.anonymous_token | ''
      query.cookie.os = query.cookie.os || 'ios'
      query.cookie.appver = query.cookie.appver || '8.10.90'
    }
  }

  // 处理接口名称
  if (name.startsWith('/')) {
    name = name.slice(1)
  }
  name = name.replace(/\//g, '_')

  // 处理ip
  if (query.realIP) {
    query.ip = query.realIP
  }

  let result

  if (hasApi(name)) {
    result = api[name](query, (...params) => {
      // 参数注入客户端IP
      const obj = [...params]

      let ip = query.ip

      //处理IPv6地址的问题
      if (ip.substr(0, 7) == '::ffff:') {
        ip = ip.substr(7)
      }
      // console.log(ip)
      obj[3] = {
        ...obj[3],
        ip,
        apiName: name,
      }

      return request_param(...obj)
    })
  } else {
    return { error: `api (${name}) not found` }
  }

  // 处理返回值
  if (USEJSON) {
    result = JSON.stringify(result)
  }

  return result
}

module.exports = beforeRequest

// 下一步你应该按照返回数据发送请求
