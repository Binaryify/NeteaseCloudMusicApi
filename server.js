const express = require("express");
const apicache = require("apicache");
const path = require("path");
const fs = require("fs");
const server = express();
// 得先在 router 文件夹下运行 modules.py ，命令 python3 modules.py
const modules = require("./router/module");
let cache = apicache.middleware;

// 跨域设置
server.all("*", function(req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header("Access-Control-Allow-Credentials", true);
    // 这里获取 origin 请求头 而不是用 *
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

const onlyStatus200 = (req, res) => res.statusCode === 200;

server.use(cache("2 minutes", onlyStatus200));

server.use(express.static(path.resolve(__dirname, "public")));

server.use(function(req, res, next) {
  const proxy = req.query.proxy;
  if (proxy) {
    req.headers.cookie = req.headers.cookie + `__proxy__${proxy}`;
  }
  next();
});

// 因为这几个文件对外所注册的路由 和 其他文件对外注册的路由规则不一样, 所以专门写个MAP对这些文件做特殊处理
const UnusualRouteFileMap = {
  // key 为文件名, value 为对外注册的路由
  // 将所有 route 转换为一个 module 不用判断是否是文件
  "daily_signin": "/daily_signin",
  "fm_trash": "/fm_trash",
  "personal_fm": "/personal_fm"
};

// 简化 路由 导出方式, 由这里统一对 router 目录中导出的路由做包装, 路由实际对应的文件只专注做它该做的事情, 不用重复写样板代码
const { createWebAPIRequest, request } = require("./util/util");
const Wrap = fn => (req, res) => fn(req, res, createWebAPIRequest, request);

// 使用 for-in 遍历对象，根据命名规则，自动注册路由
for (let file in modules ) {
  let route;

  if (typeof UnusualRouteFileMap[file] !== "undefined") {
    route = UnusualRouteFileMap[file];
  } else {
    route =
      "/" +
      file
      .replace(/_/g, "/")
      .replace(/[A-Z]/g, a => {
        return "/" + a.toLowerCase();
      });
  }

  server.use(route, Wrap(modules[file]));
}

// 同步读取 router 目录中的js文件, 根据命名规则, 自动注册路由
// fs.readdirSync("./router/").reverse().forEach(file => {
  // if (/\.js$/i.test(file) === false) {
    // return;
  // }

  // let route;

  // if (typeof UnusualRouteFileMap[file] !== "undefined") {
    // route = UnusualRouteFileMap[file];
  // } else {
    // route =
      // "/" +
      // file
        // .replace(/\.js$/i, "")
        // .replace(/_/g, "/")
        // .replace(/[A-Z]/g, a => {
          // return "/" + a.toLowerCase();
        // });
  // }

  // let req = require("./router/" + file);
  // app.use(route, Wrap(req));
// });

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`);
});

module.exports = server;
