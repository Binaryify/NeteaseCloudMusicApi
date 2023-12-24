from pytest_html import extras
import json
import os
from pprint import pprint
from package.NeteaseCloudMusic import NeteaseCloudMusicApi, api_help, api_list
netease_cloud_music_api = NeteaseCloudMusicApi()  # 初始化API
netease_cloud_music_api.cookie = os.getenv('COOKIE')  # 设置cookie
netease_cloud_music_api.DEBUG = True  # 开启调试模式


def test_user_detail(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_account(extra):
    """
     说明 : 登录后调用此接口 ,可获取用户账号信息
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("user_account", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_subcount(extra):
    """
     说明 : 登录后调用此接口 , 可以获取用户信息
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("user_subcount", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_level(extra):
    """
     说明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度,对应 
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("user_level", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_binding(extra):
    """
     说明 : 登录后调用此接口 , 可以获取用户绑定信息
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_binding", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_playlist(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_order_update(extra):
    """
     说明 : 登录后调用此接口,可以根据歌单 id 顺序调整歌单顺序
    """

    example = [{"ids": "[111,222]"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_order_update", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_song_order_update(extra):
    """
     说明 : 登录后调用此接口,可以根据歌曲 id 顺序调整歌曲顺序
    """

    example = [{"pid": "2039116066", "ids": "[5268328,1219871]"}]
    for query in example:
        response = netease_cloud_music_api.request("song_order_update", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 401] or response["data"]["code"] in [200, 401])


def test_user_comment_history(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户历史评论
    """

    example = [{"uid": "32953014"}, {"uid": "32953014", "limit": "1", "time": "1616217577564"}]
    for query in example:
        response = netease_cloud_music_api.request("user_comment_history", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_dj(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户电台
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_dj", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_follows(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户关注列表
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_follows", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_followeds(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户粉丝列表
    """

    example = [{"uid": "32953014"}, {"uid": "416608258", "limit": "1"}, {"uid": "416608258", "limit": "1", "offset": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("user_followeds", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_event(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户动态
    """

    example = [{"uid": "32953014"}, {"uid": "32953014", "limit": "1", "lasttime": "1558011138743"}]
    for query in example:
        response = netease_cloud_music_api.request("user_event", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_event(extra):
    """
     说明 : 登录后调用此接口 , 可以获取动态下评论
    """

    example = [{"threadId": "A_EV_2_6559519868_32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_event", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_follow(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 和操作 t,可关注/取消关注用户
    """

    example = [{"id": "32953014", "t": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("follow", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, -462] or response["data"]["code"] in [200, 400, -462])


def test_user_record(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id, 可获取用户播放记录
    """

    example = [{"uid": "32953014", "type": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("user_record", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400] or response["data"]["code"] in [200, 400])


def test_hot_topic(extra):
    """
     说明 : 调用此接口 , 可获取热门话题
    """

    example = [{"limit": "30", "offset": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("hot_topic", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_topic_detail(extra):
    """
     说明 : 调用此接口 , 可获取话题详情
    """

    example = [{"actid": "111551188"}]
    for query in example:
        response = netease_cloud_music_api.request("topic_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_topic_detail_event_hot(extra):
    """
     说明 : 调用此接口 , 可获取话题详情热门动态
    """

    example = [{"actid": "111551188"}]
    for query in example:
        response = netease_cloud_music_api.request("topic_detail_event_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playmode_intelligence_list(extra):
    """
     说明 : 登录后调用此接口 , 可获取心动模式/智能播放列表

    """

    example = [{"id": "33894312", "pid": "24381616"}, {"id": "33894312", "pid": "24381616", "sid": "36871368"}]
    for query in example:
        response = netease_cloud_music_api.request("playmode_intelligence_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_event(extra):
    """
     说明 : 调用此接口 , 可获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息
，如分享的视频，音乐，照片等！
    """

    example = [{"pagesize": "30", "lasttime": "1556740526369"}]
    for query in example:
        response = netease_cloud_music_api.request("event", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_list(extra):
    """
     说明 : 调用此接口,可获取歌手分类列表
    """

    example = [{"type": "1", "area": "96", "initial": "b"}, {"type": "2", "area": "2", "initial": "b"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_sub(extra):
    """
     说明 : 调用此接口,可收藏歌手
    """

    example = [{"id": "6452", "t": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_sub", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, -462] or response["data"]["code"] in [200, 400, -462])


def test_artist_top_song(extra):
    """
     说明 : 调用此接口,可获取歌手热门 50 首歌曲
    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_top_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_songs(extra):
    """
     说明 : 调用此接口,可获取歌手全部歌曲

    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_songs", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_sublist(extra):
    """
     说明 : 调用此接口,可获取收藏的歌手列表  
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("artist_sublist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_topic_sublist(extra):
    """
     说明 : 调用此接口,可获取收藏的专栏
    """

    example = [{"limit": "2", "offset": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("topic_sublist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_sub(extra):
    """
     说明 : 调用此接口,可收藏视频
    """

    example = [{"id": "5659C0B60C6D1C63662BC698C603D961", "t": 1}]
    for query in example:
        response = netease_cloud_music_api.request("video_sub", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 408] or response["data"]["code"] in [200, 408])


def test_mv_sub(extra):
    """
     说明 : 调用此接口,可收藏/取消收藏 MV
    """

    example = [{"mvid": "5344234", "t": 1}]
    for query in example:
        response = netease_cloud_music_api.request("mv_sub", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_sublist(extra):
    """
     说明 : 调用此接口,可获取收藏的 MV 列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("mv_sublist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_catlist(extra):
    """
     说明 : 调用此接口,可获取歌单分类,包含 category 信息
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_catlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_hot(extra):
    """
     说明 : 调用此接口,可获取歌单分类,包含 category 信息
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_playlist(extra):
    """
     说明 : 调用此接口 , 可获取网友精选碟歌单
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("top_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_highquality_tags(extra):
    """
     说明 : 调用此接口 , 可获取精品歌单标签列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_highquality_tags", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_playlist_highquality(extra):
    """
     说明 : 调用此接口 , 可获取精品歌单
    """

    example = [{"before": "1503639064232", "limit": "3"}]
    for query in example:
        response = netease_cloud_music_api.request("top_playlist_highquality", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_related_playlist(extra):
    """
     说明 : 调用此接口,传入歌单 id 可获取相关歌单(对应页面 
    """

    example = [{"id": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("related_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_detail(extra):
    """
     说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可
以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 
    """

    example = [{"id": "24381616"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_track_all(extra):
    """
     说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单
    """

    example = [{"id": "24381616", "limit": "10", "offset": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_track_all", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_detail_dynamic(extra):
    """
     说明 : 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
    """

    example = [{"id": "24381616"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_detail_dynamic", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_update_playcount(extra):
    """
     说明 : 调用后可更新歌单播放量
    """

    example = [{"id": "24381616"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_update_playcount", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_song_url_v1(extra):
    """
     说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
    """

    example = [{"id": "33894312", "level": "exhigh"}, {"id": "405998841,33894312", "level": "lossless"}]
    for query in example:
        response = netease_cloud_music_api.request("song_url_v1", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_check_music(extra):
    """
     说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 
    """

    example = [{"id": "33894312"}]
    for query in example:
        response = netease_cloud_music_api.request("check_music", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_cloudsearch(extra):
    """
     说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 ,
关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 
    """

    example = [{"keywords": "\u6d77\u9614\u5929\u7a7a"}, {"keywords": "\u6d77\u9614\u5929\u7a7a"}]
    for query in example:
        response = netease_cloud_music_api.request("cloudsearch", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_search_hot(extra):
    """
     说明 : 调用此接口,可获取热门搜索列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("search_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_search_hot_detail(extra):
    """
     说明 : 调用此接口,可获取热门搜索列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("search_hot_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_search_suggest(extra):
    """
     说明 : 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单信息
    """

    example = [{"keywords": "\u6d77\u9614\u5929\u7a7a"}, {"keywords": "\u6d77\u9614\u5929\u7a7a", "type": "mobile"}]
    for query in example:
        response = netease_cloud_music_api.request("search_suggest", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_search_multimatch(extra):
    """
     说明 : 调用此接口 , 传入搜索关键词可获得搜索结果
    """

    example = [{"keywords": "\u6d77\u9614\u5929\u7a7a"}]
    for query in example:
        response = netease_cloud_music_api.request("search_multimatch", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_delete(extra):
    """
     说明 : 调用此接口 , 传入歌单 id 可删除歌单
    """

    example = [{"id": "2947311456"}, {"id": "5013464397,5013427772"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_delete", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_subscribe(extra):
    """
     说明 : 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
    """

    example = [{"t": "1", "id": "106697785"}, {"t": "2", "id": "106697785"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_subscribe", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 408, 501] or response["data"]["code"] in [200, 408, 501])


def test_playlist_subscribers(extra):
    """
     说明 : 调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
    """

    example = [{"id": "544215255", "limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_subscribers", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_track_add(extra):
    """
     说明 : 调用此接口 , 可收藏视频到视频歌单 ( 需要登录 )
    """

    example = [{"pid": "5271999357", "ids": "186041"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_track_add", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 404] or response["data"]["code"] in [200, 404])


def test_playlist_track_delete(extra):
    """
     说明 : 调用此接口 , 可删除视频歌单里的视频 ( 需要登录 )

    """

    example = [{"pid": "5271999357", "ids": "186041"}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_track_delete", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400] or response["data"]["code"] in [200, 400])


def test_playlist_video_recent(extra):
    """
     说明 : 调用此接口 , 可获取最近播放的视频 ( 需要登录 )
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_video_recent", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_lyric(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
    """

    example = [{"id": "33894312"}]
    for query in example:
        response = netease_cloud_music_api.request("lyric", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_lyric_new(extra):
    """
     说明 : 此接口的 
    """

    example = [{"id": "1824020871"}]
    for query in example:
        response = netease_cloud_music_api.request("lyric_new", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_song(extra):
    """
     说明 : 调用此接口 , 可获取新歌速递
    """

    example = [{"type": "96"}]
    for query in example:
        response = netease_cloud_music_api.request("top_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_music(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
    """

    example = [{"id": "186016", "limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_music", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_floor(extra):
    """
     说明 : 调用此接口 , 传入资源 parentCommentId 和资源类型 type 和资源 id 参数, 可获得该资源的歌曲楼层评论
    """

    example = [{"parentCommentId": "1438569889", "id": "29764564", "type": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_floor", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_album(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要
登录 )
    """

    example = [{"id": "32311"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_playlist(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要
登录 )
    """

    example = [{"id": "705123491"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_mv(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要
登录 )
    """

    example = [{"id": "5436712"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_dj(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 (
不需要登录 )
    """

    example = [{"id": "794062371"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_dj", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_video(extra):
    """
     说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 (
不需要登录 )
    """

    example = [{"id": "89ADDE33C0AAE8EC14B99F6750DB954D"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_video", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_hot(extra):
    """
     说明 : 调用此接口 , 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 )
    """

    example = [{"id": "186016", "type": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_new(extra):
    """
     说明 : 调用此接口 , 传入资源类型和资源 id,以及排序方式,可获取对应资源的评论
    """

    example = [{"type": "0", "id": "1407551413", "sortType": "3"}, {"type": "0", "id": "1407551413", "sortType": "3", "cursor": "1602072870260", "pageSize": "20", "pageNo": "2"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_new", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_like(extra):
    """
     说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对
应评论点赞 ( 需要登录 )
    """

    example = [{"id": "29178366", "cid": "12840183", "t": "1", "type": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_like", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_hug_comment(extra):
    """
     说明 : 调用此接口,可抱一抱评论
    """

    example = [{"uid": "285516405", "cid": "1167145843", "sid": "863481066"}]
    for query in example:
        response = netease_cloud_music_api.request("hug_comment", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_comment_hug_list(extra):
    """
     说明 : 调用此接口,可获取评论抱一抱列表
    """

    example = [{"uid": "285516405", "cid": "1167145843", "sid": "863481066", "pageSize": "2", "page": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("comment_hug_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_banner(extra):
    """
     说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
    """

    example = [{}, {"type": "2"}]
    for query in example:
        response = netease_cloud_music_api.request("banner", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_resource_like(extra):
    """
     说明 : 调用此接口 , 可对 MV,电台,视频点赞
    """

    example = [{"t": "1", "type": "1", "id": "5436712"}]
    for query in example:
        response = netease_cloud_music_api.request("resource_like", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_playlist_mylike(extra):
    """
     说明 : 调用此接口, 可获取获取点赞过的视频
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("playlist_mylike", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_song_detail(extra):
    """
     说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 
    """

    example = [{"ids": "347230"}, {"ids": "347230,347231"}]
    for query in example:
        response = netease_cloud_music_api.request("song_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album(extra):
    """
     说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
    """

    example = [{"id": "32311"}]
    for query in example:
        response = netease_cloud_music_api.request("album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_detail_dynamic(extra):
    """
     说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
    """

    example = [{"id": "32311"}]
    for query in example:
        response = netease_cloud_music_api.request("album_detail_dynamic", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_sub(extra):
    """
     说明 : 调用此接口,可收藏/取消收藏专辑
    """

    example = [{"id": "147779282", "t": "1"}, {"id": "147779282", "t": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("album_sub", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 401, 404] or response["data"]["code"] in [200, 401, 404])


def test_album_sublist(extra):
    """
     说明 : 调用此接口 , 可获得已收藏专辑列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("album_sublist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artists(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("artists", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_mv(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调
用
    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_album(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
    """

    example = [{"id": "6452", "limit": "5"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_desc(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述
    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_desc", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_detail(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得获取歌手详情
    """

    example = [{"id": "11972054"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, -460] or response["data"]["code"] in [200, 400, -460])


def test_simi_artist(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手
    """

    example = [{"id": "6452"}]
    for query in example:
        response = netease_cloud_music_api.request("simi_artist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_simi_playlist(extra):
    """
     说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单
    """

    example = [{"id": "347230"}]
    for query in example:
        response = netease_cloud_music_api.request("simi_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_simi_mv(extra):
    """
     说明 : 调用此接口 , 传入 
    """

    example = [{"mvid": "5436712"}]
    for query in example:
        response = netease_cloud_music_api.request("simi_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_simi_song(extra):
    """
     说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲
    """

    example = [{"id": "347230"}]
    for query in example:
        response = netease_cloud_music_api.request("simi_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_simi_user(extra):
    """
     说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户
    """

    example = [{"id": "347230"}]
    for query in example:
        response = netease_cloud_music_api.request("simi_user", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_recommend_resource(extra):
    """
     说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("recommend_resource", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_recommend_songs(extra):
    """
     说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("recommend_songs", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_recommend_songs_dislike(extra):
    """
     说明 : 日推歌曲标记为不感兴趣( 同时会返回一个新推荐歌曲, 需要登录 )
    """

    example = [{"id": "168091"}]
    for query in example:
        response = netease_cloud_music_api.request("recommend_songs_dislike", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 432] or response["data"]["code"] in [200, 432])


def test_history_recommend_songs(extra):
    """
     说明 : 调用此接口 , 可获得历史日推可用日期列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("history_recommend_songs", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_history_recommend_songs_detail(extra):
    """
     说明 : 调用此接口 ,传入当日日期, 可获得当日历史日推数据
    """

    example = [{"date": "2020-06-21"}]
    for query in example:
        response = netease_cloud_music_api.request("history_recommend_songs_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personal_fm(extra):
    """
     说明 : 私人 FM( 需要登录 )
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("personal_fm", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_like(extra):
    """
     说明 : 调用此接口 , 传入音乐 id, 可喜欢该音乐
    """

    example = [{"id": "347230"}]
    for query in example:
        response = netease_cloud_music_api.request("like", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_likelist(extra):
    """
     说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("likelist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_album(extra):
    """
     说明 : 调用此接口 , 可获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接
口 
    """

    example = [{"offset": "0", "limit": "30", "year": "2019", "month": "6"}]
    for query in example:
        response = netease_cloud_music_api.request("top_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_new(extra):
    """
     说明 : 登录后调用此接口 ,可获取全部新碟
    """

    example = [{"area": "KR", "limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("album_new", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_newest(extra):
    """
     说明 : 调用此接口 ，获取云音乐首页新碟上架数据
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("album_newest", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_scrobble(extra):
    """
     说明 : 调用此接口 , 传入音乐 id, 来源 id，歌曲时间 time，更新听歌排行数据
    """

    example = [{"id": "518066366", "sourceid": "36780169", "time": "291"}]
    for query in example:
        response = netease_cloud_music_api.request("scrobble", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_artists(extra):
    """
     说明 : 调用此接口 , 可获取热门歌手数据
    """

    example = [{"offset": "0", "limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("top_artists", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_all(extra):
    """
     说明 : 调用此接口 , 可获取全部 mv
    """

    example = [{"area": "\u6e2f\u53f0"}]
    for query in example:
        response = netease_cloud_music_api.request("mv_all", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_first(extra):
    """
     说明 : 调用此接口 , 可获取最新 mv
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("mv_first", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_exclusive_rcmd(extra):
    """
     说明 : 调用此接口 , 可获取网易出品 mv
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("mv_exclusive_rcmd", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized_mv(extra):
    """
     说明 : 调用此接口 , 可获取推荐 mv
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("personalized_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized(extra):
    """
     说明 : 调用此接口 , 可获取推荐歌单
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("personalized", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized_newsong(extra):
    """
     说明 : 调用此接口 , 可获取推荐新音乐
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("personalized_newsong", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized_djprogram(extra):
    """
     说明 : 调用此接口 , 可获取推荐电台
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("personalized_djprogram", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_program_recommend(extra):
    """
     说明 : 调用此接口 , 可获取推荐电台
    """

    example = [{"limit": "5"}]
    for query in example:
        response = netease_cloud_music_api.request("program_recommend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized_privatecontent(extra):
    """
     说明 : 调用此接口 , 可获取独家放送
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("personalized_privatecontent", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_personalized_privatecontent_list(extra):
    """
     说明 : 调用此接口 , 可获取独家放送列表
    """

    example = [{"limit": "1", "offset": "2"}]
    for query in example:
        response = netease_cloud_music_api.request("personalized_privatecontent_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_top_mv(extra):
    """
     说明 : 调用此接口 , 可获取 mv 排行
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("top_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_detail(extra):
    """
     说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应
MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频
网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
    """

    example = [{"mvid": "5436712"}]
    for query in example:
        response = netease_cloud_music_api.request("mv_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mv_detail_info(extra):
    """
     说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应
MV 点赞转发评论数数据
    """

    example = [{"mvid": "5436712"}]
    for query in example:
        response = netease_cloud_music_api.request("mv_detail_info", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_group_list(extra):
    """
     说明 : 调用此接口 , 可获取视频标签列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("video_group_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_category_list(extra):
    """
     说明 : 调用此接口 , 可获取视频分类列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("video_category_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_group(extra):
    """
     说明 : 调用此接口 , 传入标签/分类
    """

    example = [{"id": "9104"}]
    for query in example:
        response = netease_cloud_music_api.request("video_group", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_timeline_all(extra):
    """
     说明 : 调用此接口,可获取视频分类列表,分页参数只能传入 offset
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("video_timeline_all", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_timeline_recommend(extra):
    """
     说明 : 调用此接口, 可获取推荐视频,分页参数只能传入 offset
    """

    example = [{"offset": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("video_timeline_recommend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_related_allvideo(extra):
    """
     说明 : 调用此接口 , 可获取相关视频
    """

    example = [{"id": "89ADDE33C0AAE8EC14B99F6750DB954D"}]
    for query in example:
        response = netease_cloud_music_api.request("related_allvideo", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_detail(extra):
    """
     说明 : 调用此接口 , 可获取视频详情
    """

    example = [{"id": "89ADDE33C0AAE8EC14B99F6750DB954D"}]
    for query in example:
        response = netease_cloud_music_api.request("video_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_detail_info(extra):
    """
     说明 : 调用此接口 , 传入 vid ( 视频 id ) , 可获取对应视频点赞转发评论数数据

    """

    example = [{"vid": "89ADDE33C0AAE8EC14B99F6750DB954D"}]
    for query in example:
        response = netease_cloud_music_api.request("video_detail_info", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_video_url(extra):
    """
     说明 : 调用此接口 , 传入视频 id,可获取视频播放地址
    """

    example = [{"id": "89ADDE33C0AAE8EC14B99F6750DB954D"}]
    for query in example:
        response = netease_cloud_music_api.request("video_url", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_toplist(extra):
    """
     说明 : 调用此接口,可获取所有榜单

    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("toplist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_toplist_detail(extra):
    """
     说明 : 调用此接口,可获取所有榜单内容摘要
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("toplist_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_toplist_artist(extra):
    """
     说明 : 调用此接口 , 可获取排行榜中的歌手榜
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("toplist_artist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_cloud(extra):
    """
     说明 : 登录后调用此接口 , 可获取云盘数据 , 获取的数据没有对应 url, 需要再调用一
次 
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("user_cloud", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_cloud_detail(extra):
    """
     说明 : 登录后调用此接口 , 传入云盘歌曲 id，可获取云盘数据详情
    """

    example = [{"id": "5374627"}]
    for query in example:
        response = netease_cloud_music_api.request("user_cloud_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_cloud_del(extra):
    """
     说明 : 登录后调用此接口 , 可删除云盘歌曲
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("user_cloud_del", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 404] or response["data"]["code"] in [200, 404])


def test_cloud_match(extra):
    """
     说明 : 登录后调用此接口,可对云盘歌曲信息匹配纠正,如需取消匹配,asid 需要传 0
    """

    example = [{"uid": "32953014", "sid": "aaa", "asid": "bbb"}, {"uid": "32953014", "sid": "bbb", "asid": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("cloud_match", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400] or response["data"]["code"] in [200, 400])


def test_dj_banner(extra):
    """
     说明 : 调用此接口,可获取电台 banner
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_banner", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_personalize_recommend(extra):
    """
     说明 : 调用此接口,可获取电台个性推荐列表

    """

    example = [{"limit": "5"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_personalize_recommend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_subscriber(extra):
    """
     说明 : 调用此接口,可获取电台订阅者列表

    """

    example = [{"id": "335425050"}, {"id": "335425050", "time": "1602761825390"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_subscriber", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_user_audio(extra):
    """
     说明 : 调用此接口, 传入用户 id 可获取用户创建的电台
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("user_audio", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_hot(extra):
    """
     说明 : 调用此接口,可获取热门电台
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_program_toplist(extra):
    """
     说明 : 登录后调用此接口 , 可获得电台节目榜
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_program_toplist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_toplist_pay(extra):
    """
     说明 : 调用此接口,可获取付费精品电台
    """

    example = [{"limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_toplist_pay", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_program_toplist_hours(extra):
    """
     说明 : 调用此接口,可获取 24 小时节目榜
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_program_toplist_hours", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_toplist_hours(extra):
    """
     说明 : 调用此接口,可获取 24 小时主播榜
    """

    example = [{"limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_toplist_hours", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_toplist_newcomer(extra):
    """
     说明 : 调用此接口,可获取主播新人榜
    """

    example = [{"limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_toplist_newcomer", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_toplist_popular(extra):
    """
     说明 : 调用此接口,可获取最热主播榜
    """

    example = [{"limit": "30"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_toplist_popular", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_toplist(extra):
    """
     说明 : 登录后调用此接口 , 可获得新晋电台榜/热门电台榜
    """

    example = [{"type": "hot"}, {"type": "new", "limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_toplist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_radio_hot(extra):
    """
     电台 - 类别热门电台
    """

    example = [{"cateId": "2001"}, {"cateId": "10002"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_radio_hot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_recommend(extra):
    """
     说明 : 登录后调用此接口 , 可获得推荐电台
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_recommend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_catelist(extra):
    """
     说明 : 登录后调用此接口 , 可获得电台类型
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_catelist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_recommend_type(extra):
    """
     说明 : 登录后调用此接口 , 传入分类,可获得对应类型电台列表
    """

    example = [{"type": "1"}, {"type": "2001"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_recommend_type", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_sub(extra):
    """
     说明 : 登录后调用此接口 , 传入
    """

    example = [{"rid": "336355127", "t": "1"}, {"rid": "336355127", "t": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_sub", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_sublist(extra):
    """
     说明 : 登录后调用此接口 , 可获取订阅的电台列表
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_sublist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_paygift(extra):
    """
     说明 : 可以获取付费精选的电台列表 , 传入 
    """

    example = [{"limit": "10", "offset": "20"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_paygift", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_category_excludehot(extra):
    """
     说明 : 登录后调用此接口, 可获得电台非热门类型
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_category_excludehot", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_category_recommend(extra):
    """
     说明 : 登录后调用此接口, 可获得电台推荐类型
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_category_recommend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_today_perfered(extra):
    """
     说明 : 登录后调用此接口, 可获得电台今日优选
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("dj_today_perfered", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_detail(extra):
    """
     说明 : 登录后调用此接口 , 传入
    """

    example = [{"rid": "336355127"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_program(extra):
    """
     说明 : 登录后调用此接口 , 传入
    """

    example = [{"rid": "336355127", "limit": "40"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_program", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_dj_program_detail(extra):
    """
     说明 : 调用此接口传入电台节目 id,可获得电台节目详情
    """

    example = [{"id": "1367665101"}]
    for query in example:
        response = netease_cloud_music_api.request("dj_program_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_msg_private(extra):
    """
     说明 : 登录后调用此接口 ,可获取私信
    """

    example = [{"limit": "3"}]
    for query in example:
        response = netease_cloud_music_api.request("msg_private", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_send_song(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id 和要发送的信息,音乐 id, 可以发送音乐私信,返回内容为历史私信
    """

    example = [{"user_ids": "1", "id": "351318", "msg": "\u6d4b\u8bd5"}]
    for query in example:
        response = netease_cloud_music_api.request("send_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 401] or response["data"]["code"] in [200, 401])


def test_send_album(extra):
    """
     说明 : 登录后调用此接口 , 传入用户 id 和要发送的信息,专辑 id, 可以发送专辑私信,返回内容为消息 id
    """

    example = [{"user_ids": "1", "id": "351318", "msg": "\u6d4b\u8bd5"}]
    for query in example:
        response = netease_cloud_music_api.request("send_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 404] or response["data"]["code"] in [200, 404])


def test_msg_recentcontact(extra):
    """
     说明 : 登录后调用此接口 ,可获取最接近联系人
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("msg_recentcontact", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_msg_private_history(extra):
    """
     说明 : 登录后调用此接口 , 可获取私信内容
    """

    example = [{"uid": "9003"}]
    for query in example:
        response = netease_cloud_music_api.request("msg_private_history", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_msg_comments(extra):
    """
     说明 : 登录后调用此接口 ,可获取评论
    """

    example = [{"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("msg_comments", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400] or response["data"]["code"] in [200, 400])


def test_msg_forwards(extra):
    """
     说明 : 登录后调用此接口 ,可获取@我数据
    """

    example = [{"limit": "3"}]
    for query in example:
        response = netease_cloud_music_api.request("msg_forwards", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_msg_notices(extra):
    """
     说明 : 登录后调用此接口 ,可获取通知
    """

    example = [{"limit": "3"}]
    for query in example:
        response = netease_cloud_music_api.request("msg_notices", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_setting(extra):
    """
     说明 : 登录后调用此接口 ,可获取用户设置
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("setting", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_list(extra):
    """
     说明 : 调用此接口 ,可获取数字专辑-新碟上架
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("album_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_songsaleboard(extra):
    """
     说明 : 调用此接口 ,可获取数字专辑&数字单曲-榜单
    """

    example = [{"type": "year", "year": "2020", "albumType": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("album_songsaleboard", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_album_list_style(extra):
    """
     说明 : 调用此接口 ,可获取语种风格馆数字专辑列表
    """

    example = [{"area": "Z_H", "offset": "2"}]
    for query in example:
        response = netease_cloud_music_api.request("album_list_style", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_digitalAlbum_detail(extra):
    """
     说明 : 调用此接口 , 传入专辑 id, 可获取数字专辑信息
    """

    example = [{"id": "120605500"}]
    for query in example:
        response = netease_cloud_music_api.request("digitalAlbum_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_digitalAlbum_purchased(extra):
    """
     说明 : 登录后调用此接口 ,可获取我的数字专辑
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("digitalAlbum_purchased", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_digitalAlbum_ordering(extra):
    """
     说明 : 登录后调用此接口 ,可获取购买数字专辑的地址,把地址生成二维码后,可扫描购买专辑
    """

    example = [{"id": "86286082", "payment": "3", "quantity": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("digitalAlbum_ordering", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_calendar(extra):
    """
     说明 : 登录后调用此接口,传入开始和结束时间,可获取音乐日历
    """

    example = [{"startTime": "1606752000000", "endTime": "1609430399999"}]
    for query in example:
        response = netease_cloud_music_api.request("calendar", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei(extra):
    """
     说明 : 登录后调用此接口可获取云贝签到信息(连续签到天数,第二天全部可获得的云贝)
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_today(extra):
    """
     说明 : 登录后调用此接口可获取云贝今日签到信息(今日签到获取的云贝数)
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_today", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_sign(extra):
    """
     说明 : 登录后调用此接口可进行云贝签到
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_sign", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_info(extra):
    """
     说明 :登录后调用此接口可获取云贝账户信息(账户云贝数)
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_info", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_tasks(extra):
    """
     说明 :登录后调用此接口可获取云贝所有任务
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_tasks", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_tasks_todo(extra):
    """
     说明 :登录后调用此接口可获取云贝 todo 任务
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_tasks_todo", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_task_finish(extra):
    """
     云贝完成任务
    """

    example = [{"userTaskId": "5146243240", "depositCode": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_task_finish", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_tasks_receipt(extra):
    """
     说明 :登录后调用此接口可获取云贝收入
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_tasks_receipt", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_tasks_expense(extra):
    """
     说明 :登录后调用此接口可获取云贝支出
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_tasks_expense", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_new_song(extra):
    """
     说明 :登录后调用此接口可获取关注歌手新歌
    """

    example = [{"limit": "1"}, {"limit": "1", "before": "1602777625000"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_new_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_artist_new_mv(extra):
    """
     说明 :登录后调用此接口可获取关注歌手新 MV
    """

    example = [{"limit": "1"}, {"limit": "1", "before": "1602777625000"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_new_mv", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_yunbei_rcmd_song(extra):
    """
     说明 : 登录后调用此接口 , 传入歌曲 id, 可以进行云贝推歌
    """

    example = [{"id": "65528"}, {"id": "65528", "reason": "\u4eba\u95f4\u597d\u58f0\u97f3\u63a8\u8350\u7ed9\u4f60\u542c"}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_rcmd_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400] or response["data"]["code"] in [200, 400])


def test_yunbei_rcmd_song_history(extra):
    """
     说明 : 登录后调用此接口 , 可以获得云贝推歌历史记录
    """

    example = [{"size": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("yunbei_rcmd_song_history", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_song_purchased(extra):
    """
     说明 :登录后调用此接口可获取已购买的单曲
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("song_purchased", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mlog_url(extra):
    """
     说明 : 调用此接口 , 传入 mlog id, 可获取 mlog 播放地址
    """

    example = [{"id": "a1qOVPTWKS1ZrK8"}]
    for query in example:
        response = netease_cloud_music_api.request("mlog_url", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_mlog_to_video(extra):
    """
     说明 : 调用此接口 , 传入 mlog id, 可获取 video id，然后通过
    """

    example = [{"id": "a1qOVPTWKS1ZrK8"}]
    for query in example:
        response = netease_cloud_music_api.request("mlog_to_video", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_vip_growthpoint(extra):
    """
     说明 : 登录后调用此接口 , 可获取当前会员成长值
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("vip_growthpoint", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 1000] or response["data"]["code"] in [200, 400, 1000])


def test_vip_growthpoint_details(extra):
    """
     说明 :登录后调用此接口可获取会员成长值领取记录
    """

    example = [{"limit": "10"}]
    for query in example:
        response = netease_cloud_music_api.request("vip_growthpoint_details", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_vip_tasks(extra):
    """
     说明 : 登录后调用此接口 , 可获取会员任务
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("vip_tasks", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_vip_growthpoint_get(extra):
    """
     说明 : 登录后调用此接口 , 可获取已完成的会员任务的成长值奖励
    """

    example = [{"ids": "7043206830_7"}, {"ids": "8613118351_1,8607552957_1"}]
    for query in example:
        response = netease_cloud_music_api.request("vip_growthpoint_get", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 1000] or response["data"]["code"] in [200, 400, 1000])


def test_artist_fans(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获取歌手粉丝

    """

    example = [{"id": "2116", "limit": "10", "offset": "0"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_fans", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, -460] or response["data"]["code"] in [200, 400, -460])


def test_artist_follow_count(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获取歌手粉丝数量
    """

    example = [{"id": "2116"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_follow_count", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_digitalAlbum_sales(extra):
    """
     说明 : 调用此接口 , 传入专辑 id, 可获取数字专辑销量
    """

    example = [{"ids": "120605500"}, {"ids": "120605500,125080528"}]
    for query in example:
        response = netease_cloud_music_api.request("digitalAlbum_sales", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_musician_data_overview(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可获取统计数据概况
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("musician_data_overview", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_musician_play_trend(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可获取歌曲播放趋势
    """

    example = [{"startTime": "2021-05-24", "endTime": "2021-05-30"}]
    for query in example:
        response = netease_cloud_music_api.request("musician_play_trend", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_musician_tasks(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可获取音乐人任务。返回的数据中
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("musician_tasks", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_musician_tasks_new(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可获取音乐人任务。返回的数据中
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("musician_tasks_new", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_musician_cloudbean(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可获取账号云豆数
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("musician_cloudbean", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_musician_cloudbean_obtain(extra):
    """
     说明 : 音乐人登录后调用此接口 , 可领取已完成的音乐人任务的云豆奖励
    """

    example = [{"id": "7036416928", "period": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("musician_cloudbean_obtain", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_vip_info(extra):
    """
     说明: 登录后调用此接口，可获取当前 VIP 信息。
    """

    example = [{}, {"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("vip_info", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_vip_info_v2(extra):
    """
     说明: 登录后调用此接口，可获取当前 VIP 信息。
    """

    example = [{}, {"uid": "32953014"}]
    for query in example:
        response = netease_cloud_music_api.request("vip_info_v2", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_musician_sign(extra):
    """
     说明: 音乐人登录后调用此接口，可以完成“登录音乐人中心”任务，然后通过
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("musician_sign", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] in [200, 400, 600, 10000, 500, 404] or response["data"]["code"] in [200, 400, 600, 10000, 500, 404])


def test_artist_video(extra):
    """
     说明 : 调用此接口 , 传入歌手 id, 可获得歌手视频
    """

    example = [{"id": "2116"}]
    for query in example:
        response = netease_cloud_music_api.request("artist_video", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_song(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-歌曲
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_video(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-视频
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_video", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_voice(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-声音
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_voice", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_playlist(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-歌单
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_album(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-专辑
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_record_recent_dj(extra):
    """
     说明 : 调用此接口 , 可获得最近播放-播客
    """

    example = [{"limit": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("record_recent_dj", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_signin_progress(extra):
    """
     说明 : 调用此接口 , 可获得签到进度
    """

    example = [{"moduleId": "1207signin-1207signin"}]
    for query in example:
        response = netease_cloud_music_api.request("signin_progress", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_inner_version(extra):
    """
     说明 : 调用此接口 , 可获得内部版本号(从package.json读取)
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("inner_version", query)
        extra.append(extras.json(response, name="response"))
        assert (response is not None)


def test_vip_timemachine(extra):
    """
     说明 : 调用此接口 , 可获得黑胶时光机数据
    """

    example = [{}, {"startTime": "1638288000000", "endTime": "1640966399999", "limit": "10"}, {"startTime": "1609430400", "endTime": "1640966399999", "limit": "60"}]
    for query in example:
        response = netease_cloud_music_api.request("vip_timemachine", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_song_wiki_summary(extra):
    """
     说明: 调用此接口可以获取歌曲的音乐百科简要信息
    """

    example = [{"id": "1958384591"}]
    for query in example:
        response = netease_cloud_music_api.request("song_wiki_summary", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_sheet_list(extra):
    """
     说明: 调用此接口可以获取歌曲的乐谱列表
    """

    example = [{"id": "1815684465"}]
    for query in example:
        response = netease_cloud_music_api.request("sheet_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_sheet_preview(extra):
    """
     说明: 登录后调用此接口获取乐谱的内容
    """

    example = [{"id": "143190"}]
    for query in example:
        response = netease_cloud_music_api.request("sheet_preview", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_list(extra):
    """
     说明: 调用此接口获取曲风列表及其对应的 
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("style_list", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_preference(extra):
    """
     说明: 登录后调用此接口获取我的曲风偏好
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("style_preference", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_detail(extra):
    """
     说明: 调用此接口可以获取该曲风的描述信息
    """

    example = [{"tagId": "1000"}]
    for query in example:
        response = netease_cloud_music_api.request("style_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_song(extra):
    """
     说明: 调用此接口可以获取该曲风对应的歌曲
    """

    example = [{"tagId": "1000"}, {"tagId": "1010", "sort": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("style_song", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_album(extra):
    """
     说明: 调用此接口可以获取该曲风对应的专辑
    """

    example = [{"tagId": "1000"}, {"tagId": "1010", "sort": "1"}]
    for query in example:
        response = netease_cloud_music_api.request("style_album", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_playlist(extra):
    """
     说明: 调用此接口可以获取该曲风对应的歌单
    """

    example = [{"tagId": "1000"}]
    for query in example:
        response = netease_cloud_music_api.request("style_playlist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_style_artist(extra):
    """
     说明: 调用此接口可以获取该曲风对应的歌手
    """

    example = [{"tagId": "1000"}]
    for query in example:
        response = netease_cloud_music_api.request("style_artist", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_get_userids(extra):
    """
     说明: 使用此接口,传入用户昵称,可获取对应的用户id,支持批量获取,多个昵称用
    """

    example = [{"nicknames": "binaryify"}, {"nicknames": "binaryify;binaryify2"}]
    for query in example:
        response = netease_cloud_music_api.request("get_userids", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_album_get(extra):
    """
     说明: 登录后调用此接口,使用此接口,传入专辑id,可获取对应的专辑简要百科信息
    """

    example = [{"id": "168223858"}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_album_get", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_song_get(extra):
    """
     说明: 登录后调用此接口,使用此接口,传入歌曲id,可获取对应的歌曲简要百科信息
    """

    example = [{"id": "2058263032"}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_song_get", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_artist_get(extra):
    """
     说明: 登录后调用此接口,使用此接口,传入歌手id,可获取对应的歌手简要百科信息
    """

    example = [{"id": "15396"}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_artist_get", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_mv_get(extra):
    """
     说明: 登录后调用此接口,使用此接口,传入mv id,可获取对应的mv简要百科信息
    """

    example = [{"id": "14572641"}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_mv_get", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_artist_search(extra):
    """
     说明: 登录后调用此接口,使用此接口,传入歌手名关键字或者歌手id,可获取搜索到的歌手信息
    """

    example = [{"keyword": "sasakure"}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_artist_search", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_detail(extra):
    """
     说明: 登录后调用此接口,使用此接口,可获取当前登录用户贡献内容
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_detail", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_ugc_user_devote(extra):
    """
     说明: 登录后调用此接口,使用此接口,可获取当前登录用户贡献条目、积分、云贝数量
    """

    example = [{}]
    for query in example:
        response = netease_cloud_music_api.request("ugc_user_devote", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


def test_summary_annual(extra):
    """
     说明: 登录后调用此接口,使用此接口,可获取当前登录用户年度听歌报告，目前支持2017-2022年的报告
    """

    example = [{"year": "2022"}]
    for query in example:
        response = netease_cloud_music_api.request("summary_annual", query)
        extra.append(extras.json(response, name="response"))
        assert (response["code"] == 200 or response["data"]["code"] == 200)


