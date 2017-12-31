const assert = require("assert");
const crypto = require("crypto");
const { createWebAPIRequest } = require("../util/util");

describe("测试获取歌曲是否正常", () => {
  it("歌曲的 url 不应该为空", done => {
    const id = 462791935;
    const br = 999000;
    const data = {
      ids: [id],
      br: br,
      csrf_token: ""
    };
    const cookie = "";

    createWebAPIRequest(
      "music.163.com",
      "/weapi/song/enhance/player/url",
      "POST",
      data,
      cookie,
      music_req => {
        console.log(music_req);
        console.log(JSON.parse(music_req).data[0].url);
        assert(!!JSON.parse(music_req).data[0].url);
        done();
      },
      err => {
        done(err);
      }
    );
  });
});
