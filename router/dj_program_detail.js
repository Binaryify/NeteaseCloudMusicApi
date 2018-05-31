module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: req.query.id,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/dj/program/detail",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
