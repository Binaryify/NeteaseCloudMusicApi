# 网易云音乐 API
网易云音乐 NodeJS 版 API
<p>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/v/NeteaseCloudMusicApi.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/l/NeteaseCloudMusicApi.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/dev/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi"><img src="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi/badges/gpa.svg" /></a>
</p>  

## 灵感来自
[disoul/electron-cloud-music](https://github.com/disoul/electron-cloud-music)

[darknessomi/musicbox](https://github.com/darknessomi/musicbox)

## 版本新特性  
### 2.3.0 | 2017.4.15
增加排行榜接口,更新文档

### 2.2.0 | 2017.4.14
增加私人 FM, 喜欢歌曲,垃圾桶,每日签到等接口,更新文档

### 2.1.0 | 2017.4.6
增加获取评论接口以及对应单元测试,增加更新日志

### 2.0.0 | 2017.4.1
版本升级到 2.0.增加使用文档,完成项目重构,增加更完善的单元测试,升级 api 到 v2+,支持登录并获取用户信息和创建的歌单,可通过获取音乐 url 接口获取用户歌单里的的音乐,获取每日推荐歌单和每日推荐音乐

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

## 环境要求
需要 NodeJS 6.0+ 环境

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

## 使用文档
[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)

![文档](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/docs.png)

## 更新日志
[changelog](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/CHANGELOG.MD)  

## 单元测试

``` shell
$ npm test
```  

![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot1.png)
![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot2.png)

## License
[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)
