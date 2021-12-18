const router = require('koa-router')()
const { getSuggestList, getLyric, getSongDetail } = require('@controller/song')

router.get('/lyric', getLyric)
router.get('/song/detail', getSongDetail)
router.get('/search', getSuggestList)

module.exports = router
