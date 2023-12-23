module.exports = (response) => {
  response = JSON.parse(response)

  response = JSON.stringify(response).replace(
    /avatarImgId_str/g,
    'avatarImgIdStr',
  )
  return JSON.parse(response)
}
