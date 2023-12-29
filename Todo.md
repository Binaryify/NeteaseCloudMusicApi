# Todo List

- [ ] `./server.js`259 行 cookie 处理
- [ ] `./choreTools/build.js`7-15 行列出的暂且未支持的 api
- [ ] `无法重现原来的Nodejs调用步骤（moudle下模块被拆分了一部分到afterRequest下）`
- [ ] 代理的支持，corejs 不需要请求也就没有代理方面的问题，后续应该给 node 服务的 request 加这个功能

完成上面几个问题，应该就可以合并代码了

我还想请 binaryify 大佬如果有空能帮忙寻找`问题一和二`列出的几个库问题的处理方法

问题一是我看不懂后续那段 cookie 处理是干什么的，无法下手

问题二的话

具体有：
`cloud.js` 中 music-metadata 对歌曲信息的处理

`voice_upload``avatar_upload``playlist_cover_update`
`voice_upload``songUpload``upload`
上述接口普遍用到了上传的功能，我没找到实现的方法。

> 上面几个接口未添加支持，但是我感觉这些库其实使用场景很少，可以慢慢找替换方法

再者，问题三，因为重构更改了 moudle 下模块的原因，无法实现原来的 node 调用方式

目前的替换方法有俩种

```js
// 从 ./corejs/index.js下导入beforeRequest,afterRequest俩个方法
// 也就是重现一下我在server.js中的步骤

let query = Object.assign(
    {},
    { cookie: req.cookies },
    req.query,
    req.body,
    req.files,
    { anonymous_token: anonymous_token },
    { ip: req.ip },
)

let request_param = api.beforeRequest(moduleDef.identifier, query)
try {
    // 处理data的编码
    if (request_param.data) {
        request_param.data = new URLSearchParams(
        request_param.data,
        ).toString()
    }
    let response = await request(request_param)

    let response_result = {
        status: response.status,
        data: response.data,
        headers: response.headers,
    }

    moduleResponse = api.afterRequest(
        response_result,
        request_param.crypto,
        request_param.apiName,
    )
} catch (/** @type {*} */ moduleResponse) {
    // 捕捉错误
}
```

方法二是我按照`SDK开发指南`中描述的那样包装一个新类，内部处理cookie，realIp，axios请求等等的问题
