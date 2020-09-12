// export * from './interface'
import {
  ActivateInitProfileRequestConfig,
  AlbumRequestConfig,
  AlbumDetailRequestConfig,
  AlbumDetailDynamicRequestConfig,
  AlbumListRequestConfig,
  AlbumListStyleRequestConfig,
  AlbumNewRequestConfig,
  AlbumNewestRequestConfig,
  AlbumSongSaleBoardRequestConfig,
  AlbumSubRequestConfig,
  AlbumSubListRequestConfig,
  ArtistAlbumRequestConfig,
  ArtistDescRequestConfig,
  ArtistListRequestConfig,
  ArtistMVRequestConfig,
  ArtistSongsRequestConfig,
  ArtistSubRequestConfig,
  ArtistSubListRequestConfig,
  ArtistTopSongRequestConfig,
  ArtistsRequestConfig,
  AvatarUploadRequestConfig,
  BannerRequestConfig,
  BatchRequestConfig,
  CaptchaSentRequestConfig,
  CaptchaVerifyRequestConfig,
  CellphoneExistenceCheckRequestConfig,
  CheckMusicRequestConfig,
  CloudSearchRequestConfig,
  CommentRequestConfig,
  CommentAlbumRequestConfig,
  CommentDjRequestConfig,
  CommentEventRequestConfig,
  CommentFloorRequestConfig,
  CommentHotRequestConfig,
  CommentHotwallListRequestConfig,
  CommentLikeRequestConfig,
  CommentMusicRequestConfig,
  CommentMvRequestConfig,
  CommentPlaylistRequestConfig,
  CommentVideoRequestConfig,
  CountriesCodeListRequestConfig,
  DailySigninRequestConfig,
  DigitalAlbumOrderingRequestConfig,
  DigitalAlbumPurchasedRequestConfig,
  DjBannerRequestConfig,
  DjCategoryExcludehotRequestConfig,
  DjCategoryRecommendRequestConfig,
  DjCatelistRequestConfig,
  DjDetailRequestConfig,
  DjHotRequestConfig,
  DjPaygiftRequestConfig,
  DjProgramRequestConfig,
  DjProgramDetailRequestConfig,
  DjProgramToplistRequestConfig,
  DjProgramToplistHoursRequestConfig,
  DjRadioHotRequestConfig,
  DjRecommendRequestConfig,
  DjRecommendTypeRequestConfig,
  DjSubRequestConfig,
  DjSublistRequestConfig,
  DjTodayPerferedRequestConfig,
  DjToplistRequestConfig,
  DjToplistHoursRequestConfig,
  DjToplistNewcomerRequestConfig,
  DjToplistPayRequestConfig,
  DjToplistPopularRequestConfig,
  EventRequestConfig,
  EventDelRequestConfig,
  EventForwardRequestConfig,
  FmTrashRequestConfig,
  FollowRequestConfig,
  HistoryRecommendSongsRequestConfig,
  HistoryRecommendSongsDetailRequestConfig,
  HomepageBlockPageRequestConfig,
  HomepageDragonBallRequestConfig,
  HotTopicRequestConfig,
  LikeRequestConfig,
  LikelistRequestConfig,
  LoginRequestConfig,
  LoginCellphoneRequestConfig,
  LoginRefreshRequestConfig,
  LoginStatusRequestConfig,
  LogoutRequestConfig,
  LyricRequestConfig,
  MsgCommentsRequestConfig,
  MsgForwardsRequestConfig,
  MsgNoticesRequestConfig,
  MsgPrivateRequestConfig,
  MsgPrivateHistoryRequestConfig,
  MvAllRequestConfig,
  MvDetailRequestConfig,
  MvDetailInfoRequestConfig,
  MvExclusiveRcmdRequestConfig,
  MvFirstRequestConfig,
  MvSubRequestConfig,
  MvSublistRequestConfig,
  MvUrlRequestConfig,
  PersonalFmRequestConfig,
  PersonalizedRequestConfig,
  PersonalizedDjprogramRequestConfig,
  PersonalizedMvRequestConfig,
  PersonalizedNewsongRequestConfig,
  PersonalizedPrivatecontentRequestConfig,
  PersonalizedPrivatecontentListRequestConfig,
  PlaylistCatlistRequestConfig,
  PlaylistCoverUpdateRequestConfig,
  PlaylistCreateRequestConfig,
  PlaylistDeleteRequestConfig,
  PlaylistDescUpdateRequestConfig,
  PlaylistDetailRequestConfig,
  PlaylistHotRequestConfig,
  PlaylistNameUpdateRequestConfig,
  PlaylistOrderUpdateRequestConfig,
  PlaylistSubscribeRequestConfig,
  PlaylistSubscribersRequestConfig,
  PlaylistTagsUpdateRequestConfig,
  PlaylistTracksRequestConfig,
  PlaylistUpdateRequestConfig,
  PlaymodeIntelligenceListRequestConfig,
  ProgramRecommendRequestConfig,
  RebindRequestConfig,
  RecommendResourceRequestConfig,
  RecommendSongsRequestConfig,
  RegisterCellphoneRequestConfig,
  RelatedAllvideoRequestConfig,
  RelatedPlaylistRequestConfig,
  ResourceLikeRequestConfig,
  ScrobbleRequestConfig,
  SearchRequestConfig,
  SearchDefaultRequestConfig,
  SearchHotRequestConfig,
  SearchHotDetailRequestConfig,
  SearchMultimatchRequestConfig,
  SearchSuggestRequestConfig,
  SendPlaylistRequestConfig,
  SendTextRequestConfig,
  SettingRequestConfig,
  ShareResourceRequestConfig,
  SimiArtistRequestConfig,
  SimiMvRequestConfig,
  SimiPlaylistRequestConfig,
  SimiSongRequestConfig,
  SimiUserRequestConfig,
  SongDetailRequestConfig,
  SongOrderUpdateRequestConfig,
  SongUrlRequestConfig,
  TopAlbumRequestConfig,
  TopArtistsRequestConfig,
  TopListRequestConfig,
  TopMvRequestConfig,
  TopPlaylistRequestConfig,
  TopPlaylistHighqualityRequestConfig,
  TopSongRequestConfig,
  ToplistRequestConfig,
  ToplistArtistRequestConfig,
  ToplistDetailRequestConfig,
  UserAudioRequestConfig,
  UserCloudRequestConfig,
  UserCloudDelRequestConfig,
  UserCloudDetailRequestConfig,
  UserDetailRequestConfig,
  UserDjRequestConfig,
  UserEventRequestConfig,
  UserFollowedsRequestConfig,
  UserFollowsRequestConfig,
  UserPlaylistRequestConfig,
  UserRecordRequestConfig,
  UserSubcountRequestConfig,
  UserUpdateRequestConfig,
  VideoCategoryListRequestConfig,
  VideoDetailRequestConfig,
  VideoDetailInfoRequestConfig,
  VideoGroupRequestConfig,
  VideoGroupListRequestConfig,
  VideoSubRequestConfig,
  VideoTimelineAllRequestConfig,
  VideoTimelineRecommendRequestConfig,
  VideoUrlRequestConfig,
  WeblogRequestConfig,
  APIBaseResponse,
} from './interface'
// Start
// export interface Response<T> {
interface Response<T> {
  status: number // The Http Response Code
  body: T // API Response body
  cookie: string[]
}

