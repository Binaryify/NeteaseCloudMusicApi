const fs = require('fs')
const path = require('path')

let app
before(() => {
  app = require('./app.js')
  global.host = 'http://localhost:' + app.server.address().port
})
after((done) => {
  app.server.close(done)
})

fs.readdirSync(path.resolve(__dirname, 'test'))
.forEach(file => {
    require('./test/' + file)
})