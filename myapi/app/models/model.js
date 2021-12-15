const { Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('music', 'root', 'rootqwer', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

const Banner = sequelize.define("banner", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  imageUrl: {
    type: DataTypes.STRING(500),
    comment: '图片的url'
  }
},{
  timestamps: false,
});

// 歌手
const Singer = sequelize.define("singer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键',
  },
  name: {
    type: DataTypes.STRING(100),
    comment: '歌手名称',
  },
  picUrl: {
    type: DataTypes.STRING(500),
    comment: '歌手图片预览图',
  }
},{
  timestamps: false,
});

// 歌单
const Album = sequelize.define("album", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键',
  },
  name: {
    type: DataTypes.STRING(100),
    comment: '歌单名称',
  },
  nickname: {
    type: DataTypes.STRING(500),
    comment: '歌单别名',
  },
  avatarUrl: {
    type: DataTypes.STRING(500),
    comment: '',
  },
  coverImgUrl: {
    type: DataTypes.STRING(500),
    comment: '封面图片',
  },
  subscribedCount: {
    type: DataTypes.BIGINT,
    comment: '歌单订阅人数',
  },
},{
  timestamps: false,
});

// 歌曲
const Song = sequelize.define("song", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键',
  },
  name: {
    type: DataTypes.STRING(100),
    comment: '歌曲名称',
  },
  playCount: {
    type: DataTypes.BIGINT,
    comment: '歌曲播放量',
  },
  picUrl: {
    type: DataTypes.STRING(500),
    comment: '预览图',
  }
},{
  timestamps: false,
});

// 歌曲的所属歌手,自动创建外键关联
Song.belongsTo(Singer);

// 歌单中的歌（关系表） https://www.sequelize.com.cn/advanced-association-concepts/advanced-many-to-many
const Album_Song = sequelize.define("album_song", {}, {
  timestamps: false,
});
Song.belongsToMany(Album, {
  through: Album_Song
});
Album.belongsToMany(Song, {
  through: Album_Song
});

(async () => {
  // 建表
  await sequelize.sync()
  console.log('------create table ok.')

})().catch(err=>{
  console.log(err)
});

module.exports = {Banner, Singer, Album, Song}
