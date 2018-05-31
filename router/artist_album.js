// 获取歌手专辑列表
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.id;
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/artist/albums/${id}`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
