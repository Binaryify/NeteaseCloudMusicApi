// 检测手机号码是否已注册

module.exports = (query, request) => {
  const data = {
    cellphone: query.phone,
    countrycode: query.countrycode
  };
  return request(
    'POST',
    `http://music.163.com/eapi/cellphone/existence/check`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/cellphone/existence/check'
    }
  );
};
