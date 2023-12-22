const user_detail = require('../afterRequest/user_detail.js')
const top_playlist = require('../afterRequest/top_playlist.js')
const related_playlist = require('../afterRequest/related_playlist.js')
const login_status = require('../afterRequest/login_status.js')
const login_cellphone = require('../afterRequest/login_cellphone.js')
const check_music = require('../afterRequest/check_music.js')
module.exports = {
  user_detail: user_detail,
  top_playlist: top_playlist,
  related_playlist: related_playlist,
  login_status: login_status,
  login_cellphone: login_cellphone,
  check_music: check_music,
}