interface APIInstance {
  activate_init_profile: (
    params: ActivateInitProfileRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album: (params: AlbumRequestConfig) => Promise<Response<APIBaseResponse>>
  album_detail: (
    params: AlbumDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_detail_dynamic: (
    params: AlbumDetailDynamicRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_list: (
    params: AlbumListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_list_style: (
    params: AlbumListStyleRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_new: (
    params: AlbumNewRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_newest: (
    params: AlbumNewestRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_songsaleboard: (
    params: AlbumSongSaleBoardRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_sub: (
    params: AlbumSubRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  album_sublist: (
    params: AlbumSubListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_album: (
    params: ArtistAlbumRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_desc: (
    params: ArtistDescRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_list: (
    params: ArtistListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_mv: (
    params: ArtistMVRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_songs: (
    params: ArtistSongsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_sub: (
    params: ArtistSubRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_sublist: (
    params: ArtistSubListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artist_top_song: (
    params: ArtistTopSongRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  artists: (params: ArtistsRequestConfig) => Promise<Response<APIBaseResponse>>
  avatar_upload: (
    params: AvatarUploadRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  banner: (params: BannerRequestConfig) => Promise<Response<APIBaseResponse>>
  batch: (params: BatchRequestConfig) => Promise<Response<APIBaseResponse>>
  captcha_sent: (
    params: CaptchaSentRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  captcha_verify: (
    params: CaptchaVerifyRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  cellphone_existence_check: (
    params: CellphoneExistenceCheckRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  check_music: (
    params: CheckMusicRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  cloudsearch: (
    params: CloudSearchRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment: (params: CommentRequestConfig) => Promise<Response<APIBaseResponse>>
  comment_album: (
    params: CommentAlbumRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_dj: (
    params: CommentDjRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_event: (
    params: CommentEventRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_floor: (
    params: CommentFloorRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_hot: (
    params: CommentHotRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_hotwall_list: (
    params: CommentHotwallListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_like: (
    params: CommentLikeRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_music: (
    params: CommentMusicRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_mv: (
    params: CommentMvRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_playlist: (
    params: CommentPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  comment_video: (
    params: CommentVideoRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  countries_code_list: (
    params: CountriesCodeListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  daily_signin: (
    params: DailySigninRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  digitalAlbum_ordering: (
    params: DigitalAlbumOrderingRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  digitalAlbum_purchased: (
    params: DigitalAlbumPurchasedRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_banner: (
    params: DjBannerRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_category_excludehot: (
    params: DjCategoryExcludehotRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_category_recommend: (
    params: DjCategoryRecommendRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_catelist: (
    params: DjCatelistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_detail: (
    params: DjDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_hot: (params: DjHotRequestConfig) => Promise<Response<APIBaseResponse>>
  dj_paygift: (
    params: DjPaygiftRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_program: (
    params: DjProgramRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_program_detail: (
    params: DjProgramDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_program_toplist: (
    params: DjProgramToplistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_program_toplist_hours: (
    params: DjProgramToplistHoursRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_radio_hot: (
    params: DjRadioHotRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_recommend: (
    params: DjRecommendRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_recommend_type: (
    params: DjRecommendTypeRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_sub: (params: DjSubRequestConfig) => Promise<Response<APIBaseResponse>>
  dj_sublist: (
    params: DjSublistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_today_perfered: (
    params: DjTodayPerferedRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_toplist: (
    params: DjToplistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_toplist_hours: (
    params: DjToplistHoursRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_toplist_newcomer: (
    params: DjToplistNewcomerRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_toplist_pay: (
    params: DjToplistPayRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  dj_toplist_popular: (
    params: DjToplistPopularRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  event: (params: EventRequestConfig) => Promise<Response<APIBaseResponse>>
  event_del: (
    params: EventDelRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  event_forward: (
    params: EventForwardRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  fm_trash: (params: FmTrashRequestConfig) => Promise<Response<APIBaseResponse>>
  follow: (params: FollowRequestConfig) => Promise<Response<APIBaseResponse>>
  history_recommend_songs: (
    params: HistoryRecommendSongsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  history_recommend_songs_detail: (
    params: HistoryRecommendSongsDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  homepage_block_page: (
    params: HomepageBlockPageRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  homepage_dragon_ball: (
    params: HomepageDragonBallRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  hot_topic: (
    params: HotTopicRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  like: (params: LikeRequestConfig) => Promise<Response<APIBaseResponse>>
  likelist: (
    params: LikelistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  login: (params: LoginRequestConfig) => Promise<Response<APIBaseResponse>>
  login_cellphone: (
    params: LoginCellphoneRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  login_refresh: (
    params: LoginRefreshRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  login_status: (
    params: LoginStatusRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  logout: (params: LogoutRequestConfig) => Promise<Response<APIBaseResponse>>
  lyric: (params: LyricRequestConfig) => Promise<Response<APIBaseResponse>>
  msg_comments: (
    params: MsgCommentsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  msg_forwards: (
    params: MsgForwardsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  msg_notices: (
    params: MsgNoticesRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  msg_private: (
    params: MsgPrivateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  msg_private_history: (
    params: MsgPrivateHistoryRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  mv_all: (params: MvAllRequestConfig) => Promise<Response<APIBaseResponse>>
  mv_detail: (
    params: MvDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  mv_detail_info: (
    params: MvDetailInfoRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  mv_exclusive_rcmd: (
    params: MvExclusiveRcmdRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  mv_first: (params: MvFirstRequestConfig) => Promise<Response<APIBaseResponse>>
  mv_sub: (params: MvSubRequestConfig) => Promise<Response<APIBaseResponse>>
  mv_sublist: (
    params: MvSublistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  mv_url: (params: MvUrlRequestConfig) => Promise<Response<APIBaseResponse>>
  personal_fm: (
    params: PersonalFmRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized: (
    params: PersonalizedRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized_djprogram: (
    params: PersonalizedDjprogramRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized_mv: (
    params: PersonalizedMvRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized_newsong: (
    params: PersonalizedNewsongRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized_privatecontent: (
    params: PersonalizedPrivatecontentRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  personalized_privatecontent_list: (
    params: PersonalizedPrivatecontentListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_catlist: (
    params: PlaylistCatlistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_cover_update: (
    params: PlaylistCoverUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_create: (
    params: PlaylistCreateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_delete: (
    params: PlaylistDeleteRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_desc_update: (
    params: PlaylistDescUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_detail: (
    params: PlaylistDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_hot: (
    params: PlaylistHotRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_name_update: (
    params: PlaylistNameUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_order_update: (
    params: PlaylistOrderUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_subscribe: (
    params: PlaylistSubscribeRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_subscribers: (
    params: PlaylistSubscribersRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_tags_update: (
    params: PlaylistTagsUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_tracks: (
    params: PlaylistTracksRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playlist_update: (
    params: PlaylistUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  playmode_intelligence_list: (
    params: PlaymodeIntelligenceListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  program_recommend: (
    params: ProgramRecommendRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  rebind: (params: RebindRequestConfig) => Promise<Response<APIBaseResponse>>
  recommend_resource: (
    params: RecommendResourceRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  recommend_songs: (
    params: RecommendSongsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  register_cellphone: (
    params: RegisterCellphoneRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  related_allvideo: (
    params: RelatedAllvideoRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  related_playlist: (
    params: RelatedPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  resource_like: (
    params: ResourceLikeRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  scrobble: (
    params: ScrobbleRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  search: (params: SearchRequestConfig) => Promise<Response<APIBaseResponse>>
  search_default: (
    params: SearchDefaultRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  search_hot: (
    params: SearchHotRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  search_hot_detail: (
    params: SearchHotDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  search_multimatch: (
    params: SearchMultimatchRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  search_suggest: (
    params: SearchSuggestRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  send_playlist: (
    params: SendPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  send_text: (
    params: SendTextRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  setting: (params: SettingRequestConfig) => Promise<Response<APIBaseResponse>>
  share_resource: (
    params: ShareResourceRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  simi_artist: (
    params: SimiArtistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  simi_mv: (params: SimiMvRequestConfig) => Promise<Response<APIBaseResponse>>
  simi_playlist: (
    params: SimiPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  simi_song: (
    params: SimiSongRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  simi_user: (
    params: SimiUserRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  song_detail: (
    params: SongDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  song_order_update: (
    params: SongOrderUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  song_url: (params: SongUrlRequestConfig) => Promise<Response<APIBaseResponse>>
  top_album: (
    params: TopAlbumRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  top_artists: (
    params: TopArtistsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  top_list: (params: TopListRequestConfig) => Promise<Response<APIBaseResponse>>
  top_mv: (params: TopMvRequestConfig) => Promise<Response<APIBaseResponse>>
  top_playlist: (
    params: TopPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  top_playlist_highquality: (
    params: TopPlaylistHighqualityRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  top_song: (params: TopSongRequestConfig) => Promise<Response<APIBaseResponse>>
  toplist: (params: ToplistRequestConfig) => Promise<Response<APIBaseResponse>>
  toplist_artist: (
    params: ToplistArtistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  toplist_detail: (
    params: ToplistDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_audio: (
    params: UserAudioRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_cloud: (
    params: UserCloudRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_cloud_del: (
    params: UserCloudDelRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_cloud_detail: (
    params: UserCloudDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_detail: (
    params: UserDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_dj: (params: UserDjRequestConfig) => Promise<Response<APIBaseResponse>>
  user_event: (
    params: UserEventRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_followeds: (
    params: UserFollowedsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_follows: (
    params: UserFollowsRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_playlist: (
    params: UserPlaylistRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_record: (
    params: UserRecordRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_subcount: (
    params: UserSubcountRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  user_update: (
    params: UserUpdateRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_category_list: (
    params: VideoCategoryListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_detail: (
    params: VideoDetailRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_detail_info: (
    params: VideoDetailInfoRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_group: (
    params: VideoGroupRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_group_list: (
    params: VideoGroupListRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_sub: (
    params: VideoSubRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_timeline_all: (
    params: VideoTimelineAllRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_timeline_recommend: (
    params: VideoTimelineRecommendRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  video_url: (
    params: VideoUrlRequestConfig,
  ) => Promise<Response<APIBaseResponse>>
  weblog: (params: WeblogRequestConfig) => Promise<Response<APIBaseResponse>>
}
interface SDKInstance extends APIInstance {
  default: APIInstance
}
declare const SDK: SDKInstance
export = SDK
