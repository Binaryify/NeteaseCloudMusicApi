'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  search: function search() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var limit = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];
    var offset = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    var option = (0, _util.deepCopy)(_config.globalOption);
    var url = _config.origin + '/api/search/suggest/web';
    var form = {
      s: name,
      limit: limit,
      type: 1,
      offset: offset
    };
    var method = 'POST';
    Object.assign(option, { url: url, form: form, method: method });
    (0, _request2.default)(option, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        callback && callback(JSON.stringify(info, '', 2));
      } else {
        console.log(error);
      }
    });
  },
  song: function song(id) {
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var option = (0, _util.deepCopy)(_config.globalOption);
    var url = _config.origin + '/api/song/detail?ids=%5B' + id + '%5d';
    var method = 'GET';
    Object.assign(option, { url: url, method: method });
    (0, _request2.default)(option, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        callback && callback(JSON.stringify(info, '', 2));
      } else {
        console.log(error);
      }
    });
  },
  lrc: function lrc(id) {
    var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var lv = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

    var option = (0, _util.deepCopy)(_config.globalOption);
    var url = _config.origin + '/api/song/lyric?lv=' + lv + '&id=' + id;
    var method = 'GET';
    Object.assign(option, { url: url, method: method });
    (0, _request2.default)(option, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        callback && callback(JSON.stringify(info, '', 2));
      } else {
        console.log(error);
      }
    });
  }
};
exports.api = api;