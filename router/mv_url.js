module.exports = (req, res, createWebAPIRequest, request) => {
  const url = req.query.url;
  const headers = {
    Referer: "http://music.163.com/",
    Cookie: "appver=1.5.0.75771;",
    "Content-Type": "video/mp4",
    Location: url
  };
  const options = {
    header: headers,
    url: url
  };
  request(options)
    .on("error", err => {
      res.send({ err });
    })
    .pipe(res);
};
