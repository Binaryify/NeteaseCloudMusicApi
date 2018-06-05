//分类歌单
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  // order可为 'hot' 可为 'new'
  const data = {
    cat: req.query.cat || "全部",
    order: req.query.order || "hot",
    offset: req.query.offset || 0,
    total: req.query.total ? "true" : "false",
    limit: req.query.limit || 50
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/playlist/list",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
