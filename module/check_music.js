// module.exports = (req, res, createWebAPIRequest, request) => {
//   const id = parseInt(req.query.id)
//   const br = parseInt(req.query.br || 999000)
//   const data = {
//     ids: [id],
//     br: br,
//     csrf_token: ''
//   }
//   const cookie = req.get('Cookie') ? req.get('Cookie') : ''

//   createWebAPIRequest(
//     'music.163.com',
//     '/weapi/song/enhance/player/url',
//     'POST',
//     data,
//     cookie,
//     music_req => {
//       music_req = JSON.parse(music_req)
//       if (music_req.code == 200) {
//         if (music_req.data[0].code == 200){
//           return res.send({ success: true, message: 'ok' })
//         }
//       }
//       return res.send({ success: false, message: '亲爱的,暂无版权' })
//     },
//     err => {
//       res.status(502).send('fetch error')
//     }
//   )
// }

module.exports = (query, request) => {
    const data = {
        ids: '[' + parseInt(query.id) + ']',
        br: parseInt(query.br || 999000)
    }
    return request(
        'POST', `http://music.163.com/weapi/song/enhance/player/url`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
    .then(response => {
        let body = JSON.parse(response.body)
        if (body.code == 200) {
            if (body.data[0].code == 200){
                response.body = JSON.stringify({success: true, message: 'ok'})
                return response
            }
        }
        response.code = 404
        response.body = JSON.stringify({success: false, message: '亲爱的,暂无版权'})
        return Promise.reject(response)
    })
}
