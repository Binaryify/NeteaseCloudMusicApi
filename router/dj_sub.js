module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: req.query.rid,
    csrf_token: ""
  };
  const action = req.query.t == 1 ? "sub" : "unsub";
  createWebAPIRequest(
    "music.163.com",
    `/weapi/djradio/${action}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
