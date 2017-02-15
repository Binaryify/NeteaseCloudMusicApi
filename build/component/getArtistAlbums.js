'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtistAlbums = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../config');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArtistAlbums = function getArtistAlbums(id, callback) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/artist/albums/' + id + '?offset=' + offset + '&limit=' + limit;
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
exports.getArtistAlbums = getArtistAlbums;