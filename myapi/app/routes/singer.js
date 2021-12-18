const router = require('koa-router')()
const {
  getSingerList,
  getHotSingerList,
  getSingerDetail,
} = require('@controller/singer')

router.get('/top/artists', getHotSingerList)
router.get('/artist/list', getSingerList)
router.get('/artists', getSingerDetail)

module.exports = router
