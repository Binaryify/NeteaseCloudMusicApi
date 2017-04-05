# NeteaseCloudMusicApi

网易云音乐 NodeJS 版 API


## 版本新特性  
版本升级到 2.0 .增加使用文档,完成项目重构,增加更完善的单元测试,升级 api 到 v2+,支持登录并获取用户信息和创建的歌单,可通过获取音乐 url 接口获取用户歌单里的的音乐,获取每日推荐歌单和每日推荐音乐

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

### 登录
登录有两个接口
1. 手机登录  
接口地址:`'/login/cellphone'`  
调用例子:  
`'/login/cellphone?phone=xxx&password=yyy'`
2. 邮箱登录  
接口地址:`'/login`  
调用例子:  
`'/login?email=xxx@163.com&password=yyy'`  
返回数据如下图:  
![登录](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E7%99%BB%E5%BD%95.png)


完成登录后,会在浏览器保存一个 cookie 用作登录凭证, 除了搜索的音乐和歌词,以及获取音乐 url 都需要用到这个 cookie  

#### 注意
调用登录接口的速度比调用其他接口慢,因为登录过程调用了加密算法

### 获取用户歌单
说明:登陆后调用此接口,传入用户 id, 可以获取用户歌单  
接口地址:  
`/user/playlist`  
调用例子:  
`/user/playlist?uid=32953014`  
返回数据如下图:  
![用户歌单](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E7%94%A8%E6%88%B7%E6%AD%8C%E5%8D%95.png)

### 获取歌单详情  
说明:歌单能看到歌单名字,但看不到具体歌单内容,调用此接口,传入歌单 id,可以获取对应歌单内的所有的音乐  
接口地址:  
`playlist/detail`  
调用例子:  
`/playlist/detail?id=24381616`  
返回数据如下图:  
![歌单详情](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%AD%8C%E5%8D%95%E8%AF%A6%E6%83%85.png)

### 获取音乐 url
说明:使用歌单详情接口后,能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口,传入的音乐 id,可以获取对应的音乐的 url(不需要登录)  
接口地址:  
`playlist/detail`  
调用例子:  
`/playlist/detail?id=24381616`  
返回数据如下图:  
![音乐 url](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E9%9F%B3%E4%B9%90%20url.png)

### 搜索音乐
说明:调用此接口,传入搜索关键词可以搜索该音乐,关键词可以多个,以空格隔开,如"周杰伦 搁浅"(不需要登录)  
必选参数:
keywords : 关键词
可选参数:
limit: 返回数量  
type: 搜索类型；取值意义  
. 1 单曲  
. 10 专辑  
. 100 歌手  
. 1000 歌单  
. 1002 用户  
 
 offset: 偏移数量，用于分页  

接口地址:  
`/search`  
调用例子:  
`/search?keywords=海阔天空`  
返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%90%9C%E7%B4%A2.png)

### 获取歌词
说明:调用此接口,传入音乐 id 可获得对应音乐的歌词(不需要登录)  
接口地址:  
`/lyric`  
调用例子:  
`/lyric?id=347230`  
返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%AD%8C%E8%AF%8D.png)

### 获取歌手专辑列表
说明:调用此接口,传入歌手 id,可获得歌手专辑列表  
接口地址:  
`/album`  
调用例子:  
`album?id=32311`  
![获取专辑](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E4%B8%93%E8%BE%91.png)




### 获取每日推荐歌单
说明:调用此接口,可获得每日推荐歌单(需要登录)
接口地址:  
`/recommend/resource`  
调用例子:  
`/recommend/resource`  
返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E5%8D%95.png)

### 获取每日推荐歌曲
说明:调用此接口,可获得每日推荐歌曲(需要登录)
接口地址:  
`/recommend/songs`  
调用例子:  
`/recommend/songs`  
返回数据如下图: 
![搜索音乐](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/%E6%8E%A8%E8%8D%90%E6%AD%8C%E6%9B%B2.png)

## 离线访问此文档
此文档同时也是 Progressive Web Apps(PWA), 加入serviceWorker,可离线访问

## License
[The MIT License (MIT)](LICENSE)
