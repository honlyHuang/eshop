"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _balance = require("../constants/balance.js");

var _util = require("../utils/util.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var balanceData = {
  isNeedBanlance: true,
  payCommodities: [],
  freightPrice: 14,
  totalPrice: 0,
  allPrice: 0,
  payNum: 0,
  isFetching: false
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _balance.REQUEST_BALANCE_INFO, function (state) {
  return _extends({}, state, {
    isFetching: true
  });
}), _defineProperty(_handleActions, _balance.RECEIVE_BALANCE_INFO, function (state, action) {
  var _action$payload = action.payload,
      payCommodities = _action$payload.payCommodities,
      isNeedBanlance = _action$payload.isNeedBanlance,
      payNum = _action$payload.payNum;

  var totalPrice = action.payload.totalPrice;
  var allPrice = (0, _util.parseMoney)(totalPrice + state.freightPrice);
  totalPrice = (0, _util.parseMoney)(totalPrice);
  return _extends({}, state, {
    isNeedBanlance: isNeedBanlance,
    payCommodities: payCommodities,
    totalPrice: totalPrice,
    allPrice: allPrice,
    payNum: payNum,
    isFetching: false
  });
}), _defineProperty(_handleActions, _balance.REQUEST_BALANCE_ORDER, function (state) {
  return Object.assign({}, state, {
    isFetching: true
  });
}), _defineProperty(_handleActions, _balance.RECEIVE_BALANCE_ORDER, function (state) {
  return Object.assign({}, state, {
    isFetching: false
  });
}), _handleActions), _extends({}, balanceData));