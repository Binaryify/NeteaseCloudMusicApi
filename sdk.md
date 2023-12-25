## SDK 开发指南

### SDK工作流程
> corejs已经被打包成了ESM, 资源位于`./dist/NeteaseCloudMusicApi.js`
>
> 各SDK需要使用本平台下的Js引擎执行`NeteaseCloudMusicApi.js`调用它的`beforeRequest`和`afterRequest`俩个方法并自己实现网路请求相关内容

![sdk工作流程图](./static/sdk.drawio.png)

### 入参和出参

#### beforeRequest
> query接受俩种类型：对象和json字符串，传入对象返回也是对象，如果传入json那么就会返回相应json字符串结果
```
NeteaseCloudMusicApi.beforeRequest(name: str, query: object|json_str)
-> name: str, query: object   
    :@return: object    {url, headers, data, method, crypto, apiName}
-> name: str, query: json_str 
    :@return: json_str  "{url, headers, data, method, crypto, apiName}"
```

#### afterRequest
> query接受俩种类型：对象和json字符串，传入对象返回也是对象，如果传入json那么就会返回相应json字符串结果
```
NeteaseCloudMusicApi.beforeRequest(responseResult: object|json_str, crypto: str, apiName: str)
-> responseResult: object, crypto: str, apiName: str
    :@return: object    {code, data, msg}
-> responseResult: json_str, crypto: str, apiName: str
    :@return: json_str  "{code, data, msg}"
```

### 注意事项
