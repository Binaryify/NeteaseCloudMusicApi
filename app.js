import request from 'request'
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const origin = 'http://music.163.com'

let globalOption = {
    headers: {
        'Origin': origin,
        'Referer': origin,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

let api = {
    search: (name = null, limit = 3, offset = 0) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/search/suggest/web'
        let body = 's=' + name + '&limit=' + limit + '&type=1&offset=' + offset 
        let method = 'POST'
        Object.assign(option, { url, body, method })
        request(option, callback);
    },
    song: (id) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/song/detail?ids=%5B' + id + '%5d'
        let method = 'GET'
        Object.assign(option, { url, method })
        request(option, callback);
    },
    lrc: (id, lv = -1) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/song/lyric?lv=' + lv + '&id=' + id
        let method = 'GET'
        Object.assign(option, { url, method })
        request(option, callback);
    }
}
function callback(error, response, body) {
    // console.log('callback')
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(JSON.stringify(info, '', 2))
    }
}
export {api}