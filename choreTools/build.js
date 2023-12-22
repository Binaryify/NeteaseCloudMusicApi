const fs = require('fs')
const path = require('path')

async function getModulesDefinitions(modulesPath) {
  const files = await fs.promises.readdir(modulesPath)
  // const parseRoute = (/** @type {string} */ fileName) =>
  //   specificRoute && fileName in specificRoute
  //     ? specificRoute[fileName]
  //     : `/${fileName.replace(/\.js$/i, '').replace(/_/g, '/')}`

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

genderIndex()
