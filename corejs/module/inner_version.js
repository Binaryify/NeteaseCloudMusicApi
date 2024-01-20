const pkg = require('../../package.json')
module.exports = (query, request) => {
  return {
    code: 200,
    status: 200,
    body: {
      code: 200,
      data: {
        version: pkg.version,
      },
    },
  }
}
