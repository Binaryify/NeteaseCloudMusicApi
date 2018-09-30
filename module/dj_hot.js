// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     cat: req.query.type,
//     cateId: req.query.type,
//     type: req.query.type,
//     categoryId: req.query.type,
//     category: req.query.type,
//     limit: req.query.limit,
//     offset: req.query.offset,
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/djradio/hot/v1",
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
    const data = {
        cat: query.type,
        cateId: query.type,
        type: query.type,
        categoryId: query.type,
        category: query.type,
        limit: query.limit,
        offset: query.offset
    }
    return request(
        'POST', `http://music.163.com/weapi/djradio/hot/v1`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}