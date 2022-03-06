const fs = require('fs')
const path = require('path')
const serverMod = require('./server')

/** @type {import("express").Express & serverMod.ExpressExtension} */
let app

before(async () => {
  app = await serverMod.serveNcmApi({})

  if (app.server && app.server.address) {
    const addr = app.server.address()
    if (addr && typeof addr === 'object' && 'port' in addr) {
      global.host = `http://localhost:${addr.port}`
      return
    }
  }

  throw new Error('failed to set up host')
})

after((done) => {
  if (app.server) {
    app.server.close(done)
    return
  }

  throw new Error('failed to set up server')
})

fs.readdirSync(path.join(__dirname, 'test')).forEach((file) => {
  require(path.join(__dirname, 'test', file))
})
