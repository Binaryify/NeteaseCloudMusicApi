'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../config');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = function search() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var onlySong = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
  var limit = arguments.length <= 3 || arguments[3] === undefined ? 3 : arguments[3];
  var offset = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

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
  (0, _request2.default)(option, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var info = JSON.parse(body);
      var data = void 0;
      if (onlySong) {
        data = info.result.songs;
      } else {
        data = { songs: info.result.songs, mvs: info.result.mvs };
      }
      callback && callback(JSON.stringify(data, '', 2));
    } else {
      console.error(err);
    }
  });
};

exports.search = search;