const jwt = require("jsonwebtoken");
const { secretKey, whiteList, expiresIn } = require("@config").jwt;

// 生成 token
function getToken(payload) {
  return jwt.sign(payload, secretKey, {
    expiresIn,
  });
};

module.exports = {
  secretKey, // jwt 令牌
  whiteList, // jwt 白名单
  getToken
};