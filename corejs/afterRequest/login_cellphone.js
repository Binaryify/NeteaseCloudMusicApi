module.exports = (response) => {
  if (response.body.code === 200) {
    let cookie = response.cookie
    if (Array.isArray(cookie)) {
      cookie = cookie.join(';')
    }

    response = {
      status: 200,
      body: {
        ...JSON.parse(
          JSON.stringify(response.body).replace(
            /avatarImgId_str/g,
            'avatarImgIdStr',
          ),
        ),
        cookie: cookie,
      },
      cookie: cookie,
    }
  }
  return response
}
