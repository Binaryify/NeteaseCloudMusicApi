import request from 'request'
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))
const origin = 'http://music.163.com'
let globalOption = {
    headers: {
        'Origin': origin,
        'Referer': origin,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
let api = {
    search: (name = null, callback = null, limit = 3, offset = 0) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/search/suggest/web'
        let form = {
            s: name,
            limit,
            type: 1,
            offset
        }
        let method = 'POST'
        Object.assign(option, { url, form, method })
        request(option, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                callback && callback(JSON.stringify(info, '', 2))
            }
        })
    },
    song: (id, callback = null) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/song/detail?ids=%5B' + id + '%5d'
        let method = 'GET'
        Object.assign(option, { url, method })
        request(option, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                callback && callback(JSON.stringify(info, '', 2))
            }
        })
    },
    lrc: (id, callback = null, lv = -1) => {
        let option = deepCopy(globalOption);
        let url = origin + '/api/song/lyric?lv=' + lv + '&id=' + id
        let method = 'GET'
        Object.assign(option, { url, method })
        request(option, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                callback && callback(JSON.stringify(info, '', 2))
            }
        })
    }
}
export {api}