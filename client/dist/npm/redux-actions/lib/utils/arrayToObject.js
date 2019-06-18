"use strict";

exports.__esModule = true;
exports.default = undefined;

var _default = function _default(array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
};

exports.default = _default;