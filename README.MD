# NeteaseCloudMusicApi
一个调用网易云音乐 API 的 node 模块
<p>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/v/NeteaseCloudMusicApi.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/l/NeteaseCloudMusicApi.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/dev/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi"><img src="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi/badges/gpa.svg" /></a>
<a href="https://travis-ci.org/Binaryify/NeteaseCloudMusicApi"><img src="https://api.travis-ci.org/Binaryify/NeteaseCloudMusicApi.svg?branch=master" /></a>
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
api.search(name:String,[callback:function,onlySong:Boolean default:true,limit:Number default:3, offset:Number default:0])
```
说明:onlySong默认为true,如果为false,则返回一个对象,包含songs和mvs,songs和mvs均为数组

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

## getPlaylists

``` javascript
api.Playlists(id:Number,[callback:function])
```

## License
[The MIT License (MIT)](LICENSE)
