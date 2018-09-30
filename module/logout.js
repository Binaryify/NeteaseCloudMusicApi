//登出
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get('Cookie') ? req.get('Cookie') : ''
//   createWebAPIRequest(
//     'music.163.com',
//     '/weapi/logout',
//     'POST',
//     {},
//     cookie,
//     (music_req, cookie) => {
//       res.append("Set-Cookie", cookie)
//       res.send(music_req)
//     },
//     err => res.status(502).send('fetch error')
//   )
// }

module.exports = (query, request) => {
    return request(
        'POST', `http://music.163.com/weapi/logout`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}