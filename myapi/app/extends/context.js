/**
 * 成功返回请求体信息
 */
function success(message, result = null) {
  this.body = {
    code: 0,
    result,
    message,
    timestamp: +new Date(),
  };
}

/**
 * 失败返回请求体信息
 */
function fail(message, code = 500, result = null) {
  this.body = {
    code,
    result,
    message,
    timestamp: +new Date(),
  };
}




module.exports = async (ctx, next) => {
  ctx.success = success;
  ctx.fail = fail;

  await next();
};
