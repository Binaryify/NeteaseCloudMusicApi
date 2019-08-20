// 创建歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    pid: query.id
  };
  return request('POST', `https://music.163.com/weapi/playlist/delete`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy
  });
};
