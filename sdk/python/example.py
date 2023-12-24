"""
description: 网易云音乐API使用示例,这个示例引导你进行登录操作，然后下载一首歌曲
author: LuTong
date: 2020-10-07 10:00
"""
from pprint import pprint

import requests

from NeteaseCloudMusic import NeteaseCloudMusicApi, api_help, api_list

netease_cloud_music_api = NeteaseCloudMusicApi()  # 初始化API

version_result = netease_cloud_music_api.request("inner_version")
print(
    f'当前使用NeteaseCloudMusicApi版本号：{version_result["NeteaseCloudMusicApi"]}\n当前使用NeteaseCloudMusicApi_V8版本号：{version_result["NeteaseCloudMusicApi_V8"]}')  # 退出登录



def captcha_sent(_phone):
    response = netease_cloud_music_api.request("/captcha/sent", {"phone": f"{_phone}"})
    return response


def login_cellphone(_phone, _captcha):
    response = netease_cloud_music_api.request("/login/cellphone", {"phone": f"{_phone}", "captcha": f"{_captcha}"})
    return response


def song_url_v1(song_id):
    # 获取歌曲mp3地址
    response = netease_cloud_music_api.request("song_url_v1", {"id": song_id, "level": "exhigh"})
    return response


def song_detail(song_id):
    # 获取歌曲详情
    response = netease_cloud_music_api.request("song_detail", {"ids": str(song_id)})
    # 这里记得传一个字符串，其实所有参数都传字符串就行，需要数字的话内部会自己转换的，但是它默认你传入的时候是字符串，所以你传数字他不会自动转字符串，
    # 这时如果遇到操作字符串的方法就会报错，所以最好都传字符串，避免出现意外
    return response


def login_status():
    response = netease_cloud_music_api.request("/login/status")
    return response


# 登录
if not netease_cloud_music_api.cookie:
    print("请设置cookie")
    phone = input("请输入手机号：")
    result = captcha_sent(phone)
    print(result)
    if result.get("code") == 200:
        print("验证码已发送，请查收")
        captcha = input("请输入验证码：")
        result = login_cellphone(phone, captcha)
        if result.get("code") == 200:
            print("登录成功")
            if netease_cloud_music_api.cookie:
                print("cookie已自动设置")
        else:
            print("登录失败")
"""
调用登录接口后，会自动设置cookie，如果cookie失效，需要重新登录，登录过后api会在你的当前工作目录下创建cookie_storage文件保存你的cookie
在下次调用运行程序时，他会判断cookie是否过期，没有过期就自动读取cookie_storage文件中的cookie。

总的来说你不需要手动管理cookie，只需要调用登录接口，然后调用其他接口即可，cookie会自动设置，如果cookie过期，再次调用登录接口就好。
更好的办法是，在cookie还没有失效之前使用refresh_login接口刷新cookie，这样就不需要重新登录了（建议在你每次启动软件时都刷新，当然频繁重启调试的时候另算）

如果你想判断当前是否已经登录，if not netease_cloud_music_api.cookie 就可以了，或者调用/login/status接口
"""

# 获取登录状态
login_status_result = login_status()
# pprint(login_status_result)
if login_status_result['data']['data']["code"] == 200:
    print(f'当前登录账号：{login_status_result["data"]["data"]["profile"]["nickname"]}')

version_result = netease_cloud_music_api.request("inner_version")
print(
    f'当前使用NeteaseCloudMusicApi版本号：{version_result["NeteaseCloudMusicApi"]}\n当前使用NeteaseCloudMusicApi_V8版本号：{version_result["NeteaseCloudMusicApi_V8"]}')  # 退出登录

# 获取歌曲mp3地址
song_url_result = song_url_v1(33894312)
if song_url_result.get("code") == 200:
    song_url = song_url_result['data']["data"][0]['url']
else:
    print("获取歌曲mp3地址失败")
    exit(1)
# 获取歌曲详情
song_detail_result = song_detail(33894312)
if song_detail_result.get("code") == 200:
    song_name = song_detail_result['data']['songs'][0]['name']
    song_artist = song_detail_result['data']['songs'][0]['ar'][0]['name']
else:
    print("获取歌曲详情失败")
    exit(1)
# 下载歌曲mp3
print(f"正在下载歌曲：{song_name} - {song_artist}")
result = requests.get(song_url)
with open(f"{song_name} - {song_artist}.mp3", "wb") as f:
    f.write(result.content)
print("下载完成")

"""
示例程序结束，如果你运行成功了，那么你的执行目录下应该有一个cookie_storage文件，里面保存了你的cookie，还有一个mp3文件，就是你下载的歌曲
有关其他API的使用方法请参考：https://docs.neteasecloudmusicapi.binaryify.com/

再次注明一下，我之前也想过要不要将登录状态管理和cookie刷新等等封装到NeteaseCloudMusicApi类中，
但最后我想的是，这毕竟这是一个api接口类，就让他保持最原始简洁的状态就好，其他的留给大家去自由发挥吧！

友情提示：单个账户每天发送验证码的次数有限制，千万别一直调试登录接口。
"""
