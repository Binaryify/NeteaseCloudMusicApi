const router = require('koa-router')()
const { getRecommendList, getAlbumDetail } = require('@controller/album')

router.get('/personalized', getRecommendList)
router.get('/playlist/detail', getAlbumDetail)

module.exports = router
