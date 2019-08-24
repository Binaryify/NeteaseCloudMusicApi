// 初始化名字

module.exports = (query, request) => {
  const data = {
    nickname: query.nickname
  };
  return request(
    'POST',
    `http://music.163.com/eapi/activate/initProfile`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/activate/initProfile'
    }
  );
};
