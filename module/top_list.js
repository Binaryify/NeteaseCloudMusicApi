// 排行榜

const topList = {
    0: "3779629", //云音乐新歌榜
    1: "3778678", //云音乐热歌榜
    2: "2884035", ///云音乐原创榜
    3: "19723756", //云音乐飙升榜
    4: "10520166", //云音乐电音榜
    5: "180106", //UK排行榜周榜
    6: "60198", //美国Billboard周榜
    7: "21845217", //KTV嗨榜
    8: "11641012", //iTunes榜
    9: "120001", //Hit FM Top榜
    10: "60131", //日本Oricon周榜
    11: "3733003", //韩国Melon排行榜周榜
    12: "60255", //韩国Mnet排行榜周榜
    13: "46772709", //韩国Melon原声周榜
    14: "112504", //中国TOP排行榜(港台榜)
    15: "64016", //中国TOP排行榜(内地榜)
    16: "10169002", //香港电台中文歌曲龙虎榜
    17: "4395559", //华语金曲榜
    18: "1899724", //中国嘻哈榜
    19: "27135204", //法国 NRJ EuroHot 30周榜
    20: "112463", //台湾Hito排行榜
    21: "3812895", //Beatport全球电子舞曲榜
    22: "71385702", //云音乐ACG音乐榜
    23: "991319590" //云音乐嘻哈榜
}

module.exports = (query, request) => {
    const data = {
        id: topList[query.idx],
        n: 10000
    }
    return request(
        'POST', `https://music.163.com/weapi/v3/playlist/detail`, data,
        {crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy}
    )
}