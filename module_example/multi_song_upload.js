const { cloud, login_cellphone } = require('../main')
const fs = require('fs')
const path = require('path')
const yargs = require('yargs')

const MUSIC_FILE_EXTENSIONS = new Set(['.mp3', '.flac'])

function getAllMusicFiles(dir, arrayOfFiles) {
  arrayOfFiles = arrayOfFiles || []

  fs.readdirSync(dir).forEach((file) => {
    let fullPath = path.join(dir, file)
    if (fs.lstatSync(fullPath).isDirectory()) {
      getAllMusicFiles(fullPath, arrayOfFiles)
    } else {
      if (MUSIC_FILE_EXTENSIONS.has(path.extname(fullPath))) {
        arrayOfFiles.push(fullPath)
      }
    }
  })

  return arrayOfFiles
}

function getParsedArgs() {
  return yargs(process.argv.slice(2))
    .option('country_code', {
      default: '86',
      describe: 'The country code of your phone number',
      type: 'string',
    })
    .option('phone_number', {
      demandOption: true,
      describe: 'Your phone number',
      type: 'string',
    })
    .option('password', {
      demandOption: true,
      describe: 'Your password',
      type: 'string',
    })
    .option('file', {
      describe: 'The absolute path to the single music file to be uploaded',
      type: 'string',
    })
    .option('dir', {
      describe: 'The absolute to the directory of music files to be uploaded',
      type: 'string',
    })
    .conflicts('file', 'dir')
    .help()
    .alias('help', 'h').argv
}

async function main() {
  const args = getParsedArgs()
  const result = await login_cellphone({
    countrycode: args.country_code,
    phone: args.phone_number,
    password: args.password,
  })
  const files = args.file
    ? getAllMusicFiles(args.file)
    : getAllMusicFiles(args.dir)
  let processed = 0
  let failed = 0
  for (let k in files) {
    const file = files[k]
    try {
      await cloud({
        songFile: {
          name: path.basename(file),
          data: fs.readFileSync(file),
        },
        cookie: result.body.cookie,
      })
    } catch (error) {
      console.log(error)
      failed += 1
    }
    processed += 1
    console.log(`Processed ${processed}/${files.length} songs...`)
    if (failed) {
      console.log(`Failed to upload ${failed} songs...`)
    }
  }
  console.log('Finished!')
}
main()
