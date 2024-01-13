module.exports = (response) => {
  if (response.body.code === 502) {
    return {
      status: 200,
      body: {
        msg: '账号或密码错误',
        code: 502,
        message: '账号或密码错误',
      },
    }
  }
  if (response.body.code === 200) {
    response = {
      status: 200,
      body: {
        ...JSON.parse(
          JSON.stringify(response.body).replace(
            /avatarImgId_str/g,
            'avatarImgIdStr',
          ),
        ),
        cookie: response.cookie.join(';'),
      },
      cookie: response.cookie,
    }
  }
  return response
}
