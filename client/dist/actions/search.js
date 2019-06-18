"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restState = exports.changeHistory = exports.showResult = exports.triggerShowSearchBar = undefined;
exports.setSearchHistory = setSearchHistory;
exports.fetchSearchData = fetchSearchData;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _search = require("../constants/search.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var triggerShowSearchBar = exports.triggerShowSearchBar = (0, _index3.createAction)(_search.SHOW_SEARCH_BAR);
var showResult = exports.showResult = (0, _index3.createAction)(_search.SHOW_RESULT, function (data) {
  return data;
});
var changeHistory = exports.changeHistory = (0, _index3.createAction)(_search.CHANGE_HISTORY, function (data) {
  return data;
});
var restState = exports.restState = (0, _index3.createAction)(_search.RESET_STATE);

var actionMap = {
  requestSearch: (0, _index3.createAction)(_search.REQUEST_SEARCH_RESULT, function (data) {
    return data;
  }),
  receiveSearch: (0, _index3.createAction)(_search.RECEIVE_SEARCH_RESULT, function (data) {
    return data;
  }),
  receiveSearchError: (0, _index3.createAction)(_search.RECEIVE_SEARCH_ERROR, function (data) {
    return data;
  }),
  receiveShowNotFind: (0, _index3.createAction)(_search.SHOW_NOT_FIND)
};

function setSearchHistory() {
  var _this = this;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res, history;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index2.default.getStorage({ key: 'search_history' });

            case 3:
              res = _context.sent;
              history = res.data;

              if (data.value && data.type && data.type === 'add' && history.indexOf(data.value) === -1) {
                history.unshift(data.value);
              } else if (data.value && data.type && data.type === 'add' && history.indexOf(data.value) > -1) {
                history.splice(history.indexOf(data.value), 1);
                history.unshift(data.value);
              } else if (history && data.value && data.type && data.type === 'delete' && history.indexOf(data.value) > -1) {
                history.splice(data.value, 1);
              }
              if (history.length > 50) {
                history = history.splice(0, 50);
              }

              _index2.default.setStorage({
                key: 'search_history',
                data: history,
                success: function success() {
                  dispatch(changeHistory(history));
                }
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

              console.log('操作历史搜索失败');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 10]]);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function fetchSearchData(data) {
  var _this2 = this;

  _index2.default.showLoading({ title: '加载中...' });
  data.page = data.page || 1;
  data['pageSize'] = 10;
  console.log(data);
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              dispatch(actionMap['requestSearch']());
              _context2.next = 4;
              return _index2.default.cloud.callFunction({
                name: 'search',
                data: {
                  func: 'getList',
                  data: data
                }
              });

            case 4:
              res = _context2.sent;


              if (res.result.data && res.result.data.count) {
                dispatch(actionMap['receiveSearch'](res.result.data));
              } else {
                dispatch(actionMap['receiveShowNotFind']());
              }
              _index2.default.hideLoading();
              _context2.next = 14;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

              console.log(_context2.t0);
              dispatch(actionMap['receiveSearchError']());
              _index2.default.hideLoading();

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 9]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}