//分类歌单
// 歌手分类
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";

  // categoryCode 取值

  // 入驻歌手 5001
  // 华语男歌手 1001
  // 华语女歌手 1002
  // 华语组合/乐队 1003
  // 欧美男歌手 2001
  // 欧美女歌手 2002
  // 欧美组合/乐队 2003
  // 日本男歌手 6001
  // 日本女歌手 6002
  // 日本组合/乐队 6003
  // 韩国男歌手 7001
  // 韩国女歌手 7002
  // 韩国组合/乐队 7003
  // 其他男歌手 4001
  // 其他女歌手 4002
  // 其他组合/乐队 4003

  const data = {
    categoryCode: req.query.cat || "1001",
    offset: req.query.offset || 0,
    total: req.query.total ? "true" : "false",
    limit: req.query.limit || 30
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/artist/list",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
