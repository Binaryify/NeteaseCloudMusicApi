# vue-desktop-nicemusic 仿网易云音乐

## 感谢
[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

## 预览地址
[vue-desktop-nicemusic](http://nicenav.cn/desktop-music)

##### 登录
![Image text](https://image-static.segmentfault.com/186/150/1861508309-5f2a2058d2596)

##### 首页
![Image text](https://image-static.segmentfault.com/120/045/1200451576-5f2a20094e36d)

##### 个人中心
![Image text](https://image-static.segmentfault.com/138/073/138073350-5f2a20fc510e5)

##### 歌单
![Image text](https://image-static.segmentfault.com/196/651/1966510659-5f2a211b3038e)

## 目录结构
##### | --dist 生成打包后的文件
##### | --node_modules 安装的依赖包
##### | --public 静态资源会被输出到目录dist
##### | --src
##### |   |--api 与后端交互使用相关方法和配置
##### |   |   |--services 对应使用的api方法和数据处理
##### |   |   |   |--instance.js 封装请求，拦截器等等 （axios，fetch）
##### |   |   |   |--home.js home相关api
##### |   |   |--config.js 配置生产，开发，测试接口配置
##### |   |   |--index.js services文件api，统一出口
##### |   |   |--resource.js 全局使用的常量
##### |   |--assets 存放静态资源，图片等等
##### |   |--model 处理歌曲视频数据等等
##### |   |--components 公用组件
##### |   |--router vue-router相关配置
##### |   |   |--index.js 导出路由配置，路由守卫配置
##### |   |   |--routes.js 所有路由
##### |   |--utils 封装的工具函数
##### |   |--views 所有的路由组件
##### |   |--app.vue 顶层路由
##### |   |--main.js 入口文件

## 安装运行
```shell
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi
$ cd NeteaseCloudMusicApi
$ npm install
$ npm start
$ 成功后访问localhost:3000是否正常，正常下一步
$ git clone git@gitee.com:lxhcool/desktop-nicemusic.git
$ cd desktop-nicemusic
$ npm install
$ npm run serve
```

## 打包上线
```shell
$ https://github.com/Binaryify/NeteaseCloudMusicApi 构建后端服务（这个需要自行解决，不知道的建议找后端的朋友帮忙）
$ 构建成功后打开是这样的界面就代表ok了（https://nicemusic-api.lxhcool.cn/）
$ 构建后会有接口地址，在项目src/api/config.js中将production下面的接口地址修改成自己的api地址
$ cd desktop-nicemusic
$ npm install
$ npm run build
$ 生成dist文件夹，将里面的内容上传到自己的服务器就可以了
```