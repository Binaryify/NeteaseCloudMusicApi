//dj主播 radio
module.exports = (req, res, createWebAPIRequest, request) => {
  const rid = req.query.rid;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    asc: req.query.asc,
    radioId: rid,
    limit: req.query.limit || 30,
    offset: req.query.offset || 0,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/dj/program/byradio",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
