"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _shop = require("../constants/shop.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  title: '',
  floors: []
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _shop.REQUEST_SHOP, function (state) {
  return _extends({}, state);
}), _defineProperty(_handleActions, _shop.RECEIVE_SHOP, function (state, action) {
  var data = action.payload;
  return _extends({}, state, data);
}), _defineProperty(_handleActions, _shop.RESET_SHOP, function (state) {
  return {
    title: '',
    floors: []
  };
}), _handleActions), _extends({}, INITIAL_STATE));