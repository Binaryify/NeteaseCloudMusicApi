// 热搜
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    type: 1111
  };
  const id = req.query.id;
  createWebAPIRequest(
    "music.163.com",
    "/weapi/search/hot",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
