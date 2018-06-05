//推荐新音乐
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    type: "recommend"
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/personalized/newsong",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
