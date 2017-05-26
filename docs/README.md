# NeteaseCloudMusicApi

网易云音乐 NodeJS 版 API

## 灵感来自
[disoul/electron-cloud-music](https://github.com/disoul/electron-cloud-music)

[darknessomi/musicbox](https://github.com/darknessomi/musicbox)

[sqaiyan/netmusic-node](https://github.com/sqaiyan/netmusic-node)

## 工作原理
跨站请求伪造 (CSRF), 伪造请求头,调用官方 API

## 版本新特性  
### 2.5.0 | 2017.4.29
增加 mv/专辑/歌单评论接口,增加云盘相关接口,增加获取用户动态/信息接口,增加关注/粉丝列表接口,增加收藏歌单接口,增加相似 mv/歌曲/用户接口,增加 banner 接口,增加刷新登录接口,增加电台相关接口,补充评论接口,更新文档

## 功能特性
1. 登录
2. 刷新登录
3. 获取用户信息,歌单，收藏，mv, dj 数量
4. 获取用户歌单
5. 获取用户电台
6. 获取用户关注列表
7. 获取用户粉丝列表
8. 获取用户动态
9. 获取用户播放记录
10. 获取精品歌单
11. 获取歌单详情
12. 搜索
13. 搜索建议
14. 获取歌词
15. 歌曲评论
16. 收藏单曲到歌单
17. 专辑评论
18. 歌单评论
19. mv 评论
20. 电台节目评论
21. banner
22. 获取歌曲详情
23. 获取专辑内容
24. 获取歌手单曲
25. 获取歌手 mv
26. 获取歌手专辑
27. 获取歌手描述
28. 获取相似歌手
29. 获取相似歌单
30. 相似 mv
31. 获取相似音乐
32. 获取相似用户
33. 获取每日推荐歌单
34. 获取每日推荐歌曲
35. 私人 FM
36. 签到
37. 喜欢音乐
38. 垃圾桶
39. 歌单(网友精选碟)
40. 新碟上架
41. 热门歌手
42. 最新 mv
43. 推荐 mv
44. 推荐歌单
45. 推荐新音乐
46. 推荐电台
47. 推荐节目
48. 独家放送
49. mv 排行
50. 获取 mv 数据
51. 播放 mv
52. 排行榜
53. 云盘
54. 电台-推荐
55. 电台-分类
56. 电台-分类推荐
57. 电台-订阅
58. 电台-详情
59. 电台-节目
60. 给评论点赞
61. 获取动态

## 安装  
``` shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```
## 运行
``` shell
$ node app.js 
```

服务器启动默认端口为3000,若不想使用3000端口,可使用以下命令:  
Mac/Linux
```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:  
```shell
$ set PORT=4000 && node app.js
```


## 接口文档
### 调用前须知
- 部分接口如登录接口不能调用太频繁,否则可能会触发503错误或者 ip 高频错误,若需频繁调用,需要准备 IP 代理池.  

- 本项目仅供学习使用,文档可能会有缓存,如果文档版本和 github 上的版本不一致,请清除缓存再查看

- 2.5.0 版本对部分原有 api 做了微调,不过只是调整了下地址,参数和返回结果不受影响

- 由于网易限制,此项目在国外服务器上使用会受到限制,如需解决,可使用大陆服务器或者使用代理,感谢 [@hiyangguo](https://github.com/hiyangguo)提出的[解决方法](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/29#issuecomment-298358438),在 'util.js' 的 'headers'处增加 
`X-Real-IP':'211.161.244.70' //任意国内IP` 即可解决

### 登录
说明:登录有两个接口  
#### 1. 手机登录  

**必选参数:**  
`phone`: 手机号码   
`password`:  密码  

**接口地址:**  
`/login/cellphone`  

**调用例子:**  
`/login/cellphone?phone=xxx&password=yyy`  

#### 2. 邮箱登录  
注意:此接口被网易和谐了,待修复,暂时使用手机登录(2017.05.20)  

**必选参数:**  
`email`: 163网易邮箱   
`password`:  密码  

**接口地址:**  
`/login`  

**调用例子:**  
`/login?email=xxx@163.com&password=yyy`  

返回数据如下图:  
![登录](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E7%99%BB%E5%BD%95.png)


完成登录后,会在浏览器保存一个 Cookies 用作登录凭证,大部分 API 都需要用到这个 Cookies

#### 注意
调用登录接口的速度比调用其他接口慢,因为登录过程调用了加密算法

### 刷新登录
说明:调用此接口,可刷新登录状态 
 
**调用例子:**  
`/login/refresh` 

### 获取用户信息,歌单，收藏，mv, dj 数量
说明:登陆后调用此接口,传入用户 id, 可以获取用户信息  

**必选参数:**  
`uid` : 用户 id  

**接口地址:**  
`/user/subcount`  

**调用例子:**  
`/user/subcount`  


### 获取用户歌单
说明:登陆后调用此接口,传入用户 id, 可以获取用户歌单    

**必选参数:**  
`uid` : 用户 id  

**接口地址:**  
`/user/playlist`  

**调用例子:**  
`/user/playlist?uid=32953014`  

返回数据如下图:  
![用户歌单](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E7%94%A8%E6%88%B7%E6%AD%8C%E5%8D%95.png)

### 获取用户电台
说明:登陆后调用此接口,传入用户 id, 可以获取用户电台  

**必选参数:**  
`uid` : 用户 id  

**接口地址:**  
`/user/dj`  

**调用例子:**  
`/user/dj?uid=32953014`  

### 获取用户关注列表  
说明:登陆后调用此接口,传入用户 id, 可以获取用户关注列表  

**必选参数:**  
`uid` : 用户 id
  
**可选参数:**  
`limit` : 返回数量,默认为30  
`offset` : 偏移数量，用于分页,如:  如:(页数-1)*30, 其中 30 为 limit 的值,默认为0 

**接口地址:**  
`/user/follows`  

**调用例子:**  
`/user/follows?uid=32953014` 

### 获取用户粉丝列表  
说明:登陆后调用此接口,传入用户 id, 可以获取用户粉丝列表  

**必选参数:**  
`uid` : 用户 id 

**可选参数:**  
`limit` : 返回数量,默认为30  
`offset` : 偏移数量，用于分页,如:  如:(页数-1)*30, 其中 30 为 limit 的值,默认为0

**接口地址:**  
`/user/followeds`  

**调用例子:**  
`/user/followeds?uid=32953014` 

### 获取用户动态
说明:登陆后调用此接口,传入用户 id, 可以获取用户动态

**必选参数:**  
`uid` : 用户 id 

**接口地址:**  
`/user/event`  

**调用例子:**  
`/user/event?uid=32953014` 

### 获取用户播放记录
说明:登陆后调用此接口,传入用户 id,可获取用户播放记录

**必选参数:**  
`uid` : 用户 id 

**可选参数:**  
`type` : type=1时只返回weekData, type=0时返回allData

**接口地址:**  
`/user/record`  

**调用例子:**  
`/user/record?uid=32953014&type=1` 

### 获取动态消息
说明:调用此接口,可获取各种动态,对应网页版网易云，朋友界面里的各种动态消息，如分享的视频，音乐，照片等！ 

**必选参数:**  
未知

**接口地址:**  
`/event`  

**调用例子:**  
`/event` 

### 获取精品歌单  
说明:调用此接口,可获取精品歌单 

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(页数-1)*20, 其中 20 为 limit 的值 

**接口地址:**  
`/top/playlist/highquality`  

**调用例子:**  
`/top/playlist/highquality?limit=30` 


### 获取歌单详情  
说明:歌单能看到歌单名字,但看不到具体歌单内容,调用此接口,传入歌单 id,可以获取对应歌单内的所有的音乐  

**必选参数:**  
`id` : 歌单 id  

**接口地址:**  
`/playlist/detail`  

**调用例子:**  
`/playlist/detail?id=24381616`  

返回数据如下图:  
![歌单详情](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%AD%8C%E5%8D%95%E8%AF%A6%E6%83%85.png)

### 获取音乐 url
说明:使用歌单详情接口后,能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口,传入的音乐 id(可多个,用逗号隔开),可以获取对应的音乐的 url(不需要登录)  

**必选参数:**  
`id` : 音乐 id  

**接口地址:**  
`/music/url`  

**调用例子:**  
`/music/url?id=347230`  
`/music/url?id=347230,347231` 

返回数据如下图:  
![音乐 url](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E9%9F%B3%E4%B9%90%20url.png)

### 搜索
说明:调用此接口,传入搜索关键词可以搜索该音乐/专辑/歌手/歌单/用户,关键词可以多个,以空格隔开,如"周杰伦 搁浅"(不需要登录)  

**必选参数:**  
`keywords` : 关键词  

**可选参数:**   
`limit` : 返回数量,默认为30  
`offset` : 偏移数量，用于分页,如:  如:(页数-1)*30, 其中 30 为 limit 的值,默认为0  

`type`: 搜索类型；默认为1即单曲,取值意义:  
1: 单曲  
10: 专辑  
100: 歌手  
1000: 歌单  
1002: 用户  
1004: MV  
1006: 歌词  
1009: 电台  
 
 

**接口地址:**  
`/search`  

**调用例子:**  
`/search?keywords=海阔天空`  

返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%90%9C%E7%B4%A2.png)

### 搜索建议
说明:调用此接口,传入搜索关键词可获得搜索建议,搜索结果同时包含单曲,歌手,歌单,mv信息 

**必选参数:**  
`keywords` : 关键词  

**可选参数:**   
`limit` : 返回数量,默认为30  
`offset` : 偏移数量，用于分页,如:  如:(页数-1)*30, 其中 30 为 limit 的值,默认为0  

`type`: 搜索类型；默认为1即单曲,取值意义:  
1: 单曲  
10: 专辑  
100: 歌手  
1000: 歌单  
1002: 用户  
1004: MV  
1006: 歌词  
1009: 电台  
 
 

**接口地址:**  
`/search/suggest`  

**调用例子:**  
`/search/suggest?keywords=海阔天空`  

### 收藏单曲到歌单
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该专辑的所有评论(需要登录)  

**必选参数:**  
`op`: 从歌单增加单曲为add,删除为 del
`pid`: 歌单id
`tracks`: 歌曲id

**接口地址:**  
`/playlist/tracks`  

**调用例子:**  
`/playlist/tracks?op=add&pid=24381616&tracks=347230` (对应把'海阔天空'添加到'我'的歌单,测试的时候请把这里的 pid换成你自己的)


### 获取歌词
说明:调用此接口,传入音乐 id 可获得对应音乐的歌词(不需要登录)  

**必选参数:**  
`id`: 音乐 id  

**接口地址:**  
`/lyric`  

**调用例子:**  
`/lyric?id=347230`  

返回数据如下图: 
![获取歌词](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%AD%8C%E8%AF%8D.png)

### 歌曲评论
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该音乐的所有评论(不需要登录)  

**必选参数:**  
`id`: 音乐 id  

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**  
`/comment/music`  

**调用例子:**  
`/comment/music?id=186016&limit=1` 对应晴天评论 

返回数据如下图: 
![获取评论](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/comment.png)


### 专辑评论
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该专辑的所有评论(不需要登录)  

**必选参数:**  
`id`: 专辑 id  

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**  
`/comment/album`  

**调用例子:**  
`/comment/album?id=32311` 

### 歌单评论
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该歌单的所有评论(不需要登录)  

**必选参数:**  
`id`: 歌单 id  

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**  
`/comment/playlist`  

**调用例子:**  
`/comment/playlist?id=705123491` 

### mv 评论
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该 mv 的所有评论(不需要登录)  

**必选参数:**  
`id`: mv id  

**可选参数:**   
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**  
`/comment/mv`  

**调用例子:**  
`/comment/mv?id=5436712` 

### 电台节目评论
说明:调用此接口,传入音乐 id和 limit 参数, 可获得该 电台节目 的所有评论(不需要登录)  

**必选参数:**  
`id`: 电台节目的 id  

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**  
`/comment/dj`  

**调用例子:**  
`/comment/dj?id=794062371` 

### 给评论点赞
说明:调用此接口,传入 type, 资源 id, 和评论id cid和 是否点赞参数 t 即可给对应评论点赞(需要登录)

**必选参数:**  
`id` :  资源 id, 如歌曲 id,mv id  

`cid` : 评论 id    

`t` :是否点赞,1为点赞,0为取消点赞  

`tpye`: 数字,资源类型,对应歌曲, mv, 专辑,歌单,电台
对应以下类型

```
0: 歌曲
1: mv
2: 歌单
3: 专辑 
4: 电台
```  
  
**接口地址:**  
`comment/like`  

**调用例子:**  
`/comment/like?id=186016&cid=4956438&t=1&type=0` 对应给晴天最热门的那条评论点赞

### banner
说明:调用此接口,可获取 banner(轮播图)数据   
注:因参数未知,只能获取比较旧的数据,如果有知道参数的小伙伴,可提交 PR

**接口地址:**  
`/banner`  

**调用例子:**  
`/banner` 

### 获取歌曲详情
说明:调用此接口,传入音乐 id, 可获得歌曲详情    

**必选参数:**  
`ids`: 音乐 id,如 `ids=347230` 

**接口地址:**  
`/song/detail`  

**调用例子:**  
`/song/detail?ids=347230`  

返回数据如下图: 
![获取歌曲详情](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/songDetail.png)


### 获取专辑内容
说明:调用此接口,传入专辑 id,可获得专辑内容

**必选参数:**  
`id`: 专辑 id 

**接口地址:**  
`/album`  

**调用例子:**  
`/album?id=32311`  

返回数据如下图: 
![获取专辑内容](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E4%B8%93%E8%BE%91.png)

### 获取歌手单曲
说明:调用此接口,传入歌手 id,可获得歌手单曲

**必选参数:**  
`id`: 歌手 id,可由搜索接口获得 

**接口地址:**  
`/artists`  

**调用例子:**  
`/artists?id=6452`  

返回数据如下图: 
![获取歌手单曲](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/artists.png)

### 获取歌手 mv
说明:调用此接口,传入歌手 id,可获得歌手 mv 信息,具体 mv 播放地址可调用`/mv`传入此接口获得的mvid 来拿到,如:
`/artist/mv?id=6452`,`/mv?mvid=5461064`

**必选参数:**  
`id`: 歌手 id,可由搜索接口获得 

**接口地址:**  
`/artist/mv`  

**调用例子:**  
`/artist/mv?id=6452`  

### 获取歌手专辑
说明:调用此接口,传入歌手 id,可获得歌手专辑内容

**必选参数:**  
`id`: 歌手 id 

**可选参数:**  
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0  

**接口地址:**  
`/artist/album`  

**调用例子:**  
`/artist/album?id=6452&limit=30` (周杰伦)

返回数据如下图: 
![获取专辑内容](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/artist_album.png)

### 获取歌手描述
说明:调用此接口,传入歌手 id,可获得歌手描述

**必选参数:**  
`id`: 歌手 id 

**接口地址:**  
`/artist/desc`  

**调用例子:**  
`/artist/desc?id=6452` (周杰伦)

### 获取相似歌手
说明:调用此接口,传入歌手 id,可获得相似歌手

**必选参数:**  
`id`: 歌手 id 

**接口地址:**  
`/simi/artist`  

**调用例子:**  
`/simi/artist?id=6452` (对应和周杰伦相似歌手)

### 获取相似歌单
说明:调用此接口,传入歌曲 id,可获得相似歌单

**必选参数:**  
`id`: 歌曲 id 

**接口地址:**  
`/simi/playlist`  

**调用例子:**  
`/simi/playlist?id=347230` (对应'光辉岁月'相似歌单)


### 相似 mv
说明:调用此接口,传入 `mvid` 可获取相似 mv
**必选参数:** 
`mvid`: mv id 

**接口地址:**  
`/simi/mv`  

**调用例子:**  
`/simi/mv?mvid=5436712`  


### 获取相似音乐
说明:调用此接口,传入歌曲 id,可获得相似歌曲

**必选参数:**  
`id`: 歌曲 id 

**接口地址:**  
`/simi/song`  

**调用例子:**  
`/simi/song?id=347230` (对应'光辉岁月'相似歌曲)

### 获取相似用户
说明:调用此接口,传入歌曲 id,可获得相似歌曲

**必选参数:**  
`id`: 歌曲 id 

**接口地址:**  
`/simi/user`  

**调用例子:**  
`/simi/user?id=347230` (对应'光辉岁月'相似歌曲)


### 获取每日推荐歌单
说明:调用此接口,可获得每日推荐歌单(需要登录)  

**接口地址:**  
`/recommend/resource`  

**调用例子:**  
`/recommend/resource`  

返回数据如下图: 
![每日推荐歌单](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E5%8D%95.png)

### 获取每日推荐歌曲
说明:调用此接口,可获得每日推荐歌曲(需要登录)  

**接口地址:**  
`/recommend/songs`  

**调用例子:**  
`/recommend/songs`  

返回数据如下图: 
![每日推荐歌曲](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E6%9B%B2.png)


### 私人 FM
说明:私人 FM( 需要登录)  

**接口地址:**  
`/personal_fm`  

**调用例子:**  
`/personal_fm`  

返回数据如下图: 

![私人 FM](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/personal_fm.png)

### 签到
说明:调用此接口,传入签到类型(可不传,默认安卓端签到),可签到(需要登录),其中安卓端签到可获得3点经验, web/PC 端签到可获得2点经验  
**可选参数:**   
`type`:  签到类型,默认 0, 其中 0 为安卓端签到,1为 web/PC 签到  

**接口地址:**  
`/daily_signin`  

**调用例子:**  
`/daily_signin`  

返回数据如下图: 

![签到成功](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/signinSuccess.png)

![签到失败](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/signinError.png)


### 喜欢音乐
说明:调用此接口,传入音乐 id, 可喜欢该音乐  

**必选参数:**   
`id`:   歌曲 id  

**可选参数:**   
`like`: 布尔值,默认为 true 即喜欢,若传 false, 则取消喜欢  

**接口地址:**  
`/like`  

**调用例子:**  
`/like?id=347230`  

返回数据如下图: 

![喜欢成功](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/like.png)

喜欢成功则返回数据的 code 为200,其余为失败

![喜欢成功截图](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/likeSuccess.png)



### 垃圾桶
说明:调用此接口,传入音乐 id, 可把该音乐从私人 FM中移除至垃圾桶

**必选参数:**   
`id`:   歌曲 id 

**接口地址:**  
`/fm_trash`  

**调用例子:**  
`/fm_trash?id=347230`  

返回数据如下图: 

![移除成功](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/fm_trash.png)

### 歌单(网友精选碟)
说明:调用此接口,可获取网友精选碟歌单  

**可选参数:**  
`order`: 可选值为 'new' 和 'hot',分别对应最新和最热,默认为 'hot'

**接口地址:**  
`/top/playlist`  

**调用例子:**  
`/top/playlist?limit=10&order=new`  

返回数据如下图: 

![精选碟](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_playlist.png)

### 新碟上架
说明:调用此接口,可获取新碟上架列表,如需具体音乐信息需要调用获取专辑列表接口 `/album` ,然后传入 id, 如 `/album?id=32311&limit=30`     
 
**可选参数:**  
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0  

**接口地址:**  
`/top/album`  

**调用例子:**  
`/top/album?offset=0&limit=30`  

返回数据如下图: 

![新碟上架](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/new_albums.png)

### 热门歌手
说明:调用此接口,可获取热门歌手数据 
 
**可选参数:**  
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0  

**接口地址:**  
`/top/artists`  

**调用例子:**  
`/top/artists?offset=0&limit=30`  

返回数据如下图: 

![热门歌手](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_artists.png)

### 最新 mv
说明:调用此接口,可获取最新 mv
 
**可选参数:**  
`limit`: 取出数量,默认为 30  

`offset`: 偏移数量,用于分页,如:(页数-1)*30, 其中 30 为 limit 的值,默认为0  

**接口地址:**  
`/mv/first`  

**调用例子:**  
`/mv/first?limit=10`  

### 推荐 mv
说明:调用此接口,可获取推荐 mv
 
**接口地址:**  
`/personalized/mv`  

**调用例子:**  
`/personalized/mv`  

### 推荐歌单
说明:调用此接口,可获取推荐歌单
 
**接口地址:**  
`/personalized`  

**调用例子:**  
`/personalized`  

### 推荐新音乐
说明:调用此接口,可获取推荐新音乐
 
**接口地址:**  
`/personalized/newsong`  

**调用例子:**  
`/personalized/newsong` 

### 推荐电台
说明:调用此接口,可获取推荐电台
 
**接口地址:**  
`/personalized/djprogram`  

**调用例子:**  
`/personalized/djprogram`

### 推荐节目
说明:调用此接口,可获取推荐电台
 
**接口地址:**  
`/program/recommend`  

**调用例子:**  
`/program/recommend`

### 独家放送
说明:调用此接口,可获取独家放送
 
**接口地址:**  
`/personalized/privatecontent`  

**调用例子:**  
`/personalized/privatecontent` 


### mv 排行
说明:调用此接口,可获取 mv 排行
 
**可选参数:**  
`limit`: 取出数量,默认为 30  

`offset`: 偏移数量,用于分页,如:(页数-1)*30, 其中 30 为 limit 的值,默认为0  

**接口地址:**  
`top/mv`  

**调用例子:**  
`top/mv?limit=10` 

### 获取 mv 数据
说明:调用此接口,传入 mvid (在搜索音乐的时候传 type=1004获得) ,可获取对应 MV 数据,数据包含 mv 名字,歌手,发布时间, mv 视频地址等数据,其中 mv 视频网易做了防盗链处理,不能直接播放,需要播放的话需要调用'播放 mv' 接口  
 
**必选参数:**  
`mvid`: mv 的 id

**接口地址:**  
`/mv`  

**调用例子:**  
`/mv?mvid=5436712`  

返回数据如下图: 

![热门歌手](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/mv.png)


### 播放 mv
说明:调用此接口,传入 mv 地址,可播放 mv,也可将接口嵌入 video 标签使用,由于使用了 'pipe',进度条无法通过拖动进度条控制进度,如有解决方案可提出 PR 或者自行改造  
 
**可选参数:**  
`url`: mv 的 地址

**接口地址:**  
`/mv/url`  

**调用例子:**  
`/mv/url?url=http://v4.music.126.net/20170422034915/c98eab2f5e2c85fc8de2ab3f0f8ed1c6/web/cloudmusic/MjQ3NDQ3MjUw/89a6a279dc2acfcd068b45ce72b1f560/533e4183a709699d566180ed0cd9abe9.mp4`  

如下图: 

![播放视频](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/play_mv.png)


### 排行榜
说明:调用此接口,传入数字 idx, 可获取不同排行榜

**必选参数:**   
`idx`:  对象 key, 对应以下排行榜  

```
"0": 云音乐新歌榜,   
"1": 云音乐热歌榜,  
"2": 网易原创歌曲榜,  
"3": 云音乐飙升榜,  
"4": 云音乐电音榜,  
"5": UK排行榜周榜,  
"6": 美国Billboard周榜  
"7": KTV嗨榜,  
"8": iTunes榜,  
"9": Hit FM Top榜,  
"10": 日本Oricon周榜  
"11": 韩国Melon排行榜周榜,  
"12": 韩国Mnet排行榜周榜,  
"13": 韩国Melon原声周榜,  
"14": 中国TOP排行榜(港台榜),  
"15": 中国TOP排行榜(内地榜)  
"16": 香港电台中文歌曲龙虎榜,  
"17": 华语金曲榜,  
"18": 中国嘻哈榜,  
"19": 法国 NRJ EuroHot 30周榜,  
"20": 台湾Hito排行榜,  
"21": Beatport全球电子舞曲榜 
``` 

**接口地址:**  
`/top/list`  

**调用例子:**  
`/top/list?idx=6`  

返回数据如下图: 

![排行榜](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_list.png)


### 云盘
说明:登陆后调用此接口,可获取云盘数据,获取的数据没有对应 url,需要再调用一次 `/music/url` 获取 url

**接口地址:**  
`/user/cloud`  

**调用例子:**  
`/user/cloud` 

### 电台-推荐
说明:登陆后调用此接口,可获得推荐电台

**接口地址:**  
`/dj/recommend`  

**调用例子:**  
`/dj/recommend`

### 电台-分类
说明:登陆后调用此接口,可获得电台类型

**接口地址:**  
`/dj/catelist`  

**调用例子:**  
`/dj/catelist`

### 电台-分类推荐
说明:登陆后调用此接口,可获得推荐电台

**必选参数:**  
`type`:  电台类型,数字,可通过`/dj/catelist`获取,对应关系为 id 对应 此接口的 type, name 对应类型意义

**接口地址:**  
`/dj/recommend/type`  

**调用例子:**  
`/dj/recommend/type?type=1`

### 电台-订阅
说明:登陆后调用此接口,传入`rid`,可订阅 dj,dj 的 `rid` 可通过搜索指定 type='1009'获取其 id,如`/search?keywords=代码时间&type=1009`

**必选参数:**  
`rid`:  电台 的 id

**接口地址:**  
`/dj/sub`  

**调用例子:**  
`/dj/sub?rid=336355127&t=1` (对应关注'代码时间')  
`/dj/sub?rid=336355127&t=0` (对应取消关注'代码时间')

### 电台-详情
说明:登陆后调用此接口,传入`rid`,可获得对应电台的详情介绍

**必选参数:**  
`rid`: 电台 的 id

**接口地址:**  
`/dj/detail?rid=336355127`  

**调用例子:**  
`/dj/detail?rid=336355127` (对应'代码时间'的详情介绍)  

### 电台-节目
说明:登陆后调用此接口,传入`rid`,可查看对应电台的电台节目以及对应 url

**必选参数:**  
`rid`: 电台 的 id

**接口地址:**  
`/dj/sub`  

**调用例子:**  
`/dj/program?rid=336355127` (对应'代码时间'的节目列表)  



## 离线访问此文档
此文档同时也是 Progressive Web Apps(PWA), 加入了serviceWorker,可离线访问


## 关于此文档
此文档由 [docsify](https://github.com/QingWei-Li/docsify/) 生成  
docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。

## License
[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)
