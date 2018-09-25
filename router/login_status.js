//登录状态
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  createWebAPIRequest(
    "music.163.com",
    "/",
    "GET",
    {},
    cookie,
    music_req => {
      try {
        var profile = /GUser\s*=\s*([^;]+);/.exec(music_req)[1];
        var bindings = /GBinds\s*=\s*([^;]+);/.exec(music_req)[1];
        profile = eval(`(${profile})`);
        bindings = eval(`(${bindings})`);
        res.send({code: 200, profile: profile, bindings: bindings});
      } catch (error) {
        res.status(502).send("fetch error");
      }
    },
    err => res.status(502).send("fetch error")
  );
};