declare module 'NeteaseCloudMusicApi' {
  export interface RequestBaseConfig {
    cookie?: string
    realIP?: string // IPv4/IPv6 filled in X-Real-IP
    proxy?: string // HTTP proxy
  }

  export interface ImageUploadConfig {
    imgFile: {
      name: string
      data: string | Buffer
    }
    imgSize?: number
    imgX?: number
    imgY?: number
  }

  export interface APIBaseResponse {
    code: number
    cookie: string
    [index: string]: unknown
  }

  export interface Response {
    status: number // The Http Response Code
    body: APIBaseResponse // API Response body
    cookie: string[]
  }

  export enum SubAction {
    sub = 1,
    ubsub = 0,
  }

  export function activate_init_profile(
    params: { nickname: string } & RequestBaseConfig,
  ): Promise<Response>

  export function album(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function album_detail(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function album_detail_dynamic(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export enum AlbumListArea {
    all = 'ALL',
    zh = 'ZH',
    ea = 'EA',
    kr = 'KR',
    jp = 'JP',
  }

  export enum ListOrder {
    hot = 'hot',
    new = 'new',
  }

  export function album_list(
    params: {
      limit?: string | number // 默认 30
      offset?: string | number // 默认 0
      area?: AlbumListArea // 默认 ALL
      type: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum AlbumListStyleArea {
    zh = 'Z_H',
    ea = 'E_A',
    kr = 'KR',
    jp = 'JP',
  }

  export function album_list_style(
    params: {
      limit?: string | number // 默认 10
      offset?: string | number // 默认 0
      area?: AlbumListStyleArea // 默认 ALL
    } & RequestBaseConfig,
  ): Promise<Response>

  export function album_new(
    params: {
      limit?: string | number // 默认 30
      offset?: string | number // 默认 0
      area?: AlbumListArea // 默认 ALL
    } & RequestBaseConfig,
  ): Promise<Response>

  export function album_newest(params: RequestBaseConfig): Promise<Response>

  export enum AlbumSongsaleboardType {
    daily = 'daily',
    week = 'week',
    year = 'year',
    total = 'total',
  }

  export enum AlbumSongsaleboardAlbumType {
    album = 0,
    single = 1,
  }

  export function album_songsaleboard(
    params: {
      albumType?: AlbumSongsaleboardAlbumType // 0 为数字专辑,1 为数字单曲
      type?: AlbumSongsaleboardType
      year?: string | number // 年份，默认本年。 type 为 year 时有效
    } & RequestBaseConfig,
  ): Promise<Response>

  export function album_sub(
    params: {
      id: string | number
      t: SubAction
    } & RequestBaseConfig,
  ): Promise<Response>

  export function album_sublist(
    params: {
      limit: string | number // 默认： 25
      offset: string | number // 默认： 0
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_album(
    params: {
      id: string | number
      limit?: string | number // 默认 30
      offset?: string | number // 默认 0
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_desc(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export enum ArtistListArea {
    zh = 'Z_H',
    ea = 'E_A',
    kr = 'KR',
    jp = 'JP',
  }

  export enum ArtistArea {
    all = '-1',
    zh = '7',
    ea = '96',
    ja = '8',
    kr = '16',
    other = '0',
  }

  export enum ArtistType {
    male = '1',
    female = '2',
    band = '3',
  }

  export function artist_list(
    params: {
      area: ArtistArea
      initial?:
        | 'a'
        | 'b'
        | 'c'
        | 'd'
        | 'e'
        | 'f'
        | 'g'
        | 'h'
        | 'i'
        | 'j'
        | 'k'
        | 'l'
        | 'm'
        | 'n'
        | 'o'
        | 'p'
        | 'q'
        | 'r'
        | 's'
        | 't'
        | 'u'
        | 'v'
        | 'w'
        | 'x'
        | 'y'
        | 'z'
        | 'A'
        | 'B'
        | 'C'
        | 'D'
        | 'E'
        | 'F'
        | 'G'
        | 'H'
        | 'I'
        | 'J'
        | 'K'
        | 'L'
        | 'M'
        | 'N'
        | 'O'
        | 'P'
        | 'Q'
        | 'R'
        | 'S'
        | 'T'
        | 'U'
        | 'V'
        | 'W'
        | 'X'
        | 'Y'
        | 'Z'
      offset?: string | number
      limit?: string | number
      type?: ArtistType
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_mv(
    params: {
      id: string | number
      limit: string | number
      offset: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum ArtistSongsOrder {
    hot = 'hot',
    time = 'time',
  }

  export function artist_songs(
    params: {
      id: string | number
      order?: ArtistSongsOrder
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_sub(
    params: { id: string | number; t: SubAction } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_sublist(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artist_top_song(
    params: {
      id: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function artists(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function avatar_upload(
    params: ImageUploadConfig & RequestBaseConfig,
  ): Promise<Response>

  export enum BannerType {
    pc = 0,
    android = 1,
    iphone = 2,
    ipad = 3,
  }

  export function banner(
    params: { type?: BannerType } & RequestBaseConfig,
  ): Promise<Response>

  export function batch(
    params: { [index: string]: unknown } & RequestBaseConfig,
  ): Promise<Response>

  export function captcha_sent(
    params: { cellphone: string; ctcode?: string } & RequestBaseConfig,
  ): Promise<Response>

  export function captcha_verify(
    params: {
      ctcode?: string
      cellphone: string
      captcha: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function cellphone_existence_check(
    params: { cellphone: string; countrycode: string } & RequestBaseConfig,
  ): Promise<Response>

  export function check_music(
    params: { id: string | number; br: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export enum SearchType {
    single = 1,
    album = 10,
    artist = 100,
    playlist = 1000,
    user = 1002,
    mv = 1004,
    lyric = 1006,
    dj = 1009,
    video = 1014,
    complex = 1018,
  }

  export function cloudsearch(
    params: {
      keywords: string
      type?: SearchType
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum CommentType {
    song = 0,
    mv = 1,
    playlist = 2,
    album = 3,
    dj = 4,
    video = 5,
    event = 6,
  }

  export enum CommentAction {
    add = 1,
    delete = 0,
    reply = 2,
  }

  export function comment(
    params: {
      id: string | number
      type: CommentType
      t: CommentAction.delete
      commentId: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment(
    params: {
      type: CommentType.event
      t: CommentAction.delete
      threadId: string
      commentId: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment(
    params: {
      id: string | number
      type: CommentType
      t: CommentAction.add
      content: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment(
    params: {
      type: CommentType.event
      t: CommentAction.add
      threadId: string
      content: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment(
    params: {
      id: string | number
      type: CommentType
      t: CommentAction.reply
      content: string | number
      commentId: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment(
    params: {
      type: CommentType.event
      t: CommentAction.reply
      threadId: string
      content: string | number
      commentId: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_album(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_dj(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_event(
    params: {
      threadId: string
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_floor(
    params: {
      id: string | number
      parentCommentId: string | number
      type: CommentType
      limit?: string | number
      time?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_hot(
    params: {
      id: string | number
      type: CommentType
      offset?: string | number
      limit?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_hotwall_list(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function comment_like(
    params: {
      id: string | number
      type: CommentType
      t: SubAction
      cid: string | number
      threadId?: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_music(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_mv(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_playlist(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function comment_video(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
      before?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function countries_code_list(
    params: RequestBaseConfig,
  ): Promise<Response>

  export enum DailySigninType {
    android = 0,
    pc = 1,
  }

  export function daily_signin(
    params: { type?: DailySigninType } & RequestBaseConfig,
  ): Promise<Response>

  export function digitalAlbum_ordering(
    params: {
      payment: string
      id: string | number
      quantity: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function digitalAlbum_purchased(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_banner(params: RequestBaseConfig): Promise<Response>

  export function dj_category_excludehot(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function dj_category_recommend(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function dj_catelist(params: RequestBaseConfig): Promise<Response>

  export function dj_detail(
    params: { rid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_hot(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_paygift(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_personalize_recommend(
    params: { limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_program(
    params: {
      rid: string | number
      limit?: string | number
      offset?: string | number
      asc: 'true' | 1 | 'false' | 0
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_program_detail(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_program_toplist(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_program_toplist_hours(
    params: { limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_radio_hot(
    params: {
      cateId: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_recommend(params: RequestBaseConfig): Promise<Response>

  /*
    有声书 10001
    知识技能 453050
    商业财经 453051
    人文历史 11
    外语世界 13
    亲子宝贝 14
    创作|翻唱 2001
    音乐故事 2
    3D|电子 10002
    相声曲艺 8
    情感调频 3
    美文读物 6
    脱口秀 5
    广播剧 7
    二次元 3001
    明星做主播 1
    娱乐|影视 4
    科技科学 453052
    校园|教育 4001
    旅途|城市 12
*/

  export function dj_recommend_type(
    params: { type: number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_sub(
    params: { t: SubAction; rid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_sublist(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_today_perfered(
    params: { page?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_toplist(
    params: {
      type?: ListOrder
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_toplist_hours(
    params: {
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_toplist_newcomer(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_toplist_pay(
    params: { limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function dj_toplist_popular(
    params: { limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function event(
    params: { pagesize?: number; lasttime?: number } & RequestBaseConfig,
  ): Promise<Response>

  export function event_del(
    params: { evId: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function event_forward(
    params: {
      forwords: string
      evId: string | number
      uid: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function fm_trash(
    params: { id: string | number; time?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function follow(
    params: { t: SubAction; id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function history_recommend_songs(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function history_recommend_songs_detail(
    params: { date?: string } & RequestBaseConfig,
  ): Promise<Response>

  export function homepage_block_page(
    params: { refresh?: 'true' | 'false' | boolean } & RequestBaseConfig,
  ): Promise<Response>

  export function homepage_dragon_ball(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function hot_topic(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function like(
    params: {
      like?: 'true' | 'false' | boolean
      id: string | number
      alg?: string
      time?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function likelist(
    params: { uid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function login(
    params: { email: string; password: string } & RequestBaseConfig,
  ): Promise<Response>

  export function login(
    params: { email: string; md5_password: string } & RequestBaseConfig,
  ): Promise<Response>

  export function login_cellphone(
    params: {
      phone: string
      countrycode?: string
      password: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function login_cellphone(
    params: {
      phone: string
      countrycode?: string
      md5_password: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function login_refresh(params: RequestBaseConfig): Promise<Response>

  export function login_status(params: RequestBaseConfig): Promise<Response>

  export function logout(params: RequestBaseConfig): Promise<Response>

  export function lyric(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function msg_comments(
    params: {
      uid: string | number
      before?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function msg_forwards(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function msg_notices(
    params: {
      limit?: string | number
      lasttime?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function msg_private(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function msg_private_history(
    params: {
      before?: string | number
      limit?: string | number
      uid: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum MvArea {
    all = '全部',
    zh = '内地',
    hk = '港台',
    ea = '欧美',
    kr = '韩国',
    jp = '日本',
  }

  export enum MvType {
    all = '全部',
    offical = '官方版',
    raw = '原生',
    live = '现场版',
    netease = '网易出品',
  }

  export enum MvOrder {
    trend = '上升最快',
    hot = '最热',
    new = '最新',
  }

  export function mv_all(
    params: {
      area?: MvArea
      type?: MvType
      order?: MvOrder
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_detail(
    params: { mvid?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_detail_info(
    params: { mvid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_exclusive_rcmd(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_first(
    params: { area?: MvArea; limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_sub(
    params: { t: SubAction; mvid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_sublist(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function mv_url(
    params: { id?: string | number; r?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function personal_fm(params: RequestBaseConfig): Promise<Response>

  export function personalized(
    params: { limit?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function personalized_djprogram(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function personalized_mv(params: RequestBaseConfig): Promise<Response>

  export function personalized_newsong(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function personalized_privatecontent(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function personalized_privatecontent_list(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_catlist(params: RequestBaseConfig): Promise<Response>

  export function playlist_cover_update(
    params: { id: string } & ImageUploadConfig & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_create(
    params: { name: string; privacy: 0 | 10 } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_delete(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_desc_update(
    params: { id: string | number; desc: string } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_detail(
    params: { id: string | number; s?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_highquality_tags(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function playlist_hot(params: RequestBaseConfig): Promise<Response>

  export function playlist_name_update(
    params: { id: string | number; name: string } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_order_update(
    params: { ids: string } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_subscribe(
    params: { t: SubAction; id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_subscribers(
    params: {
      id?: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_tags_update(
    params: { id: string | number; tags: string } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_tracks(
    params: {
      op: 'add' | 'del'
      pid: string | number
      tracks: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function playlist_update(
    params: {
      id: string | number
      name: string
      desc?: string
      tags?: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function playmode_intelligence_list(
    params: {
      id: string | number
      pid: string | number
      sid?: string | number
      count?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function program_recommend(
    params: {
      type: string
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function rebind(
    params: {
      captcha: string
      phone: string
      oldcaptcha: string
      ctcode?: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function recommend_resource(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function recommend_songs(params: RequestBaseConfig): Promise<Response>

  export function register_cellphone(
    params: {
      captcha: string
      phone: string
      password: string
      nickname: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function related_allvideo(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function related_playlist(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export enum ResourceType {
    mv = 1,
    dj = 4,
    video = 5,
    event = 6,
  }

  export function resource_like(
    params: {
      t: SubAction
      type: ResourceType
      id?: string | number
      threadId?: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function scrobble(
    params: {
      id: string | number
      sourceid: string | number
      time: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function search(
    params: {
      keywords: string
      type?: SearchType
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function search_default(params: RequestBaseConfig): Promise<Response>

  export function search_hot(params: RequestBaseConfig): Promise<Response>

  export function search_hot_detail(
    params: RequestBaseConfig,
  ): Promise<Response>

  export function search_multimatch(
    params: { type?: number; keywords: string } & RequestBaseConfig,
  ): Promise<Response>

  export enum SearchSuggestType {
    mobile = 'mobile',
    web = 'web',
  }

  export function search_suggest(
    params: { keywords: string; type?: SearchSuggestType } & RequestBaseConfig,
  ): Promise<Response>

  export function send_playlist(
    params: {
      playlist: string | number
      msg: string
      user_ids: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function send_text(
    params: { msg: string; user_ids: string } & RequestBaseConfig,
  ): Promise<Response>

  export function setting(params: RequestBaseConfig): Promise<Response>

  export enum ShareResourceType {
    song = 'song',
    playlist = 'playlist',
    mv = 'mv',
    djprogram = 'djprogram',
    djradio = 'djradio',
  }

  export function share_resource(
    params: {
      type?: ShareResourceType
      msg?: string
      id?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function simi_artist(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function simi_mv(
    params: { mvid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function simi_playlist(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function simi_song(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function simi_user(
    params: {
      id: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function song_detail(
    params: { ids: string } & RequestBaseConfig,
  ): Promise<Response>

  export function song_order_update(
    params: { pid: string | number; ids: string } & RequestBaseConfig,
  ): Promise<Response>

  export function song_url(
    params: { id: string | number; br?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function top_album(
    params: {
      area?: AlbumListArea
      limit?: string | number
      offset?: string | number
      type?: ListOrder
      year?: string
      mouth?: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function top_artists(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function top_list(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function top_mv(
    params: {
      area?: MvArea
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function top_playlist(
    params: {
      cat?: string
      order?: ListOrder
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function top_playlist_highquality(
    params: {
      cat?: string
      before?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum TopSongType {
    all = 0,
    zh = 7,
    ea = 96,
    kr = 16,
    ja = 8,
  }

  export function top_song(
    params: { type: TopSongType } & RequestBaseConfig,
  ): Promise<Response>

  export function toplist(params: RequestBaseConfig): Promise<Response>

  export enum ToplistArtistType {
    zh = 1,
    ea = 2,
    kr = 3,
    ja = 4,
  }

  export function toplist_artist(
    params: { type?: ToplistArtistType } & RequestBaseConfig,
  ): Promise<Response>

  export function toplist_detail(params: RequestBaseConfig): Promise<Response>

  export function user_audio(
    params: { uid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function user_cloud(
    params: {
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function user_cloud_del(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function user_cloud_detail(
    params: { id: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function user_detail(
    params: { uid: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function user_dj(
    params: {
      limit?: string | number
      offset?: string | number
      uid: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function user_event(
    params: {
      lasttime?: string | number
      limit?: string | number
      uid: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function user_followeds(
    params: {
      uid: string | number
      lasttime?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function user_follows(
    params: {
      uid: string | number
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function user_level(params: RequestBaseConfig): Promise<Response>

  export function user_playlist(
    params: {
      uid: string | number
      limit?: string | number
      offset?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export enum UserRecordType {
    all = 0,
    weekly = 1,
  }

  export function user_record(
    params: { uid: string | number; type?: UserRecordType } & RequestBaseConfig,
  ): Promise<Response>

  export function user_subcount(params: RequestBaseConfig): Promise<Response>

  export function user_update(
    params: {
      birthday: string
      city: string
      gender: string
      nickname: string
      province: string
      signature: string
    } & RequestBaseConfig,
  ): Promise<Response>

  export function video_category_list(
    params: {
      offset?: string | number
      limit?: string | number
    } & RequestBaseConfig,
  ): Promise<Response>

  export function video_detail(
    params: { id: string } & RequestBaseConfig,
  ): Promise<Response>

  export function video_detail_info(
    params: { vid: string } & RequestBaseConfig,
  ): Promise<Response>

  export function video_group(
    params: { id: string; offset?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function video_group_list(params: RequestBaseConfig): Promise<Response>

  export function video_sub(
    params: { t?: SubAction; id: string } & RequestBaseConfig,
  ): Promise<Response>

  export function video_timeline_all(
    params: { offset?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function video_timeline_recommend(
    params: { offset?: string | number } & RequestBaseConfig,
  ): Promise<Response>

  export function video_url(
    params: { id: string | number; res?: number } & RequestBaseConfig,
  ): Promise<Response>

  export function weblog(
    params: {
      data?: { [index: string]: unknown }
    } & RequestBaseConfig,
  ): Promise<Response>
}
