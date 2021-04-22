import api from './instance'
/**
 * @method 获取轮播图
 */
export const getBanner = () => api.get('/banner', {})

/**
 * @method 获取热搜列表
 */
export const getSearchHot = () => api.get('/search/hot', {})

/**
 * @method 搜索
 * @param {String} keywords 关键词
 * @param {Number} limit 返回数量 , 默认为 30
 * @param {Number} offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Number} type 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
export const search = (keywords, limit, offset, type) =>
  api.get(
    `/search?keywords=${keywords}&limit=${limit}&offset=${offset}&type=${type}`,
    {}
  )

/**
 * @method 搜索建议
 * @param {String} keywords 关键词
 */
export const searchSuggest = keywords =>
  api.get(`/search/suggest?keywords=${keywords}`, {})

/**
 * @method 获取推荐歌单
 * @params limit 取出数量默认为 30
 */
export const getPersonalized = limit =>
  api.get(`/personalized?limit=${limit}`, {})

/**
 * @method 获取推荐歌单
 */
export const getNewSongs = () => api.get(`/personalized/newsong`, {})

/**
 * @method 获取热门歌手
 */
export const getHotSinger = () => api.get(`/top/artists?offset=0&limit=30`, {})


/**
 * @method 获取歌手分类列表
 * @params cat 即 category Code,歌手类型,默认 1001,返回华语男歌手数据
 * @params limit 返回数量 , 默认为30
 * @params offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @params initial 按首字母索引查找参数, 如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
 */
export const getSingerList = params => api.get(`/artist/list`, { params })

/**
 * @method 获取歌手单曲
 * @params id 歌手 id
 */
export const getArtists = id => api.get(`/artists?id=${id}`, {})

/**
 * @method 获取歌手mv
 * @params id 歌手 id
 */
export const getArtistMv = params => api.get(`/artist/mv`, { params })

/**
 * @method 获取歌手专辑
 * @params limit 返回数量 , 默认为30
 * @params offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export const getArtistAlbum = params => api.get(`/artist/album`, { params })

/**
 * @method 获取歌手描述
 * @params id 歌手 id
 */
export const getArtistDesc = id => api.get(`/artist/desc?id=${id}`, {})

/**
 * @method 获取相似歌手
 * @params id 歌手 id
 */
export const getArtistSimi = id => api.get(`/simi/artist?id=${id}`, {})

/**
 * @method 获取排行榜内容摘要
 */
export const getToplist = () => api.get(`/toplist/detail`, {})

/**
 * @method 获取歌单分类
 */
export const getCatList = () => api.get(`/playlist/catlist`, {})

/**
 * @method 获取热门歌单分类
 */
export const getHotlist = () => api.get(`/playlist/hot`, {})

/**
 * @method 获取歌单
 */
export const getPlayList = params => api.get(`/top/playlist`, { params })

/**
 * @method 获取歌单详情
 */
export const getPlayListDetail = (id, s, time) =>
  api.get(`/playlist/detail?id=${id}&s=${s}&timestamp=${time}`, {})

/**
 * @method 获取歌曲详情
 */
export const getSongDetail = (ids, time) =>
  api.post(`/song/detail?timestamp=${time}`, { ids })

/**
 * @method 相关歌单推荐
 */
export const getRelatedPlaylist = id =>
  api.get(`/related/playlist?id=${id}`, {})

/**
 * @method 获取相似歌单
 */
export const getSimiPlaylist = id => api.get(`/simi/playlist?id=${id}`, {})

/**
 * @method 歌单评论
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @params before 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 */
export const getCommentPlaylist = params =>
  api.get(`/comment/playlist`, { params })

/**
 * @method 歌单收藏者
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export const getSubscribersPlaylist = params =>
  api.get(`/playlist/subscribers`, { params })

/**
 * @method 获取视频分类列表
 */
export const getVideoCategory = () => api.get(`/video/category/list`, {})

/**
 * @method 获取视频标签列表
 */
export const getVideoTag = () => api.get(`/video/group/list`, {})

