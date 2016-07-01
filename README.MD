# NeteaseCloudMusicApi

一个调用网易云音乐 API 的 node 模块

![](http://binaryify.github.io/images/api.jpg)

## Start
``` shell
npm install NeteaseCloudMusicApi
```

## Usage
``` javascript
var api = require('NeteaseCloudMusicApi').api
api.search('年度之歌',function(data){
    console.log(data)
})
```
or
``` javascript
import {api} from 'NeteaseCloudMusicApi'
api.search('年度之歌',data => {
    console.log(data)
})
```

## API

### search
 ``` javascript
api.search(name:String,[callback:function,limit:Nnumber default:3, offset:Number default:0])
 ```

### lrc
 ``` javascript
api.lrc(id:Number,[callback:function,lv:Number default:-1])
 ```

### song
 ``` javascript
api.song(id:Number,[callback:function])
 ```
## Download

[github](https://github.com/Binaryify/NeteaseCloudMusicApi)

[npm](https://www.npmjs.com/package/NeteaseCloudMusicApi)
