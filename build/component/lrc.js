'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lrc = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../config');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lrc = function lrc(id) {
  var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var lv = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/song/lyric?lv=' + lv + '&id=' + id;
  var method = 'GET';
  Object.assign(option, { url: url, method: method });
  (0, _request2.default)(option, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var info = JSON.parse(body);
      callback && callback(JSON.stringify(info, '', 2));
    } else {
      console.error(err);
    }
  });
};
exports.lrc = lrc;