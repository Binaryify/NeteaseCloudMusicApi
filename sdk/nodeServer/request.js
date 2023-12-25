const axios = require('axios')

const createRequest = (request_param) => {
  settings = {
    method: request_param.method,
    url: request_param.url,
    data: request_param.data,
    headers: request_param.headers,
  }

  return new Promise((resolve, reject) => {
    const answer = { status: 500, body: {}, cookie: [] }
    axios(settings)
      .then((res) => {
        resolve(res)
        return
      })
      .catch((err) => {
        answer.status = 502
        answer.body = { code: 502, msg: err }
        reject(answer)
      })
  })
}

module.exports = createRequest
