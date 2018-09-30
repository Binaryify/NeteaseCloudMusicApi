// 获取歌词
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {};
//   const id = req.query.id;
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/song/lyric?os=osx&id=" + id + "&lv=-1&kv=-1&tv=-1",
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
        'POST', `http://music.163.com/weapi/song/lyric?os=osx&id=${query.id}&lv=-1&kv=-1&tv=-1`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}