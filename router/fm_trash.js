//垃圾桶
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const songId = req.query.id;
  const alg = "RT";
  const time = req.query.time || 25;
  const data = {
    csrf_token: "",
    songId
  };

  createWebAPIRequest(
    "music.163.com",
    `/weapi/radio/trash/add?alg=${alg}&songId=${songId}&time=${time}`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
