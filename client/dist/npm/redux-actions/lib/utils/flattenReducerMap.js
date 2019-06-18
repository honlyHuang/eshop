"use strict";

exports.__esModule = true;
exports.default = undefined;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject.js"));

var _isMap = _interopRequireDefault(require("./isMap.js"));

var _hasGeneratorInterface = _interopRequireDefault(require("./hasGeneratorInterface.js"));

var _flattenWhenNode = _interopRequireDefault(require("./flattenWhenNode.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = (0, _flattenWhenNode.default)(function (node) {
  return ((0, _isPlainObject.default)(node) || (0, _isMap.default)(node)) && !(0, _hasGeneratorInterface.default)(node);
});

exports.default = _default;