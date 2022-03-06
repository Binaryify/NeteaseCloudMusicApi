const fsPromises = require('fs/promises')
const path = require('path')
const server = require('../server')

const exportFile = path.join(__dirname, 'moddef.json')

async function main() {
  const def = await server.getModulesDefinitions(
    path.join(__dirname, '..', 'module'),
    {
      'daily_signin.js': '/daily_signin',
      'fm_trash.js': '/fm_trash',
      'personal_fm.js': '/personal_fm',
    },
    false,
  )

  fsPromises.writeFile(exportFile, JSON.stringify(def, null, 4))
  console.log(`👍 Get your own definition at: ${exportFile}`)
}

main()
