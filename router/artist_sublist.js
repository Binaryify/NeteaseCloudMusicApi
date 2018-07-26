// 已关注歌手
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";

  const data = {
    offset: req.query.offset || 0,
    total: req.query.total ? "true" : "false",
    limit: req.query.limit || 25
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/artist/sublist",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
