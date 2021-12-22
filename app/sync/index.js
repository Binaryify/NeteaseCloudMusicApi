const {
  Banner,
  Singer,
  Album,
  Song,
  Hot,
  Album_Song,
  sequelize,
} = require('../../myapi/app/models/index')
const host = global.host || 'http://localhost:4000'
const banner = require('./banner')
const album = require('./album')

module.exports = async () => {
  const result = await sequelize
    .transaction((t) => {
      banner.syncDB(t, host)
      // syncAlbum(t)
    })
    .catch((err) => {
      console.log(err)
    })
  console.log(result)
}
