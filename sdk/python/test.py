# 使用示例

import json
import os
import time
from enum import Enum
from pprint import pprint
import dotenv

from package.NeteaseCloudMusic import NeteaseCloudMusicApi, api_help, api_list

# from NeteaseCloudMusic import NeteaseCloudMusicApi, api_help, api_list

dotenv.load_dotenv()  # 从.env文件中加载环境变量

netease_cloud_music_api = NeteaseCloudMusicApi()  # 初始化API
# netease_cloud_music_api.cookie = os.getenv("COOKIE")  # 设置cookie
netease_cloud_music_api.DEBUG = True  # 开启调试模式


def song_url_v1_test():
    # 获取歌曲详情
    response = netease_cloud_music_api.request("song_url_v1", {"id": '1880562045', "level": "exhigh"})
    pprint(response)


def search_test():
    # 搜索
    response = netease_cloud_music_api.request("search", {"keywords": "海阔天空"})
    # print("|", response.text, "|")
    pprint(response)


def search_default_test():
    # 搜索
    response = netease_cloud_music_api.request("search_default")
    pprint(response)


def user_account_test():
    # 获取用户账号信息
    response = netease_cloud_music_api.request("user_account", query={"timestamp": time.time()})
    pprint(response)


def comment_new_test():
    response = netease_cloud_music_api.request("comment_new", {
        "type": "0",
        "id": "1407551413",
        "sortType": 3,
        "cursor": 1602072870260,
        "pageSize": 20,
        "pageNo": 2,
        "realIP": "116.25.146.177",
    })
    pprint(response)


def toplist_detail_test():
    # 获取用户账号信息
    response = netease_cloud_music_api.request("toplist_detail")
    pprint(response)


def playlist_detail_test():
    # 获取用户账号信息
    response = netease_cloud_music_api.request("playlist_detail", {"id": 19723756})
    pprint(response)


def top_playlist_highquality_test():
    response = netease_cloud_music_api.request("/top/playlist/highquality")
    pprint(response)


def captcha_sent_test():
    response = netease_cloud_music_api.request("/captcha/sent", {"phone": "15234941791", "timestamp": time.time()})
    pprint(response)


def login_cellphone_test():
    response = netease_cloud_music_api.request("/login/cellphone",
                                               {
                                                   "phone": "15234941791",
                                                   "captcha": "9159",
                                                   "timestamp": time.time()
                                               })
    pprint(response)


def personalized_djprogram_test():
    response = netease_cloud_music_api.request("personalized_djprogram")
    pprint(response)


def top_mv_test():
    response = netease_cloud_music_api.request("top_mv", {'limit': 6})
    pprint(response)


def playlist_track_all_test():
    response = netease_cloud_music_api.request("playlist_track_all", {'id': '592179800'})
    pprint(response)


def login_refresh():
    response = netease_cloud_music_api.request("login_refresh", {"timestamp": time.time()})
    pprint(response)


def login_status():
    response = netease_cloud_music_api.request("login_status")
    pprint(response)


if __name__ == '__main__':
    pass
    # print(api_list())
    # print(api_help())
    # song_url_v1_test()
    # top_mv_test()
    search_test()
    # search_default_test()
    # comment_new_test()
    # toplist_detail_test()
    # playlist_detail_test()
    # top_playlist_highquality_test()
    # captcha_sent_test()
    # login_cellphone_test()
    # user_account_test()
    # playlist_track_all_test()
    # login_refresh()
    # login_status()
