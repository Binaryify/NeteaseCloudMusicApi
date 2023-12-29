/* eslint-disable prettier/prettier */
const fs = require('fs')
const path = require('path')
const { register_anonimous } = require('./main')
const { cookieToJson } = require('./corejs/util')

const tmpPath = require('os').tmpdir()
async function generateConfig() {
  try {
    const res = await register_anonimous()
    const cookie = res.cookie
    if (cookie) {
      fs.writeFileSync(
        path.resolve(tmpPath, 'anonymous_token'),
        cookie.MUSIC_A,
        'utf-8',
      )
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = generateConfig
