const router = require('koa-router')()
const { getSuggestList, getLyric, getSongDetail } = require('@controller/song')

router.get('/lyric', getLyric)
router.get('/song/detail', getSongDetail)

module.exports = router
