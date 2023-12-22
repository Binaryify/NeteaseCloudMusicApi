module.exports = (response) => {
  response = JSON.parse(response)
  if (response.body.code === 200) {
    response = {
      status: 200,
      body: {
        data: {
          ...response.body,
          cookie: response.cookie,
        },
      },
    }
  }
  return response
}
