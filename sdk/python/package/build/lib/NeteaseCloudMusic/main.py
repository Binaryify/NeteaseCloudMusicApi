import json
import os.path
import socket
import time
from pprint import pprint
import http.cookies
import datetime
from diskcache import Cache

import pkg_resources
import requests
from py_mini_racer import py_mini_racer
from .help import api_list
from .utils import format_cookie_str, prase_cookie_str
import urllib.parse


class NeteaseCloudMusicApi:
    __cookie = None
    __ip = None

    cache = Cache('cache', timeout=120)  # 设置缓存目录和过期时间

    # cache = TTLCache(maxsize=100, ttl=120)  # 设置缓存大小为100，缓存项的生存时间为120秒

    def __init__(self, debug=False, cache=False):
        self.DEBUG = debug  # 是否开启调试模式
        self.CACHE = cache  # 是否开启缓存

        self.special_api = {"/playlist/track/all": self.playlist_track_all,
                            "/login/cellphone": self.login_cellphone,
                            "/inner/version": self.inner_version,
                            "/login/refresh": self.login_refresh}

        # 载入js代码
        resource_path = pkg_resources.resource_filename(__name__, 'NeteaseCloudMusicApi.js')

        with open(resource_path, 'r', encoding='utf-8') as file:
            js_code = file.read()
        self.ctx = py_mini_racer.MiniRacer()
        self.ctx.eval(js_code)

    def request(self, name: str, query: dict = None) -> dict:
        """
        调用接口
        接口文档地址： https://docs.neteasecloudmusicapi.binaryify.com
        :param name: api名称 例如: song_url_v1, /song/url/v1
        :param query: 请求参数
        :return: 请求结果 示例：{"code": 200, "data": {}, "msg": "success"}
        """

        special = {
            'daily_signin': '/daily_signin',
            'fm_trash': '/fm_trash',
            'personal_fm': '/personal_fm',
        }

        yubei_special = {'/yunbei/tasks/receipt': '/yunbei/receipt',
                         '/yunbei/tasks/expense': '/yunbei/expense'}  # 这俩个接口准换的路由莫名奇妙

        # 测试name是否合法
        name.replace("\\", "/")
        if not name.startswith("/"):
            if name in special.keys():
                name = special[name]
            else:
                name = "/" + name
                name = name.replace("_", "/")

        # 处理俩个云贝接口名称转换问题
        if name in yubei_special.keys():
            name = yubei_special[name]
            # print("转换了个麻烦的路由", name)

        if name not in api_list():
            if name not in yubei_special.values():
                raise Exception(f"apiName: {name} not found，please use ”api_list()“ to view the interface list")

        # 生成一个唯一的键，用于在缓存中查找结果
        cache_key = (name, frozenset(query.items()) if query else None)

        if self.CACHE:
            # 检查缓存中是否已经有了结果
            if self.cache.get(cache_key):
                return self.cache.get(cache_key)

        if query is None:
            query = {}
        else:
            # 如果存在timestamp参数，那么删除它
            if query.get("timestamp"):
                del query["timestamp"]

        if query.get("cookie") is None:
            query["cookie"] = self.cookie

        if query.get("realIP") is None:
            query["realIP"] = self.ip
        else:
            query["realIP"] = query.get("realIP")

        # 特殊api处理
        if name in self.special_api.keys():
            result = self.special_api[name](query)
        else:
            result = self.call_api(name, query)

        if self.CACHE:
            # 将结果存入缓存
            self.cache.set(cache_key, result)

        return result

    @staticmethod
    def get_local_ip():
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            # doesn't even have to be reachable
            s.connect(('10.255.255.255', 1))
            IP = s.getsockname()[0]
        except Exception:
            print("get local ip error")
            IP = "116.25.146.177"
        finally:
            s.close()
        return IP

    @property
    def cookie(self):
        if self.__cookie is None:
            if os.path.isfile("cookie_storage"):
                with open("cookie_storage", "r", encoding='utf-8') as f:
                    content = f.read()
                try:
                    cookie_storage = json.loads(content)
                    # 验证cookie是否过期
                    create_time_stamp = cookie_storage['create_time_stamp']

                    if time.time() - create_time_stamp > 1296010:
                        # cookie过期了
                        self.__cookie = ""
                    else:
                        # 判断cookie生成时间是否超过1天
                        if time.time() - create_time_stamp > 86400:
                            # 更新cookie
                            # Todo login_refresh接口返回cookie好像少一些值
                            # self.request("/login/refresh", {"cookie": cookie_storage['cookie'], "timestamp": time.time()})
                            self.cookie = cookie_storage['cookie']
                        else:
                            self.__cookie = cookie_storage['cookie']
                except json.JSONDecodeError and KeyError:
                    self.__cookie = ""
            else:
                self.__cookie = ""  # 如果没有cookie文件，就设置为空

        return self.__cookie

    @cookie.setter
    def cookie(self, value):
        if value is None:
            self.__cookie = ""
            return

        "判断cookie是否合法, 简单检查一下关键的键"
        necessary_keys = ["__csrf", "MUSIC_A_T", "MUSIC_R_T"]
        cookie_dict = prase_cookie_str(value)
        for key in necessary_keys:
            if cookie_dict.get(key) is None:
                raise Exception(f"cookie is illegal, missing key: {key}.")

        self.__cookie = value
        with open("cookie_storage", "w+", encoding='utf-8') as f:
            f.write(json.dumps({"cookie": value, "create_time_stamp": time.time()}, indent=2, ensure_ascii=False))

    @property
    def ip(self):
        if self.__ip is None:
            self.__ip = self.get_local_ip()
        return self.__ip

    def call_api(self, name, query):
        request_param = self.ctx.call('NeteaseCloudMusicApi.beforeRequest', name, query)  # 拿到请求头和请求参数

        # Todo 了解 py_mini_racer 返回没有自动编码 而 node可以
        param_data = {}
        if request_param["data"] != "":
            for item in request_param["data"].split("&"):
                # param_data[item.split("=")[0]] = urllib.parse.quote(item.split("=")[1], safe='') # 不需要编码后反而出错
                param_data[item.split("=")[0]] = item.split("=")[1]

        if request_param.get("method") == "GET":
            response = requests.get(request_param["url"], params=param_data, headers=request_param["headers"])
        else:
            response = requests.post(request_param["url"], data=param_data, headers=request_param["headers"])

        try:
            data = json.loads(response.text)
        except json.JSONDecodeError:
            data = response.text

        response_result = {
            "headers": dict(response.headers),
            "data": data,
            "status": response.status_code,
        }

        result = self.ctx.call('NeteaseCloudMusicApi.afterRequest',
                               json.dumps(response_result),
                               request_param.get('crypto', None),
                               request_param['apiName'])  # 拿到请求结果

        return result

    def playlist_track_all(self, query):
        """
        获取歌单全部歌曲
        :param query:
        :return:
        """

        detail_query = {"id": query.get("id"), "cookie": query.get("cookie"), "realIP": query.get("realIP")}

        result = self.call_api("/playlist/detail", detail_query)

        track_all_query = {"detail_result": json.dumps(result), "cookie": query.get("cookie"),
                           "realIP": query.get("realIP")}
        if query.get("limit"):
            track_all_query["limit"] = query.get("limit")
        if query.get("offset"):
            track_all_query["offset"] = query.get("offset")

        result = self.call_api("/playlist/track/all", track_all_query)
        return result

    def inner_version(self, query):
        """
        获取所使用的 NeteaseCloudMusicApi 和 NeteaseCloudMusicApi_V8 版本号
        :param query:
        :return:
        """
        result = self.ctx.call('NeteaseCloudMusicApi.inner_version')
        return result

    def login_cellphone(self, query):
        """
        手机号登录
        :param query:
        :return:
        """
        result = self.call_api("/login/cellphone", query)

        # 自动 更新cookie
        if result["code"] == 200:
            if result.get("data").get("cookie"):
                # cookie_str = format_cookie_str(result.get("data").get("cookie"))
                cookie_str = result.get("data").get("cookie")
                result["data"]["cookie"] = cookie_str
                self.cookie = cookie_str
        return result

    def login_refresh(self, query):
        """
        刷新登录状态
        :param query:
        :return:
        """
        result = self.call_api("/login/refresh", query)

        # 自动 更新cookie
        # if result["code"] == 200:
        #     if result.get("data").get("cookie"):
        #         # cookie_str = format_cookie_str(result.get("data").get("cookie"))
        #         cookie_str = result.get("data").get("cookie")
        #         result["data"]["cookie"] = cookie_str
        #         pprint(cookie_str)
        #         self.cookie = cookie_str
        return result
