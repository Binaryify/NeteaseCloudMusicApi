// 创建歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    name: query.name,
    privacy: query.privacy    //0 为普通歌单，10 为隐私歌单
  };
  return request('POST', `https://music.163.com/weapi/playlist/create`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy
  });
};
