module.exports = (response) => {
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
