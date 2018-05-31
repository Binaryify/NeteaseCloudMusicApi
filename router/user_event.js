//用户动态
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.uid;
  const data = {
    time: -1,
    getcounts: true,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/event/get/${id}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
