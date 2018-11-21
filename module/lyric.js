// 歌词

module.exports = (query, request) => {
    return request(
        'POST', `https://music.163.com/weapi/song/lyric?os=osx&id=${query.id}&lv=-1&kv=-1&tv=-1`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}