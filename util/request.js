const encrypt = require('./crypto')
const request = require('request')
const queryString = require('querystring')
const PacProxyAgent = require('pac-proxy-agent')
const zlib = require('zlib')

// request.debug = true // 开启可看到更详细信息

const chooseUserAgent = ua => {
  const userAgentList = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586'
  ]
  let index = 0
  if (typeof ua == 'undefined')
    index = Math.floor(Math.random() * userAgentList.length)
  else if (ua === 'mobile') index = Math.floor(Math.random() * 7)
  else if (ua === 'pc') index = Math.floor(Math.random() * 5) + 8
  else return ua
  return userAgentList[index]
}

const createRequest = (method, url, data, options) => {
  return new Promise((resolve, reject) => {
    let headers = { 'User-Agent': chooseUserAgent(options.ua) }
    if (method.toUpperCase() === 'POST')
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (url.includes('music.163.com'))
      headers['Referer'] = 'https://music.163.com'
    // headers['X-Real-IP'] = '118.88.88.88'

    if (typeof options.cookie === 'object')
      headers['Cookie'] = Object.keys(options.cookie)
        .map(
          key =>
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(options.cookie[key])
        )
        .join('; ')
    else if (options.cookie) headers['Cookie'] = options.cookie

    if (options.crypto === 'weapi') {
      let csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/)
      data.csrf_token = csrfToken ? csrfToken[1] : ''
      data = encrypt.weapi(data)
      url = url.replace(/\w*api/, 'weapi')
    } else if (options.crypto === 'linuxapi') {
      data = encrypt.linuxapi({
        method: method,
        url: url.replace(/\w*api/, 'api'),
        params: data
      })
      headers['User-Agent'] =
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
      url = 'https://music.163.com/api/linux/forward'
    } else if (options.crypto === 'eapi') {
      const cookie = options.cookie || {};
      const csrfToken = cookie['__csrf'] || ''
      const header = {
        'osver': cookie.osver, //系统版本
        'deviceId': cookie.deviceId, //encrypt.base64.encode(imei + '\t02:00:00:00:00:00\t5106025eb79a5247\t70ffbaac7')
        'appver': cookie.appver || '6.1.1', // app版本
        'versioncode': cookie.versioncode || '140', //版本号
        'mobilename': cookie.mobilename, //设备model
        'buildver': cookie.buildver || Date.now().toString().substr(0, 10),
        'resolution': cookie.resolution || '1920x1080', //设备分辨率
        '__csrf': csrfToken,
        'os': cookie.os || 'android',
        'channel': cookie.channel,
        'requestId': `${Date.now()}_${Math.floor(Math.random() * 1000).toString().padStart(4, '0')}`
      }
      if (cookie.MUSIC_U) header['MUSIC_U'] = cookie.MUSIC_U
      if (cookie.MUSIC_A) header['MUSIC_A'] = cookie.MUSIC_A
      headers['Cookie'] = Object.keys(header)
        .map(
          key =>
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(header[key])
        )
        .join('; ')
      data.header = header
      data = encrypt.eapi(options.url, data)
      url = url.replace(/\w*api/, 'eapi')
    }

    const answer = { status: 500, body: {}, cookie: [] }
    const settings = {
      method: method,
      url: url,
      headers: headers,
      body: queryString.stringify(data)
    }

    if (options.crypto === 'eapi') settings.encoding = null

    if (/\.pac$/i.test(options.proxy)) {
      settings.agent = new PacProxyAgent(options.proxy)
    } else {
      settings.proxy = options.proxy
    }

    request(
      settings,
      (err, res, body) => {
        if (err) {
          answer.status = 502
          answer.body = { code: 502, msg: err.stack }
          reject(answer)
        } else {
          answer.cookie = (res.headers['set-cookie'] || []).map(x =>
            x.replace(/\s*Domain=[^(;|$)]+;*/, '')
          )
          try {
            if (options.crypto === 'eapi') {

              zlib.unzip(body, function (err, buffer) {
                const _buffer = err ? body : buffer
                try {
                  try{
                    answer.body = JSON.parse(encrypt.decrypt(_buffer).toString())
                    answer.status = answer.body.code || res.statusCode
                  } catch(e){
                    answer.body = JSON.parse(_buffer.toString())
                    answer.status = res.statusCode
                  }
                } catch (e) {
                  answer.body = _buffer.toString()
                  answer.status = res.statusCode
                }
                answer.status =
                  100 < answer.status && answer.status < 600 ? answer.status : 400
                if (answer.status === 200) resolve(answer)
                else reject(answer)
              });
              return false

            } else {

              answer.body = JSON.parse(body)
              answer.status = answer.body.code || res.statusCode

            }

          } catch (e) {
            answer.body = body
            answer.status = res.statusCode
          }

          answer.status =
            100 < answer.status && answer.status < 600 ? answer.status : 400
          if (answer.status == 200) resolve(answer)
          else reject(answer)
        }
      }
    )
  })
}

module.exports = createRequest
