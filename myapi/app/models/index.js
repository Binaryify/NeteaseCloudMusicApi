const { Sequelize, DataTypes } = require('sequelize')
const { command } = require('yargs')
const sequelize = new Sequelize('music', 'root', '123456', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
})

const Banner = sequelize.define(
  'banner',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: '主键',
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      comment: '图片的url',
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)

// 歌手
const Singer = sequelize.define(
  'singer',
  {
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
    },
    type: {
      type: DataTypes.STRING(100),
      comment: '-1:全部 1:男歌手 2:女歌手 3:乐队',
    },
    area: {
      type: DataTypes.STRING(100),
      comment: '-1:全部 7华语 96欧美 8:日本 0:其他',
    },
    initial: {
      type: DataTypes.TINYINT(100),
      comment: '',
    },
    isHot: {
      type: DataTypes.TINYINT(50),
      comment: '是否是热门歌手',
    },
    netSingerId: {
      type: DataTypes.STRING(200),
      comment: '在线歌单id',
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)

// 歌单
const Album = sequelize.define(
  'album',
  {
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
    picUrl: {
      type: DataTypes.STRING(500),
      comment: '封面图片',
    },
    trackCount: {
      type: DataTypes.BIGINT,
      comment: '歌单订阅/收藏人数',
    },
    playCount: {
      type: DataTypes.STRING(500),
      comment: '播放总数',
    },
    netAlbumId: {
      type: DataTypes.STRING(200),
      comment: '在线歌单id',
    },
    creatorAvatarUrl: {
      type: DataTypes.STRING(200),
      comment: '歌单创建者头像',
    },
    creatorNickName: {
      type: DataTypes.STRING(100),
      comment: '歌单创建者名字',
    },
    subscribedCount: {
      type: DataTypes.STRING(100),
      comment: '播放量',
    },
    updateFrequency: {
      type: DataTypes.STRING(300),
      comment: '更新频率',
    },
    globalList: {
      type: DataTypes.STRING(100),
      comment: '是否是全球榜',
    },
    isRank: {
      type: DataTypes.TINYINT(100),
      comment: '是否是全球榜',
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)

// 歌曲
const Song = sequelize.define(
  'song',
  {
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
    artistName: {
      type: DataTypes.STRING(100),
      comment: '作者',
    },
    playCount: {
      type: DataTypes.BIGINT,
      comment: '歌曲播放量',
    },
    picUrl: {
      type: DataTypes.STRING(500),
      comment: '预览图',
    },
    lyric: {
      type: Sequelize.TEXT,
      comment: '歌词',
    },
    netSongId: {
      type: DataTypes.STRING(200),
      comment: '在线歌单id',
    },
    updateFrequency: {
      type: DataTypes.STRING(300),
      comment: '更新频率',
      defaultValue: 0,
    },
    dt: {
      type: DataTypes.STRING(200),
      comment: '歌曲时长',
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)

// 歌曲的所属歌手,自动创建外键关联
Song.belongsTo(Singer)

// 歌单中的歌（关系表） https://www.sequelize.com.cn/advanced-association-concepts/advanced-many-to-many
const Album_Song = sequelize.define(
  'album_song',
  {},
  {
    timestamps: false,
    freezeTableName: true,
  },
)
Song.belongsToMany(Album, {
  through: Album_Song,
})
Album.belongsToMany(Song, {
  through: Album_Song,
})

//热词表
const Hot = sequelize.define(
  'hot',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: '主键',
    },
    first: {
      type: DataTypes.STRING(100),
      comment: '热词名',
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)

;(async () => {
  // 建表
  await sequelize.sync()
  console.log('------create table ok.')
})().catch((err) => {
  console.log(err)
})

module.exports = { Banner, Singer, Album, Song, Hot, Album_Song }
