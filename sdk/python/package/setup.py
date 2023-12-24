#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Note: To use the 'upload' functionality of this file, you must:
#   $ pipenv install twine --dev

import io
import json
import os
import sys
from shutil import rmtree

from setuptools import find_packages, setup, Command

# Package meta-data.
NAME = 'NeteaseCloudMusic'
DESCRIPTION = '网易云音乐API NeteaseCloudMusicApi项目的 Python SDK'
URL = 'https://github.com/2061360308/NeteaseCloudMusic_PythonSDK'
EMAIL = '2061360308@qq.com'
AUTHOR = '盧瞳'
REQUIRES_PYTHON = '>=3.6.0'
VERSION = '0.1.10'
UPDATA_INFO = ('修复了初次使用时没有cookie导致的一系列问题\n'
               '修复了NeteaseCloudMusicApi.js没有更新的问题\n'
               '添加了对于cookie的判断，现在可以正常判断cookie是否过期了')

# What packages are required for this module to be executed?
REQUIRED = [
    'py_mini_racer', 'requests', 'diskcache'
    # 'requests', 'maya', 'records',
]

# What packages are optional?
EXTRAS = {
    # 'fancy feature': ['django'],
}

# The rest you shouldn't have to touch too much :)
# ------------------------------------------------
# Except, perhaps the License and Trove Classifiers!
# If you do change the License, remember to change the Trove Classifier for that!

here = os.path.abspath(os.path.dirname(__file__))

print("copy README.md start")
with open(os.path.join(here, '../README.md'), 'r', encoding='utf-8') as f:
    README = f.read()
with open(os.path.join(here, 'README.md'), 'w+', encoding='utf-8') as f:
    f.write(README)
print("copy README.md end")

try:
    if os.path.exists(os.path.join(here, '../release_notes.txt')):
        # 优先读取release_notes.txt（工作流自动生成的当前版本的更新内容）
        with open(os.path.join(here, '../release_notes.txt'), 'r', encoding='utf-8') as f:
            changelog = f.read()
    else:
        with io.open(os.path.join(here, '../CHANGELOG.md'), encoding='utf-8') as f:
            changelog = f.read()
except FileNotFoundError:
    changelog = ''

# Import the README and use it as the long-description.
# Note: this will only work if 'README.md' is present in your MANIFEST.in file!
try:
    with io.open(os.path.join(here, 'README.md'), encoding='utf-8') as f:
        long_description = '\n' + "# 更新信息" + "\n" + changelog + '\n' + f.read()
except FileNotFoundError:
    long_description = DESCRIPTION

# print("long_description:", long_description)

print("copy config.json start")
with open(os.path.join(here, '../config.json'), 'r', encoding='utf-8') as f:
    config = json.loads(f.read())

for key in config:
    for example in config[key]['example']:
        if 'result' in example:
            del example['result']
with open(os.path.join(here, 'NeteaseCloudMusic/config.json'), 'w+', encoding='utf-8') as f:
    f.write(json.dumps(config, indent=2, ensure_ascii=False))
print("copy config.json end")

# Load the package's __version__.py module as a dictionary.
about = {}
if not VERSION:
    project_slug = NAME.lower().replace("-", "_").replace(" ", "_")
    with open(os.path.join(here, project_slug, '__version__.py')) as f:
        exec(f.read(), about)
else:
    about['__version__'] = VERSION


class UploadCommand(Command):
    """Support setup.py upload."""

    description = 'Build and publish the package.'
    user_options = []

    @staticmethod
    def status(s):
        """Prints things in bold."""
        print('\033[1m{0}\033[0m'.format(s))

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        try:
            self.status('Removing previous builds…')
            rmtree(os.path.join(here, 'dist'))
        except OSError:
            pass

        self.status('Building Source and Wheel (universal) distribution…')
        os.system('{0} setup.py sdist bdist_wheel --universal'.format(sys.executable))

        sys.exit()


class BuildCommand(Command):
    """Support setup.py build."""

    description = 'Build the package.'
    user_options = []

    @staticmethod
    def status(s):
        """Prints things in bold."""
        print('\033[1m{0}\033[0m'.format(s))

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        try:
            self.status('Removing previous builds…')
            rmtree(os.path.join(here, 'dist'))
        except OSError:
            pass

        self.status('Building Source and Wheel (universal) distribution…')
        os.system('{0} setup.py sdist bdist_wheel --universal'.format(sys.executable))

        sys.exit()


# Where the magic happens:
setup(
    name=NAME,
    version=about['__version__'],
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type='text/markdown',
    author=AUTHOR,
    author_email=EMAIL,
    python_requires=REQUIRES_PYTHON,
    url=URL,
    packages=find_packages(exclude=["tests", "*.tests", "*.tests.*", "tests.*"]),
    # If your package is a single module, use this instead of 'packages':
    # py_modules=['mypackage'],

    # entry_points={
    #     'console_scripts': ['mycli=mymodule:cli'],
    # },
    install_requires=REQUIRED,
    extras_require=EXTRAS,
    include_package_data=True,
    license='MIT',
    classifiers=[
        # Trove classifiers
        # Full list: https://pypi.python.org/pypi?%3Aaction=list_classifiers
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: Implementation :: CPython',
        'Programming Language :: Python :: Implementation :: PyPy'
    ],
    package_data={
        '': ['*.js'],  # 包含所有的.js文件
        '': ['*.json'],  # 包含所有的.json文件
    },
    # $ setup.py publish support.
    cmdclass={
        'upload': UploadCommand,
    },
)
