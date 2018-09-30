// 获取每日推荐歌曲
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     offset: 0,
//     total: true,
//     limit: 20,
//     csrf_token: ""
//   };

//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/v1/discovery/recommend/songs",
//     "POST",
//     data,
//     cookie,
//     music_req => res.send(music_req),
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data = {
        offset: 0,
        limit: 20,
        total: true
    }
    return request(
        'POST', `http://music.163.com/weapi/v1/discovery/recommend/resource`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}