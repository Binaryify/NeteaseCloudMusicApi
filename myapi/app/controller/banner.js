
const  {Banner} = require('../models/index');



//获取轮播图

async function getBanner(ctx) {
    const bannerData = await Banner.findAll({
        attributes: ['id', 'imageUrl']
    });
    if(bannerData) {
       ctx.success('获取轮播图成功', bannerData)
    }else {
        ctx.fail('获取轮播图失败')
    }
}

module.exports = {
    getBanner
}