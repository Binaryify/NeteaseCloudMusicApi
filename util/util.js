const Encrypt = require('./crypto.js')
const request = require('request')
const queryString = require('querystring')

request.debug = true

function randomUserAgent() {
  const userAgentList = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)',
    'Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586',
    'Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1'
  ]
  const num = Math.floor(Math.random() * userAgentList.length)
  return userAgentList[num]
}

function createWebAPIRequest(
  host,
  path,
  method,
  data,
  cookie,
  callback,
  errorCallback
) {
  const proxy = cookie.split('__proxy__')[1]
  cookie = cookie.split('__proxy__')[0]

  const csrfToken = cookie.match(/_csrf=([^(;|$)]+)/)
  if (csrfToken) data.csrf_token = csrfToken[1]
  else data.csrf_token = ''

  const encryptedData = Encrypt(data)
  const options = {
    url: `http://${host}${path}`,
    method: method,
    headers: {
      Accept: '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: 'http://music.163.com',
      Host: 'music.163.com',
      Cookie: cookie,
      'User-Agent': randomUserAgent()
    },
    body: queryString.stringify({
      params: encryptedData.params,
      encSecKey: encryptedData.encSecKey
    }),
    proxy: proxy
  }
  console.log(
    `[request] ${options.method} ${options.url} proxy:${options.proxy}`
  )

  request(options, function(error, res, body) {
    if (error) {
      console.error(error)
      errorCallback(error)
    } else {
      let cookie = res.headers['set-cookie'] || []
      cookie = cookie.map(x => x.replace(/\s*Domain=[^(;|$)]+;*/, ''))
      try {
        const response = JSON.parse(body)
        if (response.code == '301') {
          callback(
            JSON.stringify({
              ...response,
              msg: '需要登陆'
            }),
            cookie
          )
        } else {
          callback(body, cookie)
        }
      } catch (err) {
        callback(body, cookie)
      }
    }
  })
}

module.exports = {
  request,
  createWebAPIRequest
}
