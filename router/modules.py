#!/usr/bin/pyhon3
# -*- coding:utf-8 -*-
import os, shutil


def isJS(files):
    if files == 'module.js':
        return False
    if os.path.splitext(files)[-1] == '.js':
        return True
    return False


if __name__ == '__main__':
    files = os.listdir()
    files = filter(isJS, files)
    with open('module.js', 'w') as file:
        file.write('var modulesExpot = {\n')
    for jsFile in files:
        data = ""
        flag = True
        with open(jsFile)as file:
            chars = file.read()
            char = chars.strip()
            data = char.split('=>')
            data = "function " + data[0].split('=')[-1] + '=>'.join(data[1:])
        data = '"' + os.path.splitext(jsFile)[0] + '":' + data
        if data[-1] == ';':
            data = data[:-1] + ','
        else:
            data += ','
        #  print(data)
        with open('module.js', 'a') as file:
            file.write(data + '\n')
    with open('module.js', 'a') as file:
        file.write('}\n')
        file.write('module.exports = modulesExpot')
