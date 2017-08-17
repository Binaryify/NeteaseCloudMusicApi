const Encrypt = require('./crypto.js')
const http = require('http')
const querystring = require('querystring')

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
  errorcallback
) {
  let music_req = ''
  const cryptoreq = Encrypt(data)
  const http_client = http.request(
    {
      hostname: host,
      method: method,
      path: path,
      headers: {
        Accept: '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
        Connection: 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        Referer: 'http://music.163.com',
        Host: 'music.163.com',
        Cookie: cookie,
        'User-Agent': randomUserAgent()
      }
    },
    function(res) {
      res.on('error', function(err) {
        errorcallback(err)
      })
      res.setEncoding('utf8')
      if (res.statusCode != 200) {
        createWebAPIRequest(host, path, method, data, cookie, callback)
        return
      } else {
        res.on('data', function(chunk) {
          music_req += chunk
        })
        res.on('end', function() {
          if (music_req == '') {
            createWebAPIRequest(host, path, method, data, cookie, callback)
            return
          }
          if (res.headers['set-cookie']) {
            callback(music_req, res.headers['set-cookie'])
          } else {
            callback(music_req)
          }
        })
      }
    }
  )
  http_client.write(
    querystring.stringify({
      params: cryptoreq.params,
      encSecKey: cryptoreq.encSecKey
    })
  )
  http_client.end()
}

function createRequest(path, method, data, callback, errorcallback) {
  return new Promise((resolve, reject) => {
    let ne_req = ''
    const http_client = http.request(
      {
        hostname: 'music.163.com',
        method: method,
        path: path,
        headers: {
          Referer: 'http://music.163.com',
          Cookie: 'appver=1.5.2',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': randomUserAgent()
        }
      },
      res => {
        res.setEncoding('utf8')
        res.on('error', err => {
          reject(err)
        })
        res.on('data', chunk => {
          ne_req += chunk
        })
        res.on('end', () => {
          resolve(ne_req)
        })
      }
    )
    if (method == 'POST') {
      http_client.write(data)
    }
    http_client.end()
  })
}
module.exports = {
  createWebAPIRequest,
  createRequest
}
