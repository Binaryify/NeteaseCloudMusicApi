// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     uid: req.query.uid,
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     `/weapi/song/like/get`,
//     "POST",
//     data,
//     cookie,
//     music_req => {
//       res.send(music_req);
//     },
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data =  {
        uid: query.uid
    }
    return request(
        'POST', `http://music.163.com/weapi/song/like/get`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}