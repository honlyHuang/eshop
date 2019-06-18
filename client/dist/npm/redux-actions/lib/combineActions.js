"use strict";

exports.__esModule = true;
exports.default = combineActions;

var _invariant = _interopRequireDefault(require("../../invariant/invariant.js"));

var _isFunction = _interopRequireDefault(require("./utils/isFunction.js"));

var _isSymbol = _interopRequireDefault(require("./utils/isSymbol.js"));

var _isEmpty = _interopRequireDefault(require("./utils/isEmpty.js"));

var _toString = _interopRequireDefault(require("./utils/toString.js"));

var _isString = _interopRequireDefault(require("./utils/isString.js"));

var _constants = require("./constants.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function isValidActionType(type) {
  return (0, _isString.default)(type) || (0, _isFunction.default)(type) || (0, _isSymbol.default)(type);
}

function isValidActionTypes(types) {
  if ((0, _isEmpty.default)(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  (0, _invariant.default)(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_toString.default).join(_constants.ACTION_TYPE_DELIMITER);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}