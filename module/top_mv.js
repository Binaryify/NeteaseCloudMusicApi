// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     offset: req.query.offset || 0,
//     total: true,
//     limit: req.query.limit || 30,
//     csrf_token: ""
//   };

//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/mv/toplist",
//     "POST",
//     data,
//     cookie,
//     music_req => {
//       res.setHeader("Content-Type", "application/json");
//       res.send(music_req);
//     },
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data = {
        offset: query.offset || 0,
        limit: query.limit || 30,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/mv/toplist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}