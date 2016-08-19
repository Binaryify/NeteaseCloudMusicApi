import request from 'request'
import { origin, globalOption } from '../config'
import { deepCopy } from '../util'

const getArtistAlbums = (id, callback, limit = 3, offset = 0) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/artist/albums/${id}?offset=${offset}&limit=${limit}`
  const method = 'GET'
  Object.assign(option, {url, method})
  request(option, (err, res, body) => {
    if(!err && res.statusCode == 200) {
      let info = JSON.parse(body)
      callback && callback(JSON.stringify(info, '', 2))
    } else {
      console.error(err)
    }
  })
}
export { getArtistAlbums }
