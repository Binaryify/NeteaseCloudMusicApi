// 处理请求
// 要求返回数据的格式为
/*
* 
@param:result:
{
    status: 200,
    body: {},
    cookie: []
    headers: {
        'set-cookie': [] | []

    }
}
@param:crypto: "eapi", "weapi", "linuxapi"
*/
// import encrypt from "./crypto.js";
// import afterRequestApi from "./afterRequestApi.js";
// import { cookieToJson } from "./index.js";

const encrypt = require('./crypto.js')
const afterRequestApi = require('./afterRequestApi.js')
const cookieToJson = require('./index.js').cookieToJson

let USEJSON = false

function hasApi(name) {
  return Object.keys(afterRequestApi).includes(name)
}

const afterRequest = (responseResult, crypto, apiName) => {
  // 兼容result为JSON格式
  if (typeof responseResult === 'string') {
    console.log('responseResult is string')
    responseResult = JSON.parse(responseResult)
    USEJSON = true
  } else {
    USEJSON = false // 由于程序一直在运行，上次的状态会被保留，所以每次都需要重置
  }

  const answer = { status: 500, body: {}, cookie: [] }
  const body = responseResult.data
  let cookie

  for (let key in responseResult.headers) {
    if (key.toLowerCase() === 'set-cookie') {
      cookie = responseResult.headers[key]
      break
    }
  }

  // 处理数组格式的 cookie
  if (Array.isArray(cookie)) {
    cookie = cookie.join(';')
  }
  answer.cookie = cookie || ''

  // 去除Cookie的Domain属性
  // answer.cookie = (cookie || []).map((x) =>
  //   x.replace(/\s*Domain=[^(;|$)]+;*/, ''),
  // )
  answer.cookie = answer.cookie.replace(/\s*Domain=[^(;|$)]+;*/, '')

  try {
    if (crypto === 'eapi') {
      answer.body = JSON.parse(encrypt.decrypt(body))
    } else {
      answer.body = body
    }

    if (answer.body.code) {
      answer.body.code = Number(answer.body.code)
    }

    answer.status = Number(answer.body.code || res.status)
    if (
      [201, 302, 400, 502, 800, 801, 802, 803].indexOf(answer.body.code) > -1
    ) {
      // 特殊状态码
      answer.status = 200
    }
  } catch (e) {
    // console.log(e)
    try {
      answer.body = JSON.parse(body.toString())
    } catch (err) {
      answer.body = body
    }
    answer.status = responseResult.status
  }

  answer.status =
    100 < answer.status && answer.status < 600 ? answer.status : 400

  // 处理特殊接口后续操作

  if (hasApi(apiName)) {
    let result = afterRequestApi[apiName](answer)
    // if (result.status) {
    //   answer.status = result.status
    // }
    if (result.body) {
      answer.body = result.body
    }
    if (result.cookie) {
      answer.cookie = result.cookie
    }
  }

  let result

  // 返回数据
  if (answer.status !== 200 || !answer.body) {
    result = {
      code: answer.status,
      data: answer.body,
      msg: answer.body.msg || '请求遇到问题',
      others: {
        status: answer.status,
        body: answer.body,
      },
    }
  }

  if (answer.body.code == '301') {
    result = {
      code: 301,
      data: null,
      msg: '需要登录',
    }
  }

  if (answer.cookie) {
    result = {
      code: answer.status,
      data: answer.body,
      msg: answer.body.msg,
      cookie: cookieToJson(answer.cookie),
    }
  } else {
    result = {
      code: answer.status,
      data: answer.body,
      msg: answer.body.msg,
    }
  }

  if (USEJSON) {
    result = JSON.stringify(result)
  }

  return result
}

module.exports = afterRequest
