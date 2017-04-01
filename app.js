const express = require('express')
const http = require('http')
const app = express()

//手机登录
app.use('/login/cellphone', require('./router/loginCellphone'))

app.use('/login', require('./router/login'))
// 获取每日推荐歌曲
app.use('/recommend/songs', require('./router/recommendSongs'))
// 获取每日推荐歌单
app.use('/recommend/resource', require('./router/recommendResource'))

app.use('/lyric', require('./router/lyric'))

app.use('/user/playlist', require('./router/userPlaylist'))

app.use('/playlist/detail', require('./router/playlistDetail'))

app.use('/playlist/tracks', require('./router/playlistTracks'))
// 获取音乐 url
app.use('/music/url', require('./router/musicUrl'))
// 搜歌
app.use('/search', require('.//router/search'))

app.use('/log/web', require('./router/logWeb'))

process.on('SIGHUP', () => {
  console.log('server: bye bye')
  process.exit()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server running @${port}`)
})

module.exports = app