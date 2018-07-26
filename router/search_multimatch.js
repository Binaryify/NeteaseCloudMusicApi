//搜索 multimatch
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    csrf_token: "",
    type: req.query.type || 1,
    s: req.query.keywords || ""
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/search/suggest/multimatch",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
