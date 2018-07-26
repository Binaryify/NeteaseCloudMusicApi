module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  // user_id must be [id]
  const user_ids = req.query.user_ids;
  const data = {
    type: "text",
    msg: req.query.msg,
    userIds: "[" + user_ids + "]",
    csrf_token: ""
  };
  console.log(data);
  createWebAPIRequest(
    "music.163.com",
    `/weapi/msg/private/send`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
