import json
import pkg_resources

# 载入配置
resource_path = pkg_resources.resource_filename(__name__, 'config.json')

# 不被支持的接口
exclude = ["/request/reference", "/avatar/upload", "/cloud", "/playlist/cover/update", "/voice/upload",
           "/register/anonimous", "/verify/getQr"]

with open(resource_path, 'r', encoding='utf-8') as f:
    config = json.loads(f.read())


def api_help(name: str = None) -> str:
    """
    获取接口帮助
    :param name: 接口名称
    :return:
    """
    if name is None:
        result_str = ("from NeteaseCloudMusic import NeteaseCloudMusicApi, api_help, api_list\n\n"
                      "netease_cloud_music_api = NeteaseCloudMusicApi()  # 初始化API\n"
                      "netease_cloud_music_api.cookie = YOUR_COOKIE  # 设置cookie\n"
                      "response = netease_cloud_music_api.request(apiName, queryDict)  # 调用接口\n\n"
                      "# Use ”help(apiName)“ to view detailed information about the interface\n"
                      "# Use ”api_list()“ to view the interface list")
    elif name in api_list():
        result_str = f'name: {name}\n    {config[name]["name"]}\n    {config[name]["explain"]}\n\n'

        result_str += "query example: \n"
        for example in config[name]["example"]:
            index = config[name]["example"].index(example)
            result_str += f'{json.dumps(config[name]["example"][index]["query"], indent=2, ensure_ascii=False)}\n\n'
    else:
        result_str = f'apiName: {name} not found，please use ”api_list()“ to view the interface list'

    return result_str


def api_list():
    """
    获取接口列表
    :return:
    """
    return [item for item in list(config.keys()) if item not in exclude]
