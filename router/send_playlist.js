const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const user_ids = req.query.user_ids;
  const data = {
    id: req.query.playlist,
    type: "playlist",
    msg: req.query.msg,
    userIds: "[" + user_ids + "]",
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/msg/private/send`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
