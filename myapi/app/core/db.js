const Sequelize = require("sequelize");
const config = require("@config")

const { dbName, host, port, user, password } = config.database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: false,
  timezone: "+08:00",
  define: {
    // create_time && update_time
    timestamps: true,
    // delete_time
    paranoid: true,
    created_at: "createdAt",
    updated_at: "updatedAt",
    deleted_at: "deletedAt",
    // 把驼峰命名转换为下划线
    underscored: true,
    scopes: {
      bh: {
        attributes: {
          exclude: ["password", "updatedAt", "deletedAt", "createdAt"],
        },
      },
    },
  },
  // 添加这个配置 
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  }
});

// 创建模型
sequelize.sync({ force: false });

module.exports = sequelize
