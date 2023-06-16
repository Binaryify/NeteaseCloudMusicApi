// 动漫-搜索
module.exports = (query, request) => {
  const data = {
    name: query.name,
    pageNum: query.pageNum || 1,
    pageSize: query.pageNum || 10,
  }
  return request(
    'get',
    `http://api.pingcc.cn/video/search/title/${data.name}/${data.pageNum}/${data.pageSize}`,
    // {
    //     crypto: 'weapi',
    //     cookie: query.cookie,
    //     proxy: query.proxy,
    //     realIP: query.realIP,
    // },
  )
}
