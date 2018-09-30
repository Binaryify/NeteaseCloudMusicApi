// 取消收藏歌手
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     artistId: `${req.query.id}`,
//     artistIds: `[${req.query.id}]`
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/artist/unsub",
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
        artistId: `${query.id}`,
        artistIds: `[${query.id}]`
    }
    return request(
        'POST', `http://music.163.com/weapi/artist/unsub`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}
