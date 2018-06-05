//comment like
//未知 api
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const cid = req.query.cid; //评论 id
  const id = req.query.id; //  歌曲 id
  const typeMap = {
    0: "R_SO_4_", //歌曲
    1: "R_MV_5_", //mv
    2: "A_PL_0_", //歌单
    3: "R_AL_3_", //专辑
    4: "A_DJ_1_" //电台
  };
  const type = typeMap[req.query.type];
  const data = {
    threadId: `${type}${id}`,
    commentId: cid,
    csrf_token: ""
  };
  const action = req.query.t == 1 ? "like" : "unlike";

  const url = `/weapi/v1/comment/${action}`;
  createWebAPIRequest(
    "music.163.com",
    url,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
