#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

async function start() {
  // 检测是否存在 anonymous_token 文件,没有则生成
  if (!fs.existsSync('./anonymous_token')) {
    fs.writeFileSync(path.resolve(__dirname, 'anonymous_token'), '', 'utf-8')
  }
  const generateConfig = require('./generateConfig')
  await generateConfig()
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
