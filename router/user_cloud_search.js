//云盘数据详情? 暂时不要使用
module.exports = (req, res, createWebAPIRequest, request) => {
  const data = {
    byids: req.query.id,
    id: req.query.id,
    csrf_token: ""
  };
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  createWebAPIRequest(
    "music.163.com",
    "/weapi/v1/cloud/get/byids",
    "POST",
    data,
    cookie,
    music_req => {
      res.setHeader("Content-Type", "application/json");
      res.send(music_req);
    },
    err => {
      res.status(502).send("fetch error");
    }
  );
};
