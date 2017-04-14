# NeteaseCloudMusicApi

网易云音乐 NodeJS 版 API


## 版本新特性  
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

## 安装  
``` shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```
## 运行
``` shell
$ node app.js 
```

服务器启动,默认端口为3000


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
 
`offset` : 偏移数量，用于分页,如:  如:(评论页数-1)*30, 其中 30 为 limit 的值  

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
` id`:   歌曲 id  

**可选参数:**   
` like`:    布尔值,默认为 true 即喜欢,若传 false, 则取消喜欢  

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
` id`:   歌曲 id 

**接口地址:**  
`/fm_trash`  

**调用例子:**  
`/fm_trash?id=347230`  

返回数据如下图: 

![移除成功](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/fm_trash.png)



## 离线访问此文档
此文档同时也是 Progressive Web Apps(PWA), 加入了serviceWorker,可离线访问


## 关于此文档
此文档由 [docsify](https://github.com/QingWei-Li/docsify/) 生成  
docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。

## License
[The MIT License (MIT)](LICENSE)
