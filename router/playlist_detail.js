const http = require("http");
const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: req.query.id,
    n: 100000,
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    `/api/playlist/detail?id=${req.query.id}`,
    "POST",
    data,
    cookie,
    music_req => {
      // console.log(JSON.parse(music_req).playlist.tracks.length)
      // console.log(JSON.parse(music_req).playlist.trackIds.length)
      res.send(music_req);
    },
    err => {
      res.status(502).send("fetch error");
    }
  );
});

module.exports = router;
