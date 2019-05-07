// 云盘歌曲删除

module.exports = (query, request) => {
  const data = {
    songIds: [query.id]
  };
  return request("POST", `http://music.163.com/weapi/cloud/del`, data, {
    crypto: "weapi",
    cookie: query.cookie,
    proxy: query.proxy
  });
};
