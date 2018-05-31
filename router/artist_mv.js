module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.id;
  const data = {
    artistId: id,
    total: true,
    offset: req.query.offset,
    limit: req.query.limit,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/artist/mvs`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
