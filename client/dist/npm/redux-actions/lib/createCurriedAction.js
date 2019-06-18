"use strict";

exports.__esModule = true;
exports.default = undefined;

var _justCurryIt = _interopRequireDefault(require("../../just-curry-it/index.js"));

var _createAction = _interopRequireDefault(require("./createAction.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = function _default(type, payloadCreator) {
  return (0, _justCurryIt.default)((0, _createAction.default)(type, payloadCreator), payloadCreator.length);
};

exports.default = _default;