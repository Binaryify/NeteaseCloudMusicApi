# NeteaseCloudMusicApi
一个调用网易云音乐 API 的 node 模块
<p>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/v/NeteaseCloudMusicApi.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/l/NeteaseCloudMusicApi.svg" alt="License"></a>
</p>
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
api.search(name:String,[callback:function,limit:Number default:3, offset:Number default:0])
```

### lrc
``` javascript
api.lrc(id:Number,[callback:function,lv:Number default:-1])
```

### song

``` javascript
api.song(id:Number,[callback:function])
```

### getArtistAlbums

``` javascript
api.getArtistAlbums(id:Number,[callback:function,limit:Number default:3, offset:Number default:0])
```

## getAlbums

``` javascript
api.getAlbums(id:Number,[callback:function])
```


## License
[The MIT License (MIT)]('./LICENSE')
