//最新mv
// 新碟上架 http://music.163.com/#/discover/album/

// type ALL, ZH,EA,KR,JP
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 50,
    area: req.query.type,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/album/new",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
