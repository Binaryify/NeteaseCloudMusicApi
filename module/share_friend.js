// 分享歌曲到动态

module.exports = (query, request) => {
  const data = {
    type: "song",
    msg: query.msg,
    id: query.id || ""
  };
  return request(
    "POST",
    `http://music.163.com/weapi/share/friends/resource`,
    data,
    { crypto: "weapi", cookie: query.cookie, proxy: query.proxy }
  );
};
