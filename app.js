const express = require('express')
const http = require('http')
const app = express()

//手机登录
app.use('/login/cellphone', require('./router/loginCellphone'))

//邮箱登录
app.use('/login', require('./router/login'))

//获取评论
app.use('/comment', require('./router/comment'))

// 获取每日推荐歌曲
app.use('/recommend/songs', require('./router/recommendSongs'))

// 获取每日推荐歌单
app.use('/recommend/resource', require('./router/recommendResource'))

// 获取歌词
app.use('/lyric', require('./router/lyric'))

// 获取专辑
app.use('/album', require('./router/album'))

// 歌单（网友精选碟） hot||new http://music.163.com/#/discover/playlist/
app.use('/top_playlist', require('./router/top_playlist'))

// 新碟上架 http://music.163.com/#/discover/album/
app.use('/new_albums', require('./router/new_albums'))

// 热门歌手 http://music.163.com/#/discover/artist/
app.use('/top_artists', require('./router/top_artists'))

// 获取用户歌单
app.use('/user/playlist', require('./router/userPlaylist'))

// 获取歌单内列表
app.use('/playlist/detail', require('./router/playlistDetail'))

//不明 api
app.use('/playlist/tracks', require('./router/playlistTracks'))

// 获取音乐 url
app.use('/music/url', require('./router/musicUrl'))

// 搜歌
app.use('/search', require('.//router/search'))

// 获取音乐详情
app.use('/music/songDetail', require('./router/songDetail'))

// 不明 api
app.use('/log/web', require('./router/logWeb'))

// 私人 FM
app.use("/personal_fm",require("./router/personal_fm"))

// 喜欢歌曲
app.use("/like",require("./router/like"))

//签到
app.use("/daily_signin",require("./router/daily_signin"))

//垃圾桶
app.use("/fm_trash",require("./router/fm_trash"))

//排行榜
app.use("/top_list",require("./router/top_list"))

//mv
app.use("/mv",require("./router/mv"))

//播放mv
app.use("/play_mv",require("./router/play_mv"))

process.on('SIGHUP', () => {
  console.log('server: bye bye')
  process.exit()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server running @${port}`)
})

module.exports = app