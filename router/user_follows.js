module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.uid;
  const data = {
    offset: req.query.offset || "0",
    limit: req.query.limit || 30,
    order: true
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/user/getfollows/${id}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
