// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     id: req.query.rid,
//     csrf_token: ""
//   };
//   const action = req.query.t == 1 ? "sub" : "unsub";
//   createWebAPIRequest(
//     "music.163.com",
//     `/weapi/djradio/${action}`,
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
    query.t = (query.t == 1 ? "sub" : "unsub")
    const data =  {
        id: query.rid
    }
    return request(
        'POST', `http://music.163.com/weapi/djradio/${query.t}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}