/**
 * @method 获取全部视频列表
 */
export const getVideoAll = offset =>
  api.get(`/video/timeline/all?offset=${offset}`, {})

/**
 * @method 获取视频标签/分类下的视频
 */
export const getVideoOther = (id, offset) =>
  api.get(`/video/group?id=${id}&offset=${offset}`, {})

/**
 * @method 获取全部mv
 */
export const getMvAll = params => api.get(`/mv/all`, { params })

/**
 * @method 获取视频播放地址
 */
export const getVideoUrl = id => api.get(`/video/url?id=${id}`, {})

/**
 * @method 获取视频详情
 */
export const getVideoDetail = id => api.get(`/video/detail?id=${id}`, {})

/**
 * @method 获取视频点赞转发评论数数据
 */
export const getVideoDetailInfo = (id, time) =>
  api.get(`/video/detail/info?vid=${id}&timestamp=${time}`, {})

/**
 * @method 相关视频
 */
export const getVideoRelated = id => api.get(`/related/allvideo?id=${id}`, {})

/**
 * @method 视频评论
 */
export const getVideoComments = params => api.get(`/comment/video`, { params })

/**
 * @method 发送评论
 * @params t:1 发送, 2 回复
 * @params tpye: 0: 歌曲，1: mv，2: 歌单，3: 专辑，4: 电台，5: 视频，6: 动态
 * @params id:对应资源 id
 * @params content :要发送的内容
 * @params commentId :回复的评论id (回复评论时必填)
 * @调用例子 : /comment?t=1&type=1&id=5436712&content=test (往广岛之恋 mv 发送评论: test)
 * @注意：如给动态发送评论，则不需要传 id，需要传动态的 threadId,如：/comment?t=1&type=6&threadId=A_EV_2_6559519868_32953014&content=test
 */

export const sendComment = params => api.get(`/comment`, { params })

/**
 * @method 给评论点赞
 * @params t:1 点赞, 2 取消点赞
 * @params tpye: 0: 歌曲，1: mv，2: 歌单，3: 专辑，4: 电台，5: 视频，6: 动态
 * @params cid: 评论id
 * @调用例子 : /comment/like?id=29178366&cid=12840183&t=1&type=0 对应给 https://music.163.com/#/song?id=29178366 最热门的评论点赞
 */

export const likeComment = params => api.get(`/comment/like`, { params })

/**
 * @method 资源点赞( MV,电台,视频)
 * @params tpye: 1: mv，4: 电台，5: 视频，6: 动态
 * @params t:1 点赞, 2 取消点赞
 * @params id：资源id
 */

export const likeResource = (type, t, id) =>
  api.get(`/resource/like?type=${type}&t=${t}&id=${id}`, {})

/**
 * @method 获取mv详情
 */
export const getMvDetail = id => api.get(`/mv/detail?mvid=${id}`, {})

/**
 * @method 获取mv点赞转发评论数数据
 */
export const getMvDetailInfo = (id, time) =>
  api.get(`/mv/detail/info?mvid=${id}&timestamp=${time}`, {})

/**
 * @method 获取mv播放地址
 */
export const getMvUrl = id => api.get(`/mv/url?id=${id}`, {})

/**
 * @method mv评论
 */
export const getMvComments = params => api.get(`/comment/mv`, { params })

/**
 * @method 相似mv
 */
export const getMvRelated = id => api.get(`/simi/mv?mvid=${id}`, {})


/**
 * @method 获取歌词
 */
export const getLyric = id => api.get(`/lyric?id=${id}`, {})

/**
 * @method 收藏/取消收藏歌单
 */
export const collectPlaylist = (t, id) =>
  api.get(`/playlist/subscribe?t=${t}&id=${id}`, {})

/**
 * @method 获取专辑内容
 */
export const getAlbumData = id => api.get(`/album?id=${id}`, {})

/**
 * @method 获取专辑评论
 */
export const getAlbumComment = params => api.get(`/comment/album`, { params })
