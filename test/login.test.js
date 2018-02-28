const assert = require("assert");
const crypto = require("crypto");
const { createWebAPIRequest } = require("../util/util");

console.log("注意:测试登陆需要替换这里的账号密码!!!");

describe("测试登录是否正常", () => {
  it("手机登录 code 应该等于200", done => {
    const phone = "换成你的手机号";
    const password = "换成你的密码";
    let cookie = "";
    const md5sum = crypto.createHash("md5");
    md5sum.update(password);
    const data = {
      phone: phone,
      password: md5sum.digest("hex"),
      rememberLogin: "true"
    };

    createWebAPIRequest(
      "music.163.com",
      "/weapi/login/cellphone",
      "POST",
      data,
      cookie,
      (music_req, cookie) => {
        const result = JSON.parse(music_req);
        console.log({
          loginType: result.loginType,
          code: result.code,
          account: result.account
        });
        assert(result.code === 200);
        done();
      },
      err => done(err)
    );
  });
});
