module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    threadId: req.query.id,
    csrf_token: ""
  };
  const action = req.query.t == 1 ? "like" : "unlike";
  createWebAPIRequest(
    "music.163.com",
    `/weapi/resource/${action}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
