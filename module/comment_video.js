// module.exports = (req, res, createWebAPIRequest, request) => {
//   const rid = req.query.id
//   const cookie = req.get('Cookie') ? req.get('Cookie') : ''
//   const data = {
//     offset: req.query.offset || 0,
//     rid: rid,
//     limit: req.query.limit || 20,
//     csrf_token: ''
//   }
//   createWebAPIRequest(
//     'music.163.com',
//     `/weapi/v1/resource/comments/R_VI_62_${rid}/?csrf_token=`,
//     'POST',
//     data,
//     cookie,
//     music_req => {
//       res.send(music_req)
//     },
//     err => res.status(502).send('fetch error')
//   )
// }

module.exports = (query, request) => {
    const data = {
        offset: query.offset || 0,
        rid: query.id,
        limit: query.limit || 20
    }
    return request(
        'POST', `http://music.163.com/weapi/v1/resource/comments/R_VI_62_${query.id}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}