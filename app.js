const express = require('express')
const http = require('http')
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

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

// 获取歌单
app.use('/user/playlist', require('./router/userPlaylist'))

// 获取歌单内列表
app.use('/playlist/detail', require('./router/playlistDetail'))

//不明 api
app.use('/playlist/tracks', require('./router/playlistTracks'))

// 获取音乐 url
app.use('/music/url', require('./router/musicUrl'))

// 搜歌
app.use('/search', require('.//router/search'))

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

process.on('SIGHUP', () => {
  console.log('server: bye bye')
  process.exit()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server running @${port}`)
})

module.exports = app