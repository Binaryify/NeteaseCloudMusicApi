// 通知

module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: 'true',
  };
  return request('POST', `https://music.163.com/api/msg/notices`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy
  });
};
