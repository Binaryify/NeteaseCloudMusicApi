//video
module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const videoId = req.query.id
  const data = {}

  createWebAPIRequest(
    'music.163.com',
    `/api/cloudvideo/playurl?ids=['${videoId}']&resolution=720`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
}
