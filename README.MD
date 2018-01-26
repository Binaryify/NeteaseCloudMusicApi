# 网易云音乐 API

网易云音乐 Node.js API service

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

[sqaiyan/netmusic-node](https://github.com/sqaiyan/netmusic-node)

## 版本新特性

### 2.9.0 | 2018.01.26

docker 构建文件的一些增强以及增加访问日志和调试输出

### 2.8.2 | 2018.01.05

增加 Dockerfile，支持以 Docker 容器模式运行

### 2.8.1 | 2018.01.04

添加了 proxy 功能

### 2.8.0 | 2018.01.04

用 'request' 重写了请求函数

### 2.6.5 | 2017.7.16

优化 CORS 设置

### 2.6.4 | 2017.7.16

添加缓存机制和随机 UA 机制 感谢[@u3u](https://github.com/u3u)
[issue:77](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/77) 优化请求
代码 感谢 [@huhuime](https://github.com/huhuime)
[issue:83](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/83)

### 2.6.2 | 2017.7.16

修复垃圾桶接口

### 2.6.1 | 2017.7.16

修复红心接口

### 2.6.0 | 2017.6.25

修复签到接口

### 2.5.9 | 2017.6.14

增加启动说明页

### 2.5.8 | 2017.6.1

修复若干细节问题

### 2.5.7 | 2017.5.22

修复若干问题

### 2.5.6 | 2017.5.14

增加动态消息接口

### 2.5.5 | 2017.5.10

修复 mv 排行榜接口崩溃问题

### 2.5.4 | 2017.5.5

新增点赞接口,更新文档

### 2.5.3 | 2017.5.2

修复歌手单曲数据空白问题和文档获取歌手单曲 url 描述问题,更新文档

### 2.5.0 | 2017.4.29

增加 mv/专辑/歌单评论接口,增加云盘相关接口,增加获取用户动态/信息接口,增加关注/粉
丝列表接口,增加收藏歌单接口,增加相似 mv/歌曲/用户接口,增加 banner 接口,增加刷新
登录接口,增加电台相关接口,补充评论接口,更新文档

### 2.4.6 | 2017.4.21

增加播放 mv 接口,更新文档

### 2.4.5 | 2017.4.20

增加歌手专辑,歌手单曲等接口,修复/album 接口描述错误,更新文档

### 2.4.0 | 2017.4.20

增加歌单（网友精选碟),新碟上架,热门歌手等接口,更新文档

### 2.3.4 | 2017.4.20

增加歌曲详情接口,更新文档

### 2.3.0 | 2017.4.15

增加排行榜接口,更新文档

### 2.2.0 |2017.4.14

增加私人 FM, 喜欢歌曲,垃圾桶,每日签到等接口,更新文档

### 2.1.3 | 2017.4.6

改善文档

### 2.1.0 | 2017.4.6

增加获取评论接口以及对应单元测试,增加更新日志

### 2.0.0 | 2017.4.1

版本升级到 2.0.增加使用文档,完成项目重构,增加更完善的单元测试,升级 api 到 v2+,支
持登录并获取用户信息和创建的歌单,可通过获取音乐 url 接口获取用户歌单里的的音乐,
获取每日推荐歌单和每日推荐音乐

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

## 环境要求

需要 NodeJS 6.0+ 环境

## 安装

```shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## Docker 容器运行

```shell
docker pull pengxiao/netease-music-api
docker run -d -p 3000:3000 pengxiao/netease-music-api
```

## 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)

![文档](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/docs.png)

## 更新日志

[changelog](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/CHANGELOG.MD)

## 单元测试

```shell
$ npm test
```

![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot1.png)
![单元测试](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/screenshot2.png)

## License

[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)
