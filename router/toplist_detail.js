// 排行榜详情
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: req.query.id,
    limit: 20,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/toplist/detail",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
