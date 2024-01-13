module.exports = (response) => {
  return {
    status: 200,
    body: {
      data: response.body,
      code: 200,
    },
    cookie: response.cookie,
  }
}
