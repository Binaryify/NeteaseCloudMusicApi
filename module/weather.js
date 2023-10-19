module.exports = (query, request) => {
  return request(
    'get',
    `https://api.oioweb.cn/api/weather/GetWeather`,
    query.data || {},
    {
      // crypto: 'weapi',
      // cookie: query.cookie,
      // proxy: query.proxy,
      // realIP: query.realIP,
    },
  )
}
