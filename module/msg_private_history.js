// 私信内容

module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: "true"
  };
  return request(
    "POST",
    `https://music.163.com/api/msg/private/history`,
    data,
    {
      crypto: "weapi",
      cookie: query.cookie,
      proxy: query.proxy
    }
  );
};
