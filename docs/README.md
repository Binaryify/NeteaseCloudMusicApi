# NeteaseCloudMusicApi

网易云音乐 NodeJS 版 API

## 灵感来自
[disoul/electron-cloud-music](https://github.com/disoul/electron-cloud-music)

[darknessomi/musicbox](https://github.com/darknessomi/musicbox)

## 工作原理
跨站请求伪造 (CSRF), 伪造请求头,调用官方 API

## 版本新特性  
Version 2.4.0  
增加歌单（网友精选碟),新碟上架,热门歌手等接口,更新文档  

Version 2.3.4  
增加歌曲详情接口,更新文档

Version 2.3.0
增加排行榜接口

Version 2.2.0  
新增喜欢歌曲,私人 FM, 垃圾桶,签到等接口

## 功能特性
1. 登录
2. 获取用户歌单
3. 获取歌曲详情
4. 获取音乐 url
5. 搜索音乐
6. 获取歌词
7. 获取评论
8. 获取歌手专辑
9. 获取每日推荐歌单
10. 获取每日推荐歌曲
11. 喜欢歌曲
12. 私人FM
13. 把私人 FM 的歌曲移动至垃圾桶
14. 签到
15. 各排行榜
16. 歌曲详情
17. 歌单（网友精选碟)
18. 新碟上架 
19. 热门歌手

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
部分接口如登录接口不能调用太频繁,否则可能会触发503错误或者 ip 高频错误,若需频繁调用,需要准备 IP 代理池

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
说明:使用歌单详情接口后,能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口,传入的音乐 id,可以获取对应的音乐的 url(不需要登录)  

**必选参数:**  
`id` : 音乐 id  

**接口地址:**  
`/music/url`  

**调用例子:**  
`/music/url?id=347230`  

返回数据如下图:  
![音乐 url](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E9%9F%B3%E4%B9%90%20url.png)

### 搜索音乐
说明:调用此接口,传入搜索关键词可以搜索该音乐,关键词可以多个,以空格隔开,如"周杰伦 搁浅"(不需要登录)  

**必选参数:**  
`keywords` : 关键词  

**可选参数:** 
`limit` : 返回数量,默认为30  
`type`: 搜索类型；默认为1,取值意义:  
1: 单曲  
10: 专辑  
100: 歌手  
1000: 歌单  
1002: 用户  
 
`offset` : 偏移数量，用于分页,如:  如:(评论页数-1)*30, 其中 30 为 limit 的值,默认为0   

**接口地址:**  
`/search`  

**调用例子:**  
`/search?keywords=海阔天空`  

返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%90%9C%E7%B4%A2.png)

### 获取歌词
说明:调用此接口,传入音乐 id 可获得对应音乐的歌词(不需要登录)  

**必选参数:**  
`id`: 音乐 id  

**接口地址:**  
`/lyric`  

**调用例子:**  
`/lyric?id=347230`  

返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%AD%8C%E8%AF%8D.png)

### 获取评论
说明:调用此接口,传入歌音乐 id和 limit 参数, 可获得该音乐的所有评论(不需要登录)  

**必选参数:**  
`id`: 音乐 id  

**可选参数:**  
`limit`: 取出评论数量,默认为20  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值  

**接口地址:**
`/comment`  

**调用例子:**  
`/comment?id=186016&limit=1`  

返回数据如下图: 
![获取评论](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/comment.png)


### 获取歌曲详情
说明:调用此接口,传入音乐 id, 可获得歌曲详情    

**必选参数:**  
`ids`: 音乐 id,可多个,如 `ids=347230` 或者 `ids=347230,347231`

**接口地址:**  
`/music/songDetail`  

**调用例子:**  
`/music/songDetail?ids=347230`  

返回数据如下图: 
![获取歌曲详情](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/songDetail.png)


### 获取歌手专辑列表
说明:调用此接口,传入歌手 id,可获得歌手专辑列表  

**必选参数:**  
`id`: 歌手 id 

**接口地址:**  
`/album`  

**调用例子:**  
`album?id=32311`  

返回数据如下图: 
![获取专辑](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E4%B8%93%E8%BE%91.png)




### 获取每日推荐歌单
说明:调用此接口,可获得每日推荐歌单(需要登录)  

**接口地址:**  
`/recommend/resource`  

**调用例子:**  
`/recommend/resource`  

返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E5%8D%95.png)

### 获取每日推荐歌曲
说明:调用此接口,可获得每日推荐歌曲(需要登录)  

**接口地址:**  
`/recommend/songs`  

**调用例子:**  
`/recommend/songs`  

返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E6%9B%B2.png)


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
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值,默认为0 

`order`: 可选值为 'new' 和 'hot',分别对应最新和最热,默认为 'hot'

**接口地址:**  
`/top_playlist`  

**调用例子:**  
`/top_playlist?limit=10&order=new`  

返回数据如下图: 

![精选碟](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_playlist.png)

### 新碟上架
说明:调用此接口,可获取新碟上架数据   
 
**可选参数:**  
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*50, 其中 50 为 limit 的值,默认为0  

**接口地址:**  
`/new_albums`  

**调用例子:**  
`/new_albums?offset=0&limit=30`  

返回数据如下图: 

![新碟上架](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/new_albums.png)

### 热门歌手
说明:调用此接口,可获取热门歌手数据 
 
**可选参数:**  
`limit`: 取出数量,默认为50  

`offset`: 偏移数量,用于分页,如:(评论页数-1)*50, 其中 50 为 limit 的值,默认为0  

**接口地址:**  
`/top_artists`  

**调用例子:**  
`/top_artists?offset=0&limit=30`  

返回数据如下图: 

![热门歌手](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_artists.png)

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
`/top_list`  

**调用例子:**  
`/top_list?idx=6`  

返回数据如下图: 

![排行榜](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/top_list.png)

## 离线访问此文档
此文档同时也是 Progressive Web Apps(PWA), 加入了serviceWorker,可离线访问


## 关于此文档
此文档由 [docsify](https://github.com/QingWei-Li/docsify/) 生成  
docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。

## License
[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)
