//related ,相关歌单
module.exports = (req, res, createWebAPIRequest, request) => {
  const options = {
    url: "http://music.163.com/playlist?id=" + req.query.id,
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
        const pattern = /<div class="cver u-cover u-cover-3">[\s\S]*?<img src="([^"]+)">[\s\S]*?<a class="sname f-fs1 s-fc0" href="([^"]+)"[^>]*>([^<]+?)<\/a>[\s\S]*?<a class="nm nm f-thide s-fc3" href="([^"]+)"[^>]*>([^<]+?)<\/a>/g;
        const data = {playlists:[],code:200};
        let result;
        while ((result = pattern.exec(body)) != null)  {
          data.playlists.push({
            creator: {
              userId: result[4].slice('/user/home?id='.length),
              nickname: result[5]
            },
            coverImgUrl: result[1].slice(0,-('?param=50y50'.length)),
            name: result[3],
            id: result[2].slice('/playlist?id='.length)
          });
        }
        res.send(JSON.stringify(data));
      } catch (error) {
        res.status(502).send("fetch error");
      }
    }
  });
};
