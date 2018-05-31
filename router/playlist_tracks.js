//收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
module.exports = (req, res, createWebAPIRequest, request) => {
  const op = req.query.op;
  const pid = req.query.pid;
  // const tracks = req.query.tracks.split(',')
  const tracks = req.query.tracks;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  // console.log('COOKIESS', cookie)
  const data = {
    op: op,
    pid: pid,
    // tracks: (tracks.length == 1) ? tracks[0] : Array.apply(null,{length:tracks.length}).map(()=>({})).join(','),
    // trackIds: (tracks.length == 1) ? JSON.stringify(tracks) : `[${tracks.join(',')}]`
    trackIds: `[${tracks}]`,
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/playlist/manipulate/tracks",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
