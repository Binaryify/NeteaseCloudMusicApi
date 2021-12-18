const router = require('koa-router')()
const { getHotList } = require('@controller/hot')

router.get('/search/hot', getHotList)

module.exports = router
