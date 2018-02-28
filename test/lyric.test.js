const assert = require("assert");
const crypto = require("crypto");
const { createWebAPIRequest } = require("../util/util");

describe("测试获取歌词是否正常", () => {
  it("数据应该有 lrc 字段", done => {
    const cookie = "";
    const data = {};
    const id = 347230;
    createWebAPIRequest(
      "music.163.com",
      "/weapi/song/lyric?os=osx&id=" + id + "&lv=-1&kv=-1&tv=-1",
      "POST",
      data,
      cookie,
      music_req => {
        console.log(music_req);
        assert(typeof JSON.parse(music_req).lrc !== "undefined");
        done();
        // res.send(music_req)
      },
      err => res.status(502).send("fetch error")
    );
  });
});
