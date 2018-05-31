// 获取歌手单曲
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.id;

  const data = {
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    `/weapi/v1/artist/${id}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
