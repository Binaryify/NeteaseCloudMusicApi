// 电台banner

module.exports = (query, request) => {
  const data = {};
  return request(
    "POST",
    `http://music.163.com/weapi/djradio/banner/get`,
    {},
    { crypto: "weapi", cookie: query.cookie, proxy: query.proxy }
  );
};
