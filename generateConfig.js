const fs = require('fs')
const { register_anonimous } = require('./main')
const { cookieToJson } = require('./util/index')
const config = require('./util/config.json')

async function generateConfig() {
  try {
    const res = await register_anonimous()
    const cookie = res.body.cookie
    if (cookie) {
      const cookieObj = cookieToJson(cookie)
      let newConfig = { ...config }
      newConfig.anonymous_token = cookieObj.MUSIC_A
      fs.writeFileSync(
        './util/config.json',
        JSON.stringify(newConfig, null, 2),
        'utf-8',
      )
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = generateConfig
