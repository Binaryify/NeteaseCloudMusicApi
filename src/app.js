import request from 'request'
import { origin, globalOption } from './config'
import { deepCopy } from './util'

let api = {
  search: (name = null, callback = null, limit = 3, offset = 0) => {
  let option = deepCopy(globalOption)
  let url = origin + '/api/search/suggest/web'
  let form = {
    s: name,
    limit,
    type: 1,
    offset
  }
  let method = 'POST'
  let proxy = false
  Object.assign(option, { url, form, method, proxy })
  request(option, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let info = JSON.parse(body);
      callback && callback(JSON.stringify(info, '', 2))
    } else {
      console.log(error)
    }
  })
  },
  song: (id, callback = null) => {
    let option = deepCopy(globalOption)
    let url = origin + '/api/song/detail?ids=%5B' + id + '%5d'
    let method = 'GET'
    let proxy = false
    Object.assign(option, { url, method, proxy })
    request(option, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        callback && callback(JSON.stringify(info, '', 2))
      } else {
        console.log(error)
      }
    })
  },
  lrc: (id, callback = null, lv = -1) => {
    let option = deepCopy(globalOption)
    let url = origin + '/api/song/lyric?lv=' + lv + '&id=' + id
    let method = 'GET'
    let proxy = false
    Object.assign(option, { url, method, proxy })
    request(option, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        callback && callback(JSON.stringify(info, '', 2))
      } else {
        console.log(error)
      }
    })
  }
}
export {api}
