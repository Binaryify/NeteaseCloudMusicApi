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

## 功能特性

1. 登录
2. 刷新登录
3. 获取用户信息 , 歌单，收藏，mv, dj 数量
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
32. 获取最近 5 个听了这首歌的用户
33. 获取每日推荐歌单
34. 获取每日推荐歌曲
35. 私人 FM
36. 签到
37. 喜欢音乐
38. 垃圾桶
39. 歌单 ( 网友精选碟 )
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
51. 播放 mv/视频
52. 排行榜
53. 歌手榜
54. 云盘
55. 电台 - 推荐
56. 电台 - 分类
57. 电台 - 分类推荐
58. 电台 - 订阅
59. 电台 - 详情
60. 电台 - 节目
61. 给评论点赞
62. 获取动态
63. 获取热搜
64. 发送私信
65. 发送私信歌单
66. 新建歌单
67. 收藏/取消收藏歌单
68. 歌单分类
69. 收藏的歌手列表
70. 订阅的电台列表
71. 相关歌单推荐
72. 付费精选接口
73. 音乐是否可用检查接口
74. 登录状态
75. 获取视频数据
76. 发送/删除评论
77. 热门评论
78. 视频评论
79. 退出登录
80. 所有榜单
81. 所有榜单内容摘要
82. 收藏视频
83. 收藏 MV
84. 视频详情
85. 相关视频
86. 关注用户
87. 新歌速递
88. 喜欢音乐列表(无序)
89. 收藏的 MV 列表

## 环境要求

需要 NodeJS 8.12+ 环境

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

## 贡献者

[<img alt="nujhong" src="https://avatars1.githubusercontent.com/u/23186058?v=4&s=117" width="117">](https://github.com/nujhong)[<img alt="zhangzhengyi12" src="https://avatars1.githubusercontent.com/u/23502338?v=4&s=117" width="117">](https://github.com/zhangzhengyi12)[<img alt="mchome" src="https://avatars1.githubusercontent.com/u/7392658?v=4&s=117" width="117">](https://github.com/mchome)[<img alt="pengx17" src="https://avatars1.githubusercontent.com/u/584378?v=4&s=117" width="117">](https://github.com/pengx17)[<img alt="LengYXin" src="https://avatars1.githubusercontent.com/u/19631404?v=4&s=117" width="117">](https://github.com/LengYXin)[<img alt="rccoder" src="https://avatars3.githubusercontent.com/u/7554325?v=4&s=117" width="117">](https://github.com/rccoder)

[<img alt="zhixuanziben" src="https://avatars0.githubusercontent.com/u/18346513?v=4&s=117" width="117">](https://github.com/zhixuanziben)[<img alt="LightStrawberry" src="https://avatars3.githubusercontent.com/u/5920513?v=4&s=117" width="117">](https://github.com/LightStrawberry)[<img alt="CeBkCn" src="https://avatars3.githubusercontent.com/u/14861605?v=4&s=117" width="117">](https://github.com/CeBkCn)[<img alt="nondanee" src="https://avatars0.githubusercontent.com/u/26399680?v=4&s=117" width="117">](https://github.com/nondanee)[<img alt="twesix" src="https://avatars1.githubusercontent.com/u/16174733?v=4&s=117" width="117">](https://github.com/twesix)[<img alt="Means88" src="https://avatars1.githubusercontent.com/u/5810331?s=460&v=47" width="117">](https://github.com/Means88)

## License

[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)
