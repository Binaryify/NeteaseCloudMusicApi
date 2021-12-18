const { lyric } = require('../main')
const { banner } = require('../main')

async function main() {
  const result = await banner()
  console.log(result)
}

// async function othermian() {
//   const res = await lyric({
//     id: 13213241,
//   })
//   return res
// }

main()
// othermian()
