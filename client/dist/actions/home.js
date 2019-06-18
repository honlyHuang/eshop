"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveHomeError = exports.receiveHome = exports.requestHome = undefined;
exports.fetchIndexList = fetchIndexList;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _home = require("../constants/home.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var requestHome = exports.requestHome = (0, _index3.createAction)(_home.REQUEST_HOME, function () {
  return null;
});
var receiveHome = exports.receiveHome = (0, _index3.createAction)(_home.RECEIVE_HOME, function (data) {
  return data;
});
var receiveHomeError = exports.receiveHomeError = (0, _index3.createAction)(_home.RECEIVE_HOME_ERROR, function () {
  return null;
});

function fetchIndexList() {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestHome());
              _context.prev = 1;


              _index2.default.showNavigationBarLoading();
              _context.next = 5;
              return _index2.default.cloud.callFunction({
                name: 'shop',
                data: {
                  func: 'getInformation'
                }
              });

            case 5:
              res = _context.sent;

              if (!res.result) {
                _context.next = 11;
                break;
              }

              dispatch(receiveHome(res.result));
              _index2.default.hideNavigationBarLoading();
              _context.next = 15;
              break;

            case 11:
              _index2.default.hideNavigationBarLoading();
              dispatch(receiveHomeError({}));
              _context.next = 15;
              return _index2.default.showToast({
                icon: 'none',
                title: '获取失败，请重试！'
              });

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);

              console.log(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 17]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}