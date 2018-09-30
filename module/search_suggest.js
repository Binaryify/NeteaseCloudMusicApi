// 搜索 suggest,搜索结果包含单曲,歌手,歌单,mv信息
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     csrf_token: "",
//     s: req.query.keywords || ""
//   };

//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/search/suggest/web",
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
        s: req.query.keywords || ''
    }
    return request(
        'POST', `http://music.163.com/weapi/search/suggest/web`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}