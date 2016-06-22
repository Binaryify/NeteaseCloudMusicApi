# start
```
npm install 
```
# usage

```js
var api=require('NeteaseCloudMusicApi').api
api.search('年度之歌')
```
or
```js
import {api} from 'NeteaseCloudMusicApi'
api.search('年度之歌')
```

# api
## search
 ```js
 api.search(name:String, [limit:Nnumber default:3, offset:Number default:0])
 ```

## lrc
 ```js
 api.lrc(id:Number, [lv:Number default:-1])
 ```


 ```js
  api.song(id:Number)
 ```