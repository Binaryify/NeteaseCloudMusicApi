module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const playlist_id = req.query.id;
  const desc_detail = req.query.desc || "";
  const tags_detail = req.query.tags || "";
  const name_detail = req.query.name;
  const data = {
    "/api/playlist/desc/update":
      '{"id":' + playlist_id + ',"desc":"' + desc_detail + '"}',
    "/api/playlist/tags/update":
      '{"id":' + playlist_id + ',"tags":"' + tags_detail + '"}',
    "/api/playlist/update/name":
      '{"id":' + playlist_id + ',"name":"' + name_detail + '"}',
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/batch",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
