"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepCopy = function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
};

exports.deepCopy = deepCopy;