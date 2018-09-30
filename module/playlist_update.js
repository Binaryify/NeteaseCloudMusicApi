// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const playlist_id = req.query.id;
//   const desc_detail = req.query.desc || "";
//   const tags_detail = req.query.tags || "";
//   const name_detail = req.query.name;
//   const data = {
//     "/api/playlist/desc/update":
//       '{"id":' + playlist_id + ',"desc":"' + desc_detail + '"}',
//     "/api/playlist/tags/update":
//       '{"id":' + playlist_id + ',"tags":"' + tags_detail + '"}',
//     "/api/playlist/update/name":
//       '{"id":' + playlist_id + ',"name":"' + name_detail + '"}',
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/batch",
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
    query.desc = query.desc || ''
    query.tags = query.tags || ''
    const data = {
        "/api/playlist/desc/update": `{"id":${query.id},"desc":"${query.desc}"}`,
        "/api/playlist/tags/update": `{"id":${query.id},"desc":"${query.tags}"}`,
        "/api/playlist/update/name": `{"id":${query.id},"desc":"${query.name}"}`
    }
    return request(
        'POST', `http://music.163.com/weapi/batch`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}