from pprint import pprint


def format_cookie_str(cookie_str: str) -> str:
    """
    格式化cookie字符串
    功能
        处理以逗号分割的cookie字符串
        删除max-age为0的cookie
    注意：
        传入cookie字符串必须是以 逗号+空格 或 分号+空格 分割的规范cookie字符串
    :param cookie_str:
    :return: 格式化后的cookie str
    """

    if not cookie_str:
        return ""

    # 解析cookie字符串
    cookie_dict = prase_cookie_str(cookie_str)

    cookie_valid_dict = {}
    # 删除max-age为0的cookie
    for item in cookie_dict.keys():
        max_age = cookie_dict[item].get("Max-Age")
        if max_age:
            max_age = int(max_age)
            if max_age != 0:
                cookie_valid_dict[item] = cookie_dict[item]

    # 重新拼接cookie字符串
    cookie = ""
    for item in cookie_valid_dict.keys():
        cookie += item + "=" + cookie_valid_dict[item]["value"] + "; "
        for key in cookie_valid_dict[item].keys():
            if key != "value":
                cookie += key + "=" + cookie_valid_dict[item][key] + "; "

    return cookie[: -2]


def prase_cookie_str(cookie_str: str) -> dict:
    """
    解析cookie字符串
    功能
        处理以逗号分割的cookie字符串
    注意：
        传入cookie字符串必须是以 逗号+空格 或 分号+空格 分割的规范cookie字符串
    :param cookie_str:
    :return: cookie dict
    """
    if not cookie_str:
        return {}

    # 解决用逗号分割的问题
    cookie_part = []
    for item in cookie_str.split(", "):
        cookie_part.extend(item.split("; "))

    cookies = []
    for item in cookie_part:
        if "=" not in item:
            # 属于上一个cookie的一部分
            cookies[-1] = cookies[-1] + item
        else:
            cookies.append(item)

    cookie_dict = {}

    current_name = ""
    for cookie in cookies:
        # print(cookie)
        if cookie[-1] == "=":
            name = cookie[:-1]
            value = ""
        else:
            part = cookie.split("=")
            name = part[0]
            value = part[1]

        if name in ["Max-Age", "Expires", "Path", "Domain"]:
            cookie_dict[current_name][name] = value
        else:
            cookie_dict[name] = {"value": value}
            current_name = name

    return cookie_dict


if __name__ == '__main__':
    cookie = ("MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/openapi/clientlog; Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, "
              "02 Jan 2092 11:39:38 GMT; Path=/wapi/feedback; Domain=.music.163.com, __remember_me=true; "
              "Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/; Domain=.music.163.com, "
              "MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/api/feedback; "
              "Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/eapi/clientlog; Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, "
              "02 Jan 2092 11:39:38 GMT; Path=/api/clientlog; Domain=.music.163.com, MUSIC_R_T=1579622000495; "
              "Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/wapi/feedback; Domain=.music.163.com, "
              "MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/weapi/clientlog; "
              "Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/neapi/feedback; Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, "
              "02 Jan 2092 11:39:38 GMT; Path=/eapi/clientlog; Domain=.music.163.com, MUSIC_R_T=1579622000495; "
              "Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/api/feedback; Domain=.music.163.com, "
              "MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/weapi/feedback; "
              "Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/eapi/feedback; Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, "
              "02 Jan 2092 11:39:38 GMT; Path=/neapi/clientlog; Domain=.music.163.com, MUSIC_R_T=1579622000495; "
              "Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/wapi/clientlog; Domain=.music.163.com, "
              "MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/wapi/clientlog; "
              "Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/weapi/feedback; Domain=.music.163.com, NMTID=00OLqRn-wykrFFXdElLpZA3_-aaQtIAAAGMbJSp9A; "
              "Max-Age=315360000; Expires=Mon, 12 Dec 2033 08:25:31 GMT; Path=/; Domain=music.163.com, "
              "__csrf=4d5e515015723fd3d7edaa5b05f35b4d; Max-Age=1296010; Expires=Sat, 30 Dec 2023 08:25:41 GMT; Path=/; "
              "Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/neapi/clientlog; Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, "
              "02 Jan 2092 11:39:38 GMT; Path=/openapi/clientlog; Domain=.music.163.com, MUSIC_A_T=1579621885297; "
              "Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/eapi/feedback; Domain=.music.163.com, "
              "MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/weapi/clientlog; "
              "Domain=.music.163.com, MUSIC_R_T=1579622000495; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; "
              "Path=/api/clientlog; Domain=.music.163.com, MUSIC_SNS=; Max-Age=0; Expires=Fri, 15 Dec 2023 08:25:31 GMT; "
              "Path=/, "
              "MUSIC_U=00CCEEF2F7A9825637C9869A455B5CA8E009D905415134A7EDAC2E404A940B2D58BFF7129A413193E9A8FD6D1D497E1E8E9023611BA91D2CB28FA94B53DBE4C42699A30FF1448C8EFAF5B00E73ADD353C52F2E004C094AEAC4BA4D83C6FFBB4CD532DEEAEA8D5584E69AC78110BBA682829C263DA72F5AA290AD826A47F640CA3903AC652E4DDE946ACC4EB8A63E5853FA695B480A919CF84498B7084C5CA9A91297F2CF5AF45C2D545AC0D5C03A1641306BAC0FB6FFD57BC653A91F2483FB52BFE85DE39280B012BC036DF244883D9700480E5FDDCD5A417C60241AE08CD6AA84BFC1C8890AE4A08286144D9D1146E33C67CF7797CDB5A961C85DB5AC492B232601D80D4DB07E4F170F635ABC01E080B4D32408FA0698DAD95AD80CDB99F2F672638048F5116214319175B596BF68B2A7A0269746EABFD919D62C165353725E6B1253A7C5D6774D453DDDCC28524D3378; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/; Domain=.music.163.com, MUSIC_A_T=1579621885297; Max-Age=2147483647; Expires=Wed, 02 Jan 2092 11:39:38 GMT; Path=/neapi/feedback; Domain=.music.163.com")
    pprint(prase_cookie_str(cookie))
