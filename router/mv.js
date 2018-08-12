//mv
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const mvid = req.query.mvid;
  const data = {
    id: mvid
  };

  createWebAPIRequest(
    "music.163.com",
    `/weapi/mv/detail`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
