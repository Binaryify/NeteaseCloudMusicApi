// 获取用户歌单
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: req.query.offset || 0,
    uid: req.query.uid,
    limit: req.query.limit || 30, //貌似无效
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/user/playlist",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
      // console.log(JSON.parse(music_req))
    },
    err => res.status(502).send("fetch error")
  );
};
