const router = require('koa-router')()
const { 
  getUserInfo,
  getUserAllAblum,
  addCollectAblum,
  deleteCollectAblum,
  addUserAblum,
  deleteUserAblum,
  getUserAblum,
  likeSong,
  unlikeSong,
} = require('@controller/user')

router.get('/', getUserInfo)

module.exports = router
