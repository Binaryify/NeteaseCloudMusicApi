//登录状态
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  createWebAPIRequest(
    "music.163.com",
    "/",
    "GET",
    {},
    cookie,
    (music_req, cookie) => {
      var userInfo = (/var GUser=([^;]+);/g).exec(music_req)[1];
      var bindInfo = (/var GBinds=([^;]+);/g).exec(music_req)[1];
      userInfo = eval(`(${userInfo})`);
      userInfo.userBind = eval(`(${bindInfo})`);
      userInfo.userBind.forEach((item) => {item.tokenJsonStr = JSON.parse(item.tokenJsonStr)});
      res.send(userInfo);
    },
    err => res.status(502).send("fetch error")
  );
};