const router = require('koa-router')()
const { getRankList } = require('@controller/rank')

router.get('/toplist/detail', getRankList)

module.exports = router
