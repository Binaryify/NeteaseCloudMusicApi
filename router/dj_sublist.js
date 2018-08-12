module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";

  const data = {
    offset: req.query.offset || 0,
    total: req.query.total ? "true" : "false",
    limit: req.query.limit || 30
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/djradio/get/subed",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
