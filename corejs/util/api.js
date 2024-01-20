const yunbei_today = require('../module/yunbei_today.js')
const yunbei_task_finish = require('../module/yunbei_task_finish.js')
const yunbei_tasks_todo = require('../module/yunbei_tasks_todo.js')
const yunbei_tasks = require('../module/yunbei_tasks.js')
const yunbei_sign = require('../module/yunbei_sign.js')
const yunbei_receipt = require('../module/yunbei_receipt.js')
const yunbei_rcmd_song_history = require('../module/yunbei_rcmd_song_history.js')
const yunbei_rcmd_song = require('../module/yunbei_rcmd_song.js')
const yunbei_info = require('../module/yunbei_info.js')
const yunbei_expense = require('../module/yunbei_expense.js')
const yunbei = require('../module/yunbei.js')
const weblog = require('../module/weblog.js')
const voice_upload = require('../module/voice_upload.js')
const voice_detail = require('../module/voice_detail.js')
const voice_batch_upload_check = require('../module/voice_batch_upload_check.js')
const voicelist_trans = require('../module/voicelist_trans.js')
const voicelist_search = require('../module/voicelist_search.js')
const voicelist_list_search = require('../module/voicelist_list_search.js')
const voicelist_list = require('../module/voicelist_list.js')
const voicelist_detail = require('../module/voicelist_detail.js')
const vip_timemachine = require('../module/vip_timemachine.js')
const vip_tasks = require('../module/vip_tasks.js')
const vip_info_v2 = require('../module/vip_info_v2.js')
const vip_info = require('../module/vip_info.js')
const vip_growthpoint_get = require('../module/vip_growthpoint_get.js')
const vip_growthpoint_details = require('../module/vip_growthpoint_details.js')
const vip_growthpoint = require('../module/vip_growthpoint.js')
const video_url = require('../module/video_url.js')
const video_timeline_recommend = require('../module/video_timeline_recommend.js')
const video_timeline_all = require('../module/video_timeline_all.js')
const video_sub = require('../module/video_sub.js')
const video_group_list = require('../module/video_group_list.js')
const video_group = require('../module/video_group.js')
const video_detail_info = require('../module/video_detail_info.js')
const video_detail = require('../module/video_detail.js')
const video_category_list = require('../module/video_category_list.js')
const verify_qrcodestatus = require('../module/verify_qrcodestatus.js')
const verify_getQr = require('../module/verify_getQr.js')
const user_update = require('../module/user_update.js')
const user_subcount = require('../module/user_subcount.js')
const user_replacephone = require('../module/user_replacephone.js')
const user_record = require('../module/user_record.js')
const user_playlist = require('../module/user_playlist.js')
const user_level = require('../module/user_level.js')
const user_follows = require('../module/user_follows.js')
const user_followeds = require('../module/user_followeds.js')
const user_event = require('../module/user_event.js')
const user_dj = require('../module/user_dj.js')
const user_detail = require('../module/user_detail.js')
const user_comment_history = require('../module/user_comment_history.js')
const user_cloud_detail = require('../module/user_cloud_detail.js')
const user_cloud_del = require('../module/user_cloud_del.js')
const user_cloud = require('../module/user_cloud.js')
const user_bindingcellphone = require('../module/user_bindingcellphone.js')
const user_binding = require('../module/user_binding.js')
const user_audio = require('../module/user_audio.js')
const user_account = require('../module/user_account.js')
const ugc_user_devote = require('../module/ugc_user_devote.js')
const ugc_song_get = require('../module/ugc_song_get.js')
const ugc_mv_get = require('../module/ugc_mv_get.js')
const ugc_detail = require('../module/ugc_detail.js')
const ugc_artist_search = require('../module/ugc_artist_search.js')
const ugc_artist_get = require('../module/ugc_artist_get.js')
const ugc_album_get = require('../module/ugc_album_get.js')
const top_song = require('../module/top_song.js')
const top_playlist_highquality = require('../module/top_playlist_highquality.js')
const top_playlist = require('../module/top_playlist.js')
const top_mv = require('../module/top_mv.js')
const top_list = require('../module/top_list.js')
const top_artists = require('../module/top_artists.js')
const top_album = require('../module/top_album.js')
const toplist_detail = require('../module/toplist_detail.js')
const toplist_artist = require('../module/toplist_artist.js')
const toplist = require('../module/toplist.js')
const topic_sublist = require('../module/topic_sublist.js')
const topic_detail_event_hot = require('../module/topic_detail_event_hot.js')
const topic_detail = require('../module/topic_detail.js')
const threshold_detail_get = require('../module/threshold_detail_get.js')
const summary_annual = require('../module/summary_annual.js')
const style_song = require('../module/style_song.js')
const style_preference = require('../module/style_preference.js')
const style_playlist = require('../module/style_playlist.js')
const style_list = require('../module/style_list.js')
const style_detail = require('../module/style_detail.js')
const style_artist = require('../module/style_artist.js')
const style_album = require('../module/style_album.js')
const starpick_comments_summary = require('../module/starpick_comments_summary.js')
const song_wiki_summary = require('../module/song_wiki_summary.js')
const song_url_v1 = require('../module/song_url_v1.js')
const song_url = require('../module/song_url.js')
const song_red_count = require('../module/song_red_count.js')
const song_purchased = require('../module/song_purchased.js')
const song_order_update = require('../module/song_order_update.js')
const song_music_detail = require('../module/song_music_detail.js')
const song_download_url = require('../module/song_download_url.js')
const song_detail = require('../module/song_detail.js')
const simi_user = require('../module/simi_user.js')
const simi_song = require('../module/simi_song.js')
const simi_playlist = require('../module/simi_playlist.js')
const simi_mv = require('../module/simi_mv.js')
const simi_artist = require('../module/simi_artist.js')
const sign_happy_info = require('../module/sign_happy_info.js')
const signin_progress = require('../module/signin_progress.js')
const sheet_preview = require('../module/sheet_preview.js')
const sheet_list = require('../module/sheet_list.js')
const share_resource = require('../module/share_resource.js')
const setting = require('../module/setting.js')
const send_text = require('../module/send_text.js')
const send_song = require('../module/send_song.js')
const send_playlist = require('../module/send_playlist.js')
const send_album = require('../module/send_album.js')
const search_suggest = require('../module/search_suggest.js')
const search_multimatch = require('../module/search_multimatch.js')
const search_match = require('../module/search_match.js')
const search_hot_detail = require('../module/search_hot_detail.js')
const search_hot = require('../module/search_hot.js')
const search_default = require('../module/search_default.js')
const search = require('../module/search.js')
const scrobble = require('../module/scrobble.js')
const resource_like = require('../module/resource_like.js')
const related_playlist = require('../module/related_playlist.js')
const related_allvideo = require('../module/related_allvideo.js')
const register_cellphone = require('../module/register_cellphone.js')
const register_anonimous = require('../module/register_anonimous.js')
const record_recent_voice = require('../module/record_recent_voice.js')
const record_recent_video = require('../module/record_recent_video.js')
const record_recent_song = require('../module/record_recent_song.js')
const record_recent_playlist = require('../module/record_recent_playlist.js')
const record_recent_dj = require('../module/record_recent_dj.js')
const record_recent_album = require('../module/record_recent_album.js')
const recommend_songs_dislike = require('../module/recommend_songs_dislike.js')
const recommend_songs = require('../module/recommend_songs.js')
const recommend_resource = require('../module/recommend_resource.js')
const rebind = require('../module/rebind.js')
const program_recommend = require('../module/program_recommend.js')
const pl_count = require('../module/pl_count.js')
const playmode_song_vector = require('../module/playmode_song_vector.js')
const playmode_intelligence_list = require('../module/playmode_intelligence_list.js')
const playlist_video_recent = require('../module/playlist_video_recent.js')
const playlist_update_playcount = require('../module/playlist_update_playcount.js')
const playlist_update = require('../module/playlist_update.js')
const playlist_track_delete = require('../module/playlist_track_delete.js')
const playlist_track_all = require('../module/playlist_track_all.js')
const playlist_track_add = require('../module/playlist_track_add.js')
const playlist_tracks = require('../module/playlist_tracks.js')
const playlist_tags_update = require('../module/playlist_tags_update.js')
const playlist_subscribers = require('../module/playlist_subscribers.js')
const playlist_subscribe = require('../module/playlist_subscribe.js')
const playlist_privacy = require('../module/playlist_privacy.js')
const playlist_order_update = require('../module/playlist_order_update.js')
const playlist_name_update = require('../module/playlist_name_update.js')
const playlist_mylike = require('../module/playlist_mylike.js')
const playlist_hot = require('../module/playlist_hot.js')
const playlist_highquality_tags = require('../module/playlist_highquality_tags.js')
const playlist_detail_dynamic = require('../module/playlist_detail_dynamic.js')
const playlist_detail = require('../module/playlist_detail.js')
const playlist_desc_update = require('../module/playlist_desc_update.js')
const playlist_delete = require('../module/playlist_delete.js')
const playlist_create = require('../module/playlist_create.js')
const playlist_cover_update = require('../module/playlist_cover_update.js')
const playlist_catlist = require('../module/playlist_catlist.js')
const personal_fm = require('../module/personal_fm.js')
const personalized_privatecontent_list = require('../module/personalized_privatecontent_list.js')
const personalized_privatecontent = require('../module/personalized_privatecontent.js')
const personalized_newsong = require('../module/personalized_newsong.js')
const personalized_mv = require('../module/personalized_mv.js')
const personalized_djprogram = require('../module/personalized_djprogram.js')
const personalized = require('../module/personalized.js')
const nickname_check = require('../module/nickname_check.js')
const mv_url = require('../module/mv_url.js')
const mv_sublist = require('../module/mv_sublist.js')
const mv_sub = require('../module/mv_sub.js')
const mv_first = require('../module/mv_first.js')
const mv_exclusive_rcmd = require('../module/mv_exclusive_rcmd.js')
const mv_detail_info = require('../module/mv_detail_info.js')
const mv_detail = require('../module/mv_detail.js')
const mv_all = require('../module/mv_all.js')
const music_first_listen_info = require('../module/music_first_listen_info.js')
const musician_tasks_new = require('../module/musician_tasks_new.js')
const musician_tasks = require('../module/musician_tasks.js')
const musician_sign = require('../module/musician_sign.js')
const musician_play_trend = require('../module/musician_play_trend.js')
const musician_data_overview = require('../module/musician_data_overview.js')
const musician_cloudbean_obtain = require('../module/musician_cloudbean_obtain.js')
const musician_cloudbean = require('../module/musician_cloudbean.js')
const msg_recentcontact = require('../module/msg_recentcontact.js')
const msg_private_history = require('../module/msg_private_history.js')
const msg_private = require('../module/msg_private.js')
const msg_notices = require('../module/msg_notices.js')
const msg_forwards = require('../module/msg_forwards.js')
const msg_comments = require('../module/msg_comments.js')
const mlog_url = require('../module/mlog_url.js')
const mlog_to_video = require('../module/mlog_to_video.js')
const mlog_music_rcmd = require('../module/mlog_music_rcmd.js')
const lyric_new = require('../module/lyric_new.js')
const lyric = require('../module/lyric.js')
const logout = require('../module/logout.js')
const login_status = require('../module/login_status.js')
const login_refresh = require('../module/login_refresh.js')
const login_qr_key = require('../module/login_qr_key.js')
const login_qr_check = require('../module/login_qr_check.js')
const login_cellphone = require('../module/login_cellphone.js')
const login = require('../module/login.js')
const listentogether_sync_playlist_get = require('../module/listentogether_sync_playlist_get.js')
const listentogether_sync_list_command = require('../module/listentogether_sync_list_command.js')
const listentogether_status = require('../module/listentogether_status.js')
const listentogether_room_create = require('../module/listentogether_room_create.js')
const listentogether_room_check = require('../module/listentogether_room_check.js')
const listentogether_play_command = require('../module/listentogether_play_command.js')
const listentogether_heatbeat = require('../module/listentogether_heatbeat.js')
const listentogether_end = require('../module/listentogether_end.js')
const likelist = require('../module/likelist.js')
const like = require('../module/like.js')
const inner_version = require('../module/inner_version.js')
const hug_comment = require('../module/hug_comment.js')
const hot_topic = require('../module/hot_topic.js')
const homepage_dragon_ball = require('../module/homepage_dragon_ball.js')
const homepage_block_page = require('../module/homepage_block_page.js')
const history_recommend_songs_detail = require('../module/history_recommend_songs_detail.js')
const history_recommend_songs = require('../module/history_recommend_songs.js')
const get_userids = require('../module/get_userids.js')
const get_upload_voice = require('../module/get_upload_voice.js')
const get_upload_song = require('../module/get_upload_song.js')
const get_upload_image = require('../module/get_upload_image.js')
const get_upload_cropped_image = require('../module/get_upload_cropped_image.js')
const follow = require('../module/follow.js')
const fm_trash = require('../module/fm_trash.js')
const fanscenter_trend_list = require('../module/fanscenter_trend_list.js')
const fanscenter_overview_get = require('../module/fanscenter_overview_get.js')
const fanscenter_basicinfo_province_get = require('../module/fanscenter_basicinfo_province_get.js')
const fanscenter_basicinfo_gender_get = require('../module/fanscenter_basicinfo_gender_get.js')
const fanscenter_basicinfo_age_get = require('../module/fanscenter_basicinfo_age_get.js')
const event_forward = require('../module/event_forward.js')
const event_del = require('../module/event_del.js')
const event = require('../module/event.js')
const dj_toplist_popular = require('../module/dj_toplist_popular.js')
const dj_toplist_pay = require('../module/dj_toplist_pay.js')
const dj_toplist_newcomer = require('../module/dj_toplist_newcomer.js')
const dj_toplist_hours = require('../module/dj_toplist_hours.js')
const dj_toplist = require('../module/dj_toplist.js')
const dj_today_perfered = require('../module/dj_today_perfered.js')
const dj_subscriber = require('../module/dj_subscriber.js')
const dj_sublist = require('../module/dj_sublist.js')
const dj_sub = require('../module/dj_sub.js')
const dj_recommend_type = require('../module/dj_recommend_type.js')
const dj_recommend = require('../module/dj_recommend.js')
const dj_radio_hot = require('../module/dj_radio_hot.js')
const dj_program_toplist_hours = require('../module/dj_program_toplist_hours.js')
const dj_program_toplist = require('../module/dj_program_toplist.js')
const dj_program_detail = require('../module/dj_program_detail.js')
const dj_program = require('../module/dj_program.js')
const dj_personalize_recommend = require('../module/dj_personalize_recommend.js')
const dj_paygift = require('../module/dj_paygift.js')
const dj_hot = require('../module/dj_hot.js')
const dj_detail = require('../module/dj_detail.js')
const dj_catelist = require('../module/dj_catelist.js')
const dj_category_recommend = require('../module/dj_category_recommend.js')
const dj_category_excludehot = require('../module/dj_category_excludehot.js')
const dj_banner = require('../module/dj_banner.js')
const digitalAlbum_sales = require('../module/digitalAlbum_sales.js')
const digitalAlbum_purchased = require('../module/digitalAlbum_purchased.js')
const digitalAlbum_ordering = require('../module/digitalAlbum_ordering.js')
const digitalAlbum_detail = require('../module/digitalAlbum_detail.js')
const daily_signin = require('../module/daily_signin.js')
const creator_authinfo_get = require('../module/creator_authinfo_get.js')
const countries_code_list = require('../module/countries_code_list.js')
const comment_video = require('../module/comment_video.js')
const comment_playlist = require('../module/comment_playlist.js')
const comment_new = require('../module/comment_new.js')
const comment_mv = require('../module/comment_mv.js')
const comment_music = require('../module/comment_music.js')
const comment_like = require('../module/comment_like.js')
const comment_hug_list = require('../module/comment_hug_list.js')
const comment_hot = require('../module/comment_hot.js')
const comment_floor = require('../module/comment_floor.js')
const comment_event = require('../module/comment_event.js')
const comment_dj = require('../module/comment_dj.js')
const comment_album = require('../module/comment_album.js')
const comment = require('../module/comment.js')
const cloud_upload_info_v2 = require('../module/cloud_upload_info_v2.js')
const cloud_upload_check = require('../module/cloud_upload_check.js')
const cloud_match = require('../module/cloud_match.js')
const cloudsearch = require('../module/cloudsearch.js')
const cloud = require('../module/cloud.js')
const check_music = require('../module/check_music.js')
const cellphone_existence_check = require('../module/cellphone_existence_check.js')
const captcha_verify = require('../module/captcha_verify.js')
const captcha_sent = require('../module/captcha_sent.js')
const calendar = require('../module/calendar.js')
const batch = require('../module/batch.js')
const banner = require('../module/banner.js')
const avatar_upload = require('../module/avatar_upload.js')
const audio_match = require('../module/audio_match.js')
const artist_video = require('../module/artist_video.js')
const artist_top_song = require('../module/artist_top_song.js')
const artist_sublist = require('../module/artist_sublist.js')
const artist_sub = require('../module/artist_sub.js')
const artist_songs = require('../module/artist_songs.js')
const artist_new_song = require('../module/artist_new_song.js')
const artist_new_mv = require('../module/artist_new_mv.js')
const artist_mv = require('../module/artist_mv.js')
const artist_list = require('../module/artist_list.js')
const artist_follow_count = require('../module/artist_follow_count.js')
const artist_fans = require('../module/artist_fans.js')
const artist_detail = require('../module/artist_detail.js')
const artist_desc = require('../module/artist_desc.js')
const artist_album = require('../module/artist_album.js')
const artists = require('../module/artists.js')
const album_sublist = require('../module/album_sublist.js')
const album_sub = require('../module/album_sub.js')
const album_songsaleboard = require('../module/album_songsaleboard.js')
const album_newest = require('../module/album_newest.js')
const album_new = require('../module/album_new.js')
const album_list_style = require('../module/album_list_style.js')
const album_list = require('../module/album_list.js')
const album_detail_dynamic = require('../module/album_detail_dynamic.js')
const album_detail = require('../module/album_detail.js')
const album = require('../module/album.js')
const aidj_content_rcmd = require('../module/aidj_content_rcmd.js')
const activate_init_profile = require('../module/activate_init_profile.js')
module.exports = {
  yunbei_today: yunbei_today,
  yunbei_task_finish: yunbei_task_finish,
  yunbei_tasks_todo: yunbei_tasks_todo,
  yunbei_tasks: yunbei_tasks,
  yunbei_sign: yunbei_sign,
  yunbei_receipt: yunbei_receipt,
  yunbei_rcmd_song_history: yunbei_rcmd_song_history,
  yunbei_rcmd_song: yunbei_rcmd_song,
  yunbei_info: yunbei_info,
  yunbei_expense: yunbei_expense,
  yunbei: yunbei,
  weblog: weblog,
  voice_upload: voice_upload,
  voice_detail: voice_detail,
  voice_batch_upload_check: voice_batch_upload_check,
  voicelist_trans: voicelist_trans,
  voicelist_search: voicelist_search,
  voicelist_list_search: voicelist_list_search,
  voicelist_list: voicelist_list,
  voicelist_detail: voicelist_detail,
  vip_timemachine: vip_timemachine,
  vip_tasks: vip_tasks,
  vip_info_v2: vip_info_v2,
  vip_info: vip_info,
  vip_growthpoint_get: vip_growthpoint_get,
  vip_growthpoint_details: vip_growthpoint_details,
  vip_growthpoint: vip_growthpoint,
  video_url: video_url,
  video_timeline_recommend: video_timeline_recommend,
  video_timeline_all: video_timeline_all,
  video_sub: video_sub,
  video_group_list: video_group_list,
  video_group: video_group,
  video_detail_info: video_detail_info,
  video_detail: video_detail,
  video_category_list: video_category_list,
  verify_qrcodestatus: verify_qrcodestatus,
  verify_getQr: verify_getQr,
  user_update: user_update,
  user_subcount: user_subcount,
  user_replacephone: user_replacephone,
  user_record: user_record,
  user_playlist: user_playlist,
  user_level: user_level,
  user_follows: user_follows,
  user_followeds: user_followeds,
  user_event: user_event,
  user_dj: user_dj,
  user_detail: user_detail,
  user_comment_history: user_comment_history,
  user_cloud_detail: user_cloud_detail,
  user_cloud_del: user_cloud_del,
  user_cloud: user_cloud,
  user_bindingcellphone: user_bindingcellphone,
  user_binding: user_binding,
  user_audio: user_audio,
  user_account: user_account,
  ugc_user_devote: ugc_user_devote,
  ugc_song_get: ugc_song_get,
  ugc_mv_get: ugc_mv_get,
  ugc_detail: ugc_detail,
  ugc_artist_search: ugc_artist_search,
  ugc_artist_get: ugc_artist_get,
  ugc_album_get: ugc_album_get,
  top_song: top_song,
  top_playlist_highquality: top_playlist_highquality,
  top_playlist: top_playlist,
  top_mv: top_mv,
  top_list: top_list,
  top_artists: top_artists,
  top_album: top_album,
  toplist_detail: toplist_detail,
  toplist_artist: toplist_artist,
  toplist: toplist,
  topic_sublist: topic_sublist,
  topic_detail_event_hot: topic_detail_event_hot,
  topic_detail: topic_detail,
  threshold_detail_get: threshold_detail_get,
  summary_annual: summary_annual,
  style_song: style_song,
  style_preference: style_preference,
  style_playlist: style_playlist,
  style_list: style_list,
  style_detail: style_detail,
  style_artist: style_artist,
  style_album: style_album,
  starpick_comments_summary: starpick_comments_summary,
  song_wiki_summary: song_wiki_summary,
  song_url_v1: song_url_v1,
  song_url: song_url,
  song_red_count: song_red_count,
  song_purchased: song_purchased,
  song_order_update: song_order_update,
  song_music_detail: song_music_detail,
  song_download_url: song_download_url,
  song_detail: song_detail,
  simi_user: simi_user,
  simi_song: simi_song,
  simi_playlist: simi_playlist,
  simi_mv: simi_mv,
  simi_artist: simi_artist,
  sign_happy_info: sign_happy_info,
  signin_progress: signin_progress,
  sheet_preview: sheet_preview,
  sheet_list: sheet_list,
  share_resource: share_resource,
  setting: setting,
  send_text: send_text,
  send_song: send_song,
  send_playlist: send_playlist,
  send_album: send_album,
  search_suggest: search_suggest,
  search_multimatch: search_multimatch,
  search_match: search_match,
  search_hot_detail: search_hot_detail,
  search_hot: search_hot,
  search_default: search_default,
  search: search,
  scrobble: scrobble,
  resource_like: resource_like,
  related_playlist: related_playlist,
  related_allvideo: related_allvideo,
  register_cellphone: register_cellphone,
  register_anonimous: register_anonimous,
  record_recent_voice: record_recent_voice,
  record_recent_video: record_recent_video,
  record_recent_song: record_recent_song,
  record_recent_playlist: record_recent_playlist,
  record_recent_dj: record_recent_dj,
  record_recent_album: record_recent_album,
  recommend_songs_dislike: recommend_songs_dislike,
  recommend_songs: recommend_songs,
  recommend_resource: recommend_resource,
  rebind: rebind,
  program_recommend: program_recommend,
  pl_count: pl_count,
  playmode_song_vector: playmode_song_vector,
  playmode_intelligence_list: playmode_intelligence_list,
  playlist_video_recent: playlist_video_recent,
  playlist_update_playcount: playlist_update_playcount,
  playlist_update: playlist_update,
  playlist_track_delete: playlist_track_delete,
  playlist_track_all: playlist_track_all,
  playlist_track_add: playlist_track_add,
  playlist_tracks: playlist_tracks,
  playlist_tags_update: playlist_tags_update,
  playlist_subscribers: playlist_subscribers,
  playlist_subscribe: playlist_subscribe,
  playlist_privacy: playlist_privacy,
  playlist_order_update: playlist_order_update,
  playlist_name_update: playlist_name_update,
  playlist_mylike: playlist_mylike,
  playlist_hot: playlist_hot,
  playlist_highquality_tags: playlist_highquality_tags,
  playlist_detail_dynamic: playlist_detail_dynamic,
  playlist_detail: playlist_detail,
  playlist_desc_update: playlist_desc_update,
  playlist_delete: playlist_delete,
  playlist_create: playlist_create,
  playlist_cover_update: playlist_cover_update,
  playlist_catlist: playlist_catlist,
  personal_fm: personal_fm,
  personalized_privatecontent_list: personalized_privatecontent_list,
  personalized_privatecontent: personalized_privatecontent,
  personalized_newsong: personalized_newsong,
  personalized_mv: personalized_mv,
  personalized_djprogram: personalized_djprogram,
  personalized: personalized,
  nickname_check: nickname_check,
  mv_url: mv_url,
  mv_sublist: mv_sublist,
  mv_sub: mv_sub,
  mv_first: mv_first,
  mv_exclusive_rcmd: mv_exclusive_rcmd,
  mv_detail_info: mv_detail_info,
  mv_detail: mv_detail,
  mv_all: mv_all,
  music_first_listen_info: music_first_listen_info,
  musician_tasks_new: musician_tasks_new,
  musician_tasks: musician_tasks,
  musician_sign: musician_sign,
  musician_play_trend: musician_play_trend,
  musician_data_overview: musician_data_overview,
  musician_cloudbean_obtain: musician_cloudbean_obtain,
  musician_cloudbean: musician_cloudbean,
  msg_recentcontact: msg_recentcontact,
  msg_private_history: msg_private_history,
  msg_private: msg_private,
  msg_notices: msg_notices,
  msg_forwards: msg_forwards,
  msg_comments: msg_comments,
  mlog_url: mlog_url,
  mlog_to_video: mlog_to_video,
  mlog_music_rcmd: mlog_music_rcmd,
  lyric_new: lyric_new,
  lyric: lyric,
  logout: logout,
  login_status: login_status,
  login_refresh: login_refresh,
  login_qr_key: login_qr_key,
  login_qr_check: login_qr_check,
  login_cellphone: login_cellphone,
  login: login,
  listentogether_sync_playlist_get: listentogether_sync_playlist_get,
  listentogether_sync_list_command: listentogether_sync_list_command,
  listentogether_status: listentogether_status,
  listentogether_room_create: listentogether_room_create,
  listentogether_room_check: listentogether_room_check,
  listentogether_play_command: listentogether_play_command,
  listentogether_heatbeat: listentogether_heatbeat,
  listentogether_end: listentogether_end,
  likelist: likelist,
  like: like,
  inner_version: inner_version,
  hug_comment: hug_comment,
  hot_topic: hot_topic,
  homepage_dragon_ball: homepage_dragon_ball,
  homepage_block_page: homepage_block_page,
  history_recommend_songs_detail: history_recommend_songs_detail,
  history_recommend_songs: history_recommend_songs,
  get_userids: get_userids,
  get_upload_voice: get_upload_voice,
  get_upload_song: get_upload_song,
  get_upload_image: get_upload_image,
  get_upload_cropped_image: get_upload_cropped_image,
  follow: follow,
  fm_trash: fm_trash,
  fanscenter_trend_list: fanscenter_trend_list,
  fanscenter_overview_get: fanscenter_overview_get,
  fanscenter_basicinfo_province_get: fanscenter_basicinfo_province_get,
  fanscenter_basicinfo_gender_get: fanscenter_basicinfo_gender_get,
  fanscenter_basicinfo_age_get: fanscenter_basicinfo_age_get,
  event_forward: event_forward,
  event_del: event_del,
  event: event,
  dj_toplist_popular: dj_toplist_popular,
  dj_toplist_pay: dj_toplist_pay,
  dj_toplist_newcomer: dj_toplist_newcomer,
  dj_toplist_hours: dj_toplist_hours,
  dj_toplist: dj_toplist,
  dj_today_perfered: dj_today_perfered,
  dj_subscriber: dj_subscriber,
  dj_sublist: dj_sublist,
  dj_sub: dj_sub,
  dj_recommend_type: dj_recommend_type,
  dj_recommend: dj_recommend,
  dj_radio_hot: dj_radio_hot,
  dj_program_toplist_hours: dj_program_toplist_hours,
  dj_program_toplist: dj_program_toplist,
  dj_program_detail: dj_program_detail,
  dj_program: dj_program,
  dj_personalize_recommend: dj_personalize_recommend,
  dj_paygift: dj_paygift,
  dj_hot: dj_hot,
  dj_detail: dj_detail,
  dj_catelist: dj_catelist,
  dj_category_recommend: dj_category_recommend,
  dj_category_excludehot: dj_category_excludehot,
  dj_banner: dj_banner,
  digitalAlbum_sales: digitalAlbum_sales,
  digitalAlbum_purchased: digitalAlbum_purchased,
  digitalAlbum_ordering: digitalAlbum_ordering,
  digitalAlbum_detail: digitalAlbum_detail,
  daily_signin: daily_signin,
  creator_authinfo_get: creator_authinfo_get,
  countries_code_list: countries_code_list,
  comment_video: comment_video,
  comment_playlist: comment_playlist,
  comment_new: comment_new,
  comment_mv: comment_mv,
  comment_music: comment_music,
  comment_like: comment_like,
  comment_hug_list: comment_hug_list,
  comment_hot: comment_hot,
  comment_floor: comment_floor,
  comment_event: comment_event,
  comment_dj: comment_dj,
  comment_album: comment_album,
  comment: comment,
  cloud_upload_info_v2: cloud_upload_info_v2,
  cloud_upload_check: cloud_upload_check,
  cloud_match: cloud_match,
  cloudsearch: cloudsearch,
  cloud: cloud,
  check_music: check_music,
  cellphone_existence_check: cellphone_existence_check,
  captcha_verify: captcha_verify,
  captcha_sent: captcha_sent,
  calendar: calendar,
  batch: batch,
  banner: banner,
  avatar_upload: avatar_upload,
  audio_match: audio_match,
  artist_video: artist_video,
  artist_top_song: artist_top_song,
  artist_sublist: artist_sublist,
  artist_sub: artist_sub,
  artist_songs: artist_songs,
  artist_new_song: artist_new_song,
  artist_new_mv: artist_new_mv,
  artist_mv: artist_mv,
  artist_list: artist_list,
  artist_follow_count: artist_follow_count,
  artist_fans: artist_fans,
  artist_detail: artist_detail,
  artist_desc: artist_desc,
  artist_album: artist_album,
  artists: artists,
  album_sublist: album_sublist,
  album_sub: album_sub,
  album_songsaleboard: album_songsaleboard,
  album_newest: album_newest,
  album_new: album_new,
  album_list_style: album_list_style,
  album_list: album_list,
  album_detail_dynamic: album_detail_dynamic,
  album_detail: album_detail,
  album: album,
  aidj_content_rcmd: aidj_content_rcmd,
  activate_init_profile: activate_init_profile,
}
