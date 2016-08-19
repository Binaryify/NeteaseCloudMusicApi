'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _search = require('./component/search');

var _song = require('./component/song');

var _lrc = require('./component/lrc');

var _getArtistAlbums = require('./component/getArtistAlbums');

var _getAlbums = require('./component/getAlbums');

var _getPlaylists = require('./component/getPlaylists');

var api = {
  search: _search.search,
  song: _song.song,
  lrc: _lrc.lrc,
  getArtistAlbums: _getArtistAlbums.getArtistAlbums,
  getAlbums: _getAlbums.getAlbums,
  getPlaylists: _getPlaylists.getPlaylists
};
exports.api = api;