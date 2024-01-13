const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config.js') // 引入你的 webpack 配置文件

// 各个SDK下NeteaseCloudMusicApi.js所在的目录
// const SDK_PATH = {
//   python: 'package/NeteaseCloudMusic/NeteaseCloudMusicApi.js',
// }

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
    api_content += `const ${name} = require('../module/${name}.js')\n`
  })

  api_content += 'module.exports = {\n'
  api_name_list.forEach((name) => {
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
    //       chunks: true, // 使构建过程更静默无输出
    //       colors: true, // 在控制台展示颜色
    //     }),
    //   )
    // })
    compiler.run((err, stats) => {
      if (err) {
        console.error(err)
        return
      }
      // 处理 stats...
      if (stats.hasErrors()) {
        console.error('Build errors:', stats.compilation.errors)
        stats.compilation.errors.forEach((error) => {
          console.error(error)
        })
      } else {
        console.log('Build success !')
      }
      // if (stats.hasWarnings()) {
      //   stats.compilation.warnings.forEach((warning) => {
      //     console.warn(warning)
      //   })
      // }
    })
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
