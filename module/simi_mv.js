//相似 mv
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     mvid: req.query.mvid
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/discovery/simiMV",
//     "POST",
//     data,
//     cookie,
//     music_req => res.send(music_req),
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data = {
        mvid: query.mvid
    }
    return request(
        'POST', `http://music.163.com/weapi/discovery/simiMV`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}