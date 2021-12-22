const router = require('koa-router')()
const { getHotList } = require('@controller/search')

router.get('/search/hot', getHotList)



module.exports = router