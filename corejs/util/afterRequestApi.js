const user_detail = require('../afterRequest/user_detail.js')
const top_playlist = require('../afterRequest/top_playlist.js')
const song_url = require('../afterRequest/song_url.js')
const related_playlist = require('../afterRequest/related_playlist.js')
const register_anonimous = require('../afterRequest/register_anonimous.js')
const login_status = require('../afterRequest/login_status.js')
const login_refresh = require('../afterRequest/login_refresh.js')
const login_qr_key = require('../afterRequest/login_qr_key.js')
const login_qr_check = require('../afterRequest/login_qr_check.js')
const login_cellphone = require('../afterRequest/login_cellphone.js')
const login = require('../afterRequest/login.js')
const check_music = require('../afterRequest/check_music.js')
module.exports = {
  user_detail: user_detail,
  top_playlist: top_playlist,
  song_url: song_url,
  related_playlist: related_playlist,
  register_anonimous: register_anonimous,
  login_status: login_status,
  login_refresh: login_refresh,
  login_qr_key: login_qr_key,
  login_qr_check: login_qr_check,
  login_cellphone: login_cellphone,
  login: login,
  check_music: check_music,
}
