// 精选电台分类

/*
    有声书 10001
    知识技能 453050
    商业财经 453051
    人文历史 11
    外语世界 13
    亲子宝贝 14
    创作|翻唱 2001
    音乐故事 2
    3D|电子 10002
    相声曲艺 8
    情感调频 3
    美文读物 6
    脱口秀 5
    广播剧 7
    二次元 3001
    明星做主播 1
    娱乐|影视 4
    科技科学 453052
    校园|教育 4001
    旅途|城市 12
*/

module.exports = (query, request) => {
    const data = {
        cateId: query.type
    }
    return request(
        'POST', `http://music.163.com/weapi/djradio/recommend`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}