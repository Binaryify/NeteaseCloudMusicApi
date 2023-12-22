// import api from "./api.js";
// import { cookieToJson } from "./index.js";
// import request_param from "./request_param.js";

const api = require('./api.js')
const cookieToJson = require('./index.js').cookieToJson
const request_param = require('./request_param.js')

function hasApi(name) {
  return Object.keys(api).includes(name)
}

function beforeRequest(name, query) {
  // 处理字符串格式的 cookie
  if (typeof query.cookie === 'string') {
    query.cookie = cookieToJson(query.cookie)
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

  // console.log("query:", query);

  if (hasApi(name)) {
    return api[name](query, (...params) => {
      // 参数注入客户端IP
      const obj = [...params]

      // console.log("query:",query,"obj:",obj,"params",params);
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

      // let a = request_param(...obj);
      // console.log("a:", a);
      // return a;

      return request_param(...obj)
    })
  } else {
    return { error: `api (${name}) not found` }
  }
}

module.exports = beforeRequest

// 下一步你应该按照返回数据发送请求
