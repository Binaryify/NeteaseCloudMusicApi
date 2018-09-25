const crypto = require("crypto");

//手机登录
module.exports = (req, res, createWebAPIRequest, request) => {
  const phone = req.query.phone;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const md5sum = crypto.createHash("md5");
  md5sum.update(req.query.password);
  const data = {
    phone: phone,
    password: md5sum.digest("hex"),
    rememberLogin: "true"
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/login/cellphone",
    "POST",
    data,
    cookie,
    (music_req, cookie) => {
      res.append("Set-Cookie", cookie);
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
};
