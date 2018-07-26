//djradio detail
module.exports = (req, res, createWebAPIRequest, request) => {
  const rid = req.query.rid;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: rid,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/djradio/get",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
