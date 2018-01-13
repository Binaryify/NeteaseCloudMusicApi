const express = require("express");
const apicache = require("apicache");
const path = require("path");

const app = express();
let cache = apicache.middleware;

// 跨域设置
app.all("*", function(req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header("Access-Control-Allow-Credentials", true);
    // 这里获取 origin 请求头 而不是用 *
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

const onlyStatus200 = (req, res) => res.statusCode === 200;

app.use(cache("2 minutes", onlyStatus200));

app.use(express.static(path.resolve(__dirname, "public")));

app.use(function(req, res, next) {
  const proxy = req.query.proxy;
  if (proxy) {
    req.headers.cookie = req.headers.cookie + `__proxy__${proxy}`;
  }
  next();
});

// 获取专辑内容
app.use("/album", require("./router/album"));

// 获取歌手单曲
app.use("/artists", require("./router/artists"));

// 获取歌手专辑列表
app.use("/artist/album", require("./router/artist_album"));

//艺术家-信息
app.use("/artist/desc", require("./router/artists_desc"));

//艺术家-mv
app.use("/artist/mv", require("./router/artists_mv"));

// 获取 banner
app.use("/banner", require("./router/banner"));

app.use("/check/music", require("./router/check_music"));

app.use("/comment/music", require("./router/comment_music"));

app.use("/comment/mv", require("./router/comment_mv"));

app.use("/comment/album", require("./router/comment_album"));

app.use("/comment/playlist", require("./router/comment_playlist"));

//未知 api
app.use("/comment/like", require("./router/comment_like"));

app.use("/comment/dj", require("./router/comment_dj"));

//签到
app.use("/daily_signin", require("./router/daily_signin"));

//djradio detail
app.use("/dj/detail", require("./router/dj_detail"));

//dj主播 radio
app.use("/dj/program", require("./router/dj_program"));

app.use("/dj/program/detail", require("./router/dj_program_detail"));

app.use("/dj/sub", require("./router/dj_sub"));

app.use("/dj/catelist", require("./router/dj_catelist"));

app.use("/dj/hot", require("./router/dj_hot"));

// 精选电台
app.use("/dj/recommend", require("./router/dj_recommend"));

//精选电台-分类电台
app.use("/dj/recommend/type", require("./router/dj_recommend_type"));

//获取动态
app.use("/event", require("./router/event"));

//垃圾桶
app.use("/fm_trash", require("./router/fm_trash"));

app.use("/follow", require("./router/follow"));

// 喜欢歌曲
app.use("/like", require("./router/like"));

app.use("/likelist", require("./router/likelist"));

//手机登录
app.use("/login/cellphone", require("./router/loginCellphone"));

//邮箱登录
app.use("/login", require("./router/login"));

//登录刷新
app.use("/login/refresh", require("./router/login_refresh"));

// 不明 api
app.use("/log/web", require("./router/logWeb"));

// 获取歌词
app.use("/lyric", require("./router/lyric"));

// 获取音乐 url
app.use("/music/url", require("./router/musicUrl"));

//最新 mv
app.use("/mv/first", require("./router/mv_first"));

//播放 mv
app.use("/mv/url", require("./router/mv_url"));

//mv
app.use("/mv", require("./router/mv"));

// 私人 FM
app.use("/personal_fm", require("./router/personal_fm"));

//推荐歌单
app.use("/personalized", require("./router/personalized"));

//推荐dj
app.use("/personalized/djprogram", require("./router/personalized_djprogram"));

//推荐新音乐
app.use("/personalized/newsong", require("./router/personalized_newsong"));

//独家放送
app.use(
  "/personalized/privatecontent",
  require("./router/personalized_privatecontent")
);

//推荐mv
app.use("/personalized/mv", require("./router/personalized_mv"));

// 获取歌单内列表
app.use("/playlist/detail", require("./router/playlist_detail"));

//收藏单曲到歌单,从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
app.use("/playlist/tracks", require("./router/playlist_tracks"));

app.use("/playlist/hot", require("./router/playlist_hot"));

app.use("/playlist/catlist", require("./router/playlist_catlist"));

//推荐节目
app.use("/program/recommend", require("./router/program_recommend"));

// 获取每日推荐歌曲
app.use("/recommend/songs", require("./router/recommend_songs"));

// 获取每日推荐歌单
app.use("/recommend/resource", require("./router/recommend_resource"));

//取消推荐
app.use("/recommend/dislike", require("./router/recommend_dislike"));

app.use("/resource/like", require("./router/resource_like"));

// 搜索
app.use("/search", require("./router/search"));

//搜索 multimatch
app.use("/search/multimatch", require("./router/search_multimatch"));

// 搜索 suggest,搜索结果包含单曲,歌手,歌单,mv信息
app.use("/search/suggest", require("./router/search_suggest"));

//simi ,相似歌单
app.use("/simi/playlist", require("./router/simi_playlist"));

//simi ,相似歌曲
app.use("/simi/song", require("./router/simi_song"));

//相似 mv
app.use("/simi/mv", require("./router/simi_mv"));

//simi ,相似关注的用户
app.use("/simi/user", require("./router/simi_user"));

//相似歌手
app.use("/simi/artist", require("./router/simi_artists"));

// 获取音乐详情
app.use("/song/detail", require("./router/song_detail"));

// 新碟上架 http://music.163.com/#/discover/album/
app.use("/top/album", require("./router/top_album"));

// 热门歌手 http://music.163.com/#/discover/artist/
app.use("/top/artists", require("./router/top_artists"));

app.use("/top/list", require("./router/top_list"));

app.use("/top/mv", require("./router/top_mv"));

//分类歌单
app.use("/top/playlist", require("./router/top_playlist"));

//精品歌单
app.use(
  "/top/playlist/highquality",
  require("./router/top_playlist_highquality")
);

app.use("/top/song", require("./router/top_songs"));

app.use("/toplist", require("./router/toplist"));

app.use("/toplist/artist", require("./router/toplist_artist"));

app.use("/toplist/detail", require("./router/toplist_detail"));

// 获取用户歌单
app.use("/user/playlist", require("./router/user_playlist"));

// 获取用户电台
app.use("/user/audio", require("./router/user_audio"));

//云盘数据
app.use("/user/cloud", require("./router/user_cloud"));

//云盘数据详情? 暂时不要使用
app.use("/user/cloud/search", require("./router/user_cloud_search"));
//用户动态
app.use("/user/event", require("./router/user_event"));

app.use("/user/detail", require("./router/user_detail"));

app.use("/user/dj", require("./router/user_dj"));

app.use("/user/followeds", require("./router/user_followeds"));

app.use("/user/follows", require("./router/user_follows"));

app.use("/user/subcount", require("./router/user_subcount"));

app.use("/user/record", require("./router/user_playrecord"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`);
});

module.exports = app;
