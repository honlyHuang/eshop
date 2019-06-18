"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _home = require("../constants/home.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var homeData = {
  loading: false,
  floorData: []
};

exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _home.REQUEST_HOME, function (state) {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_handleActions, _home.RECEIVE_HOME, function (state, action) {
  var data = action.payload.data;

  return _extends({}, state, {
    loading: false,
    floorData: data
  });
}), _defineProperty(_handleActions, _home.RECEIVE_HOME_ERROR, function (state) {
  return _extends({}, state);
}), _handleActions), _extends({}, homeData));