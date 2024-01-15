module.exports = (response) => {
  if (response.body.code === 200) {
    response = {
      status: 200,
      body: {
        ...response.body,
        cookie: response.cookie,
      },
    }
  }
  return response
}
