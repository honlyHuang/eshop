"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _search = require("../constants/search.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var searchData = {
  historyWords: ['品牌', '衣服'],
  hotWords: ['品牌', '衣服'],
  searchResult: {
    wares: []
  },
  loading: false,
  cart: null,
  showSearchBar: true,
  showSearchResult: false,
  showSearchHot: true,
  showSearchHistory: true,
  showErrorProblem: false,
  showNotFind: false
};
exports.default = (0, _index.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _search.SHOW_SEARCH_BAR, function (state) {
  return _extends({}, state, {
    showSearchBar: !state.showSearchBar
  });
}), _defineProperty(_handleActions, _search.REQUEST_SEARCH_RESULT, function (state, action) {
  if (state.searchResult.page && state.searchResult.page === 1) {
    state.searchResult = {
      wares: []
    };
  }
  return _extends({}, state, {
    loading: true,
    showSearchBar: true,
    showSearchResult: true,
    showSearchHot: false,
    showSearchHistory: false,
    showErrorProblem: false,
    showNotFind: false
  });
}), _defineProperty(_handleActions, _search.RECEIVE_SEARCH_RESULT, function (state, action) {
  return _extends({}, state, {
    searchResult: action.payload
  });
}), _defineProperty(_handleActions, _search.RECEIVE_SEARCH_ERROR, function (state) {
  return _extends({}, state, {
    showErrorProblem: true
  });
}), _defineProperty(_handleActions, _search.CHANGE_HISTORY, function (state, action) {
  return _extends({}, state, {
    historyWords: action.payload
  });
}), _defineProperty(_handleActions, _search.SHOW_RESULT, function (state, action) {
  var isShow = action.payload;
  return _extends({}, state, {
    showSearchResult: isShow,
    showSearchHot: !isShow,
    showSearchHistory: !isShow
  });
}), _defineProperty(_handleActions, _search.SHOW_NOT_FIND, function (state) {
  return _extends({}, state, {
    showNotFind: true
  });
}), _defineProperty(_handleActions, _search.RESET_STATE, function () {
  return searchData;
}), _handleActions), _extends({}, searchData));