//精选电台-分类电台
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    cateId: req.query.type,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/djradio/recommend",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
