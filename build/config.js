'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var origin = 'http://music.163.com';

var globalOption = {
  headers: {
    'Origin': origin,
    'Referer': origin,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  proxy: false
};

exports.origin = origin;
exports.globalOption = globalOption;