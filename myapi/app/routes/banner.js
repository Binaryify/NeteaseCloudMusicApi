const router = require('koa-router')()
const { getBanner } = require('@controller/banner')

router.get('/banner', getBanner)

module.exports = router
