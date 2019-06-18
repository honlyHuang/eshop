"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _detail = require("../constants/detail.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var detailData = {
  sku: {},
  cartInfo: [],
  cartNum: 0,
  isFetching: false
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _detail.REQUEST_DETAIL_CART, function (state) {
  return _extends({}, state, {
    isFetching: true
  });
}), _defineProperty(_handleActions, _detail.RECEIVE_DETAIL_CART, function (state, action) {
  var cartNum = action.payload.cartNum;

  return _extends({}, state, {
    cartNum: cartNum,
    isFetching: false
  });
}), _defineProperty(_handleActions, _detail.REQUEST_DETAIL_SKU, function (state) {
  return _extends({}, state, {
    isFetching: true
  });
}), _defineProperty(_handleActions, _detail.RECEIVE_DETAIL_SKU, function (state, action) {
  var sku = action.payload;
  return _extends({}, state, {
    sku: sku,
    isFetching: false
  });
}), _defineProperty(_handleActions, _detail.REQUEST_DETAIL_ADD_CART, function (state) {
  return _extends({}, state, {
    isFetching: true
  });
}), _defineProperty(_handleActions, _detail.RECEIVE_DETAIL_ADD_CART, function (state, action) {
  var cartNum = action.payload.cartNum;

  return _extends({}, state, {
    cartNum: cartNum,
    isFetching: false
  });
}), _handleActions), _extends({}, detailData));