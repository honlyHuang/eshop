"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _handleActions;

var _index = require("../../npm/redux-actions/lib/index.js");

var _list = require("../../constants/order/list.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var list = {
  isFetchingList: false,
  orderList: []
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _list.REQUEST_ORDER_LIST, function (state) {
  return Object.assign({}, state, {
    isFetchingList: true
  });
}), _defineProperty(_handleActions, _list.RECEIVE_ORDER_LIST, function (state, action) {
  var data = action.payload;
  return Object.assign({}, state, {
    isFetchingList: false,
    orderList: data
  });
}), _handleActions), _extends({}, list));