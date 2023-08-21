#!/usr/bin/env node
async function start() {
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
