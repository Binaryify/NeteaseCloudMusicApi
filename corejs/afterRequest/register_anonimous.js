module.exports = (response) => {
  response = JSON.parse(response)
  if (response.body.code === 200) {
    response = {
      status: 200,
      body: {
        ...response.body,
        cookie: response.cookie.join(';'),
      },
      cookie: response.cookie,
    }
  }
  return response
}
