const fs = require('fs')
const { register_anonimous } = require('./main')
const { cookieToJson } = require('./util/index')
const path = require('path')
async function generateConfig() {
  try {
    const res = await register_anonimous()
    const cookie = res.body.cookie
    if (cookie) {
      const cookieObj = cookieToJson(cookie)
      fs.writeFileSync(
        path.resolve(__dirname, 'anonymous_token'),
        cookieObj.MUSIC_A,
        'utf-8',
      )
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = generateConfig
