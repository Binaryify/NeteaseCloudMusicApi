'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var origin = 'http://music.163.com';

var globalOption = {
    headers: {
        'Origin': origin,
        'Referer': origin,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var api = {
    search: function search() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
        var limit = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
        var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        var option = deepCopy(globalOption);
        var url = origin + '/api/search/suggest/web';
        var body = 's=' + name + '&limit=' + limit + '&type=1&offset=' + offset;
        var method = 'POST';
        Object.assign(option, { url: url, body: body, method: method });
        (0, _request2.default)(option, callback);
    },
    song: function song(id) {
        var option = deepCopy(globalOption);
        var url = origin + '/api/song/detail?ids=%5B' + id + '%5d';
        var method = 'GET';
        Object.assign(option, { url: url, method: method });
        (0, _request2.default)(option, callback);
    },
    lrc: function lrc(id) {
        var lv = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

        var option = deepCopy(globalOption);
        var url = origin + '/api/song/lyric?lv=' + lv + '&id=' + id;
        var method = 'GET';
        Object.assign(option, { url: url, method: method });
        (0, _request2.default)(option, callback);
    }
};
function callback(error, response, body) {
    // console.log('callback')
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(JSON.stringify(info, '', 2));
    }
}
exports.api = api;
