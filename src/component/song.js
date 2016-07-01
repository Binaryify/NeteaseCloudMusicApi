import request from 'request'
import { origin, globalOption } from '../config'
import { deepCopy } from '../util'

const song = (id, callback = null) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/song/detail?ids=%5B${id}%5d`
  const method = 'GET'
  Object.assign(option, { url, method })
  request(option, (err, res, body) => {
    if (!err && res.statusCode == 200) {
      let info = JSON.parse(body);
      callback && callback(JSON.stringify(info, '', 2))
    } else {
      console.error(err)
    }
  })
}
export { song }
