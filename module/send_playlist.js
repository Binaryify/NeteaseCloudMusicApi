// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const user_ids = req.query.user_ids;
//   const data = {
//     id: req.query.playlist,
//     type: "playlist",
//     msg: req.query.msg,
//     userIds: "[" + user_ids + "]",
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     `/weapi/msg/private/send`,
//     "POST",
//     data,
//     cookie,
//     music_req => res.send(music_req),
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data = {
        id: query.playlist,
        type: 'playlist',
        msg: query.msg,
        userIds: '[' + user_ids + ']'
    }
    return request(
        'POST', `http://music.163.com/weapi/msg/private/send`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}