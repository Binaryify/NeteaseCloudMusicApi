// 歌曲可用性

module.exports = (response) => {
  let playable = false
  if (response.body.code == 200) {
    if (response.body.data[0].code == 200) {
      playable = true
    }
  }
  if (playable) {
    response.body = { code: 200, success: true, message: 'ok' }
    return response
  } else {
    // response.status = 404
    response.body = { code: 200, success: false, message: '亲爱的,暂无版权' }
    return response
    // return Promise.reject(response)
  }
}
