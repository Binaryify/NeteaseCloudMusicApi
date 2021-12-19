const { Banner } = require('../../myapi/app/models/index');

module.exports = async (request) => {
  const query = {}
  const type =
    {
      0: 'pc',
      1: 'android',
      2: 'iphone',
      3: 'ipad',
    }[query.type || 0] || 'pc'
  const res = await request(
    'POST',
    `https://music.163.com/api/v2/banner/get`,
    {clientType: type},
    {crypto: 'api', proxy: query.proxy, realIP: query.realIP},
  )
  // const {imageUrl} = res
  // const bannerData = Banner.cre
  console.log('banner重新', res.body.banners);
  const arr = res.body.banners;
  arr.forEach(el => {
    Banner.create({
      imageUrl: el.imageUrl
    })
  })
}
