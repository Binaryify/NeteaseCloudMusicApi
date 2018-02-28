const express = require("express");
const crypto = require("crypto");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
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
    (music_req, cookie = []) => {
      const cookieStr =
        "appver=1.5.9;os=osx; channel=netease;osver=%E7%89%88%E6%9C%AC%2010.13.2%EF%BC%88%E7%89%88%E5%8F%B7%2017C88%EF%BC%89";
      cookieStr.split(";").forEach(item => {
        cookie.push(item + ";Path=/");
      });
      res.set({
        "Set-Cookie": cookie
      });
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
