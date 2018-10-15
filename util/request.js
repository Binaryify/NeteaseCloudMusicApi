const encrypt = require('./crypto.js')
const request = require('request')
const queryString = require('querystring')

// request.debug = false

function chooseUserAgent(ua) {
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
    if(typeof(ua) == 'undefined')
        index = Math.floor(Math.random() * userAgentList.length)
    else if(ua == 'mobile')
        index = Math.floor(Math.random() * 7)
    else if(ua == 'pc')
        index = Math.floor(Math.random() * 5) + 8
    else
        return ua
    return userAgentList[index]
}

function createRequest(method, url, data, options){
    return new Promise((resolve, reject) => {

        let headers = {'User-Agent': chooseUserAgent(options.ua)}
        if(method.toUpperCase() == 'POST') headers['Content-Type'] = 'application/x-www-form-urlencoded'
        if(url.indexOf('music.163.com') != -1) headers['Referer'] = 'http://music.163.com'
        // headers['X-Real-IP'] = '118.88.88.88'

        if(typeof(options.cookie) === 'object')
            headers['Cookie'] = Object.keys(options.cookie).map(key => (encodeURIComponent(key) + '=' + encodeURIComponent(options.cookie[key]))).join('; ')
        else if(options.cookie)
            headers['Cookie'] = options.cookie

        if(options.crypto == 'weapi'){
            const csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/)
            data.csrf_token = (csrfToken ? csrfToken[1] : '')
            data = encrypt(data)
        }

        const answer = {status: 500, body: {}, cookie: []}
        request(
            {method: method, url: url, headers: headers, body: queryString.stringify(data), proxy: options.proxy}, 
            (err, res, body) => {
                if(err){
                    answer.status = 502
                    answer.body = {code: 502, msg: err.stack}
                    reject(answer)
                }
                else{
                    answer.cookie = (res.headers['set-cookie'] || []).map(x => x.replace(/\s*Domain=[^(;|$)]+;*/, ''))
                    try{
                        answer.body = JSON.parse(body)
                        answer.status = answer.body.code || res.statusCode
                        if(answer.body.code=='301'){
                            answer.body.apiMsg='需要登陆'
                        }
                    }
                    catch(e){
                        answer.body = body
                        answer.status = res.statusCode
                    }
                    answer.status = (100 < answer.status && answer.status < 600) ? answer.status : 400
                    if(answer.status == 200)
                        resolve(answer)
                    else                  
                        reject(answer)
                }
            }
        )
    })
}

module.exports = createRequest
