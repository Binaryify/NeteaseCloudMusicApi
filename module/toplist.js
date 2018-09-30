// 排行榜
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/toplist",
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
    return request(
        'POST', `http://music.163.com/weapi/toplist`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}