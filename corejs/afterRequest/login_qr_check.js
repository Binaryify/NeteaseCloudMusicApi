module.exports = (response) => {
  try {
    result = {
      status: 200,
      body: {
        ...response.body,
        cookie: response.cookie.join(';'),
      },
      cookie: response.cookie,
    }
    return result
  } catch (error) {
    return {
      status: 200,
      body: {},
      cookie: response.cookie,
    }
  }
}
