//轮播图列表
const { Sequelize} = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const Singer = sequelize.define('singer', {
        singer: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: 31253,
            comment: "主键id",
        },
        name: {
            type: Sequelize.STRING(100),
            comment: '歌手名字'
        },
        url: {
            type: Sequelize.STRING(200),
            comment: '歌手对应歌曲页面的链接',
            unique: true,
        },
        type: {
            type: Sequelize.STRING(100),
            comment: '歌手类型'
        },
        category: {
            type: Sequelize.STRING(50),
            comment: '歌手根类型'
        },
        letter: {
            type: Sequelize.STRING(100),
            comment: '歌手首字母'
        },
        id: {
            type: Sequelize.STRING(50),
            comment: '类型参数'
        },
        initial: {
            type: Sequelize.STRING(50),
            comment: '首字母参数'
        },
    },{
        timestamps: false
    })
    return Singer
}