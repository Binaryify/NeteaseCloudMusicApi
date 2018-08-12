module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    userId: req.query.uid,
    offset: req.query.offset || "0",
    limit: req.query.limit || 30,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/user/getfolloweds/`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
