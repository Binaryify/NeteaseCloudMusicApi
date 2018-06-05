module.exports = (req, res, createWebAPIRequest, request) => {
  const options = {
    url: "http://music.163.com/discover",
    method: "GET",
    headers: {
      Referer: "http://music.163.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3380.0 Safari/537.36"
    }
  };
  request(options, (error, response, body) => {
    if (error) {
      res.status(502).send("fetch error");
    } else {
      try {
        const pattern = /<script[^>]*>\s*window\.Gbanners\s*=\s*([^;]+?);\s*<\/script>/g;
        const banners = pattern.exec(body)[1];
        res.send(JSON.stringify(eval(`({code:200,banners:${banners}})`)));
      } catch (error) {
        res.status(502).send("fetch error");
      }
    }
  });
};
