"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../../npm/redux-actions/lib/index.js");

var _detail = require("../../constants/order/detail.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var detail = {
  isFetchingDetail: false,
  all: {}
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _detail.REQUEST_ORDER_DETAIL, function (state) {
  return Object.assign({
    isFetchingDetail: true
  }, state);
}), _defineProperty(_handleActions, _detail.RECEIVE_ORDER_DETAIL, function (state, action) {
  var res = action.payload;
  return _extends({}, state, {
    isFetchingDetail: false,
    all: res
  });
}), _defineProperty(_handleActions, _detail.REQUEST_ORDER_CANCEL, function (state) {
  return _extends({}, state, {
    isFetchingDetail: true
  });
}), _defineProperty(_handleActions, _detail.RECEIVE_ORDER_CANCEL, function (state) {
  return _extends({}, state, {
    isFetchingDetail: false
  });
}), _handleActions), _extends({}, detail));