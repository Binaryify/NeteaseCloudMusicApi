const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config.js') // 引入你的 webpack 配置文件

// 暂时不支持的接口
const exclude = [
  'cloud',
  'voice_upload',
  'avatar_upload',
  'playlist_cover_update',
  'voice_upload',
  'songUpload',
  'upload',
]

// 各个SDK下NeteaseCloudMusicApi.js所在的目录
const SDK_PATH = {
  python: 'package/NeteaseCloudMusic/NeteaseCloudMusicApi.js',
}

async function getModulesDefinitions(modulesPath) {
  const files = await fs.promises.readdir(modulesPath)
  const modules = files
    .reverse()
    .filter((file) => file.endsWith('.js'))
    .map((file) => {
      const identifier = file.split('.').shift()
      return identifier
    })

  return modules
}

async function genderIndex() {
  // api内容生成

  let api_content = ''
  let api_name_list = await getModulesDefinitions(
    path.join(__dirname, '../corejs/module'),
  )

  api_name_list.forEach((name) => {
    if (exclude.includes(name)) return
    api_content += `const ${name} = require('../module/${name}.js')\n`
  })

  api_content += 'module.exports = {\n'
  api_name_list.forEach((name) => {
    if (exclude.includes(name)) return
    api_content += `  ${name}: ${name},\n`
  })
  api_content += '}\n'

  fs.writeFileSync(path.join(__dirname, '../corejs/util/api.js'), api_content)

  // afterRequestApi内容生成

  let afterRequestApi_content = ''
  let afterRequestApi_name_list = await getModulesDefinitions(
    path.join(__dirname, '../corejs/afterRequest'),
  )

  afterRequestApi_name_list.forEach((name) => {
    afterRequestApi_content += `const ${name} = require('../afterRequest/${name}.js')\n`
  })

  afterRequestApi_content += 'module.exports = {\n'
  afterRequestApi_name_list.forEach((name) => {
    afterRequestApi_content += `  ${name}: ${name},\n`
  })
  afterRequestApi_content += '}\n'
  fs.writeFileSync(
    path.join(__dirname, '../corejs/util/afterRequestApi.js'),
    afterRequestApi_content,
  )
}

async function build() {
  // 生成api导出
  await genderIndex()

  try {
    // 打包ESM
    const compiler = await webpack(config)
    // compiler.hooks.done.tap('MyPlugin', (stats) => {
    //   console.log(
    //     stats.toJson({
    //       chunks: false, // 使构建过程更静默无输出
    //       colors: true, // 在控制台展示颜色
    //     }),
    //   )
    // })
    // compiler.run((err, stats) => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   // 处理 stats...
    // })
    console.log('拷贝文件到各个SDK指定目录')
    // 拷贝文件到各个SDK指定目录
    // Object.entries(SDK_PATH).forEach(([sdk_name, sdk_path]) => {
    //   sdk_path = path.join(__dirname, '../sdk', sdk_name, sdk_path)
    //   console.log(`   ${sdk_name}:`, sdk_path)
    //   fs.copyFileSync(
    //     path.join(__dirname, '../dist/NeteaseCloudMusicApi.js'),
    //     sdk_path,
    //   )
    // })
  } catch (err) {
    console.error(err)
  }

  // // 打包ESM
  // webpack(config)
  //   .then((stats) => {
  //     console.log(
  //       stats.toString({
  //         chunks: false, // 使构建过程更静默无输出
  //         colors: true, // 在控制台展示颜色
  //       }),
  //     )
  //     console.log('拷贝文件到各个SDK指定目录')
  //     // 拷贝文件到各个SDK指定目录
  //     Object.entries(SDK_PATH).forEach(([name, path]) => {
  //       path = path.join(__dirname, '../', name, path)
  //       console.log(path)
  //     })
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
}

build()
