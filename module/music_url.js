// 获取音乐 url
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const id = req.query.id;
//   const br = req.query.br || 999000;
//   const data = {
//     ids: [id],
//     br: br,
//     csrf_token: ""
//   };
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";

//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/song/enhance/player/url",
//     "POST",
//     data,
//     cookie,
//     music_req => {
//       res.setHeader("Content-Type", "application/json");
//       res.send(music_req);
//     },
//     err => {
//       res.status(502).send("fetch error");
//     }
//   );
// };

module.exports = (query, request) => {
    const data = {
        ids: '[' + parseInt(query.id) + ']',
        br: parseInt(query.br || 999000)
    }
    return request(
        'POST', `http://music.163.com/weapi/song/enhance/player/url`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}