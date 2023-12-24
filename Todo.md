# Todo List

- [x] 排查某些接口不能使用好像都是weapi
```
这个问题在我编写python的时候就出现了，具体情况表现为：
    Python调用webpack在UMD模式下打包后的ESM库       可用
    node使用ejs文件import导入./corejs/index.js     可用
    node使用cjs文件require导入./corejs/index.js    不可用
返回情况是 data:""状态码显示200 ，此外进一步发现request_param.js所构建返回的参数虽然形式正确但是利用ApiPost工具测试返回情况是 data:""状态码显示200
```
- [ ] anonymous_token后期传入，或者找到其他移除`request_param.js`里面关于`fs`，`path`俩个node库的方法
```
corejs下不能包含node相关模块。
```
- [ ] 编写打包工具，自动构建UMD打包，CommonJS转ESM
```
测试过rollup的转换，其中`node-forge.js`在其代码中判断是否是node环境，是的话使用弄得的crypto库，虽然最后不会用但是会导致打包转换代码后开头会多出一个对crypto的导入，测试手动删除后运行正常，但不能每次手动删除，需要找到自动化方案
```
- [ ] es5的转换适配？Java中对js的支持好像都比较老，具体还得精通Java的大佬来
- [ ] 其他，各种自动化工作流程类似自动打包并提交python库到pypi，C++等平台的开发
