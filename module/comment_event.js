module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
    beforeTime: query.before|| 0
  };
  return request(
    'POST',
    `https://music.163.com/weapi/v1/resource/comments/${query.threadId}`,
    data,
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
  );
};
