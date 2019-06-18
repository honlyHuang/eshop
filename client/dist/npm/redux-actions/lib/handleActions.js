"use strict";

exports.__esModule = true;
exports.default = handleActions;

var _reduceReducers = _interopRequireDefault(require("../../reduce-reducers/lib/index.js"));

var _invariant = _interopRequireDefault(require("../../invariant/invariant.js"));

var _isPlainObject = _interopRequireDefault(require("./utils/isPlainObject.js"));

var _isMap = _interopRequireDefault(require("./utils/isMap.js"));

var _ownKeys = _interopRequireDefault(require("./utils/ownKeys.js"));

var _flattenReducerMap = _interopRequireDefault(require("./utils/flattenReducerMap.js"));

var _handleAction = _interopRequireDefault(require("./handleAction.js"));

var _get = _interopRequireDefault(require("./utils/get.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleActions(handlers, defaultState, options) {
  if (options === undefined) {
    options = {};
  }

  (0, _invariant.default)((0, _isPlainObject.default)(handlers) || (0, _isMap.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0, _flattenReducerMap.default)(handlers, options);
  var reducers = (0, _ownKeys.default)(flattenedReducerMap).map(function (type) {
    return (0, _handleAction.default)(type, (0, _get.default)(type, flattenedReducerMap), defaultState);
  });

  var reducer = _reduceReducers.default.apply(undefined, reducers.concat([defaultState]));

  return function (state, action) {
    if (state === undefined) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}