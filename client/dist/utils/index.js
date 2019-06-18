"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsAuth = exports.getOpenId = exports.getUserInfo = undefined;

var getUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userData, userData1;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userData = (0, _globalData.getGlobalData)('userData');

            if (!userData) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", userData);

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return _index2.default.getUserInfo();

          case 6:
            userData1 = _context.sent;
            return _context.abrupt("return", userData1);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);

            console.log(_context.t0);
            console.log('微信登录或用户接口故障');
            return _context.abrupt("return", {});

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  return function getUserInfo() {
    return _ref.apply(this, arguments);
  };
}();

var getOpenId = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var openId, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            openId = void 0;

            try {
              openId = _index2.default.getStorageSync('taro_demo_openid');
            } catch (error) {
              console.log(error);
            }

            if (!openId) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", openId);

          case 6:
            _context2.next = 8;
            return _index2.default.cloud.callFunction({
              name: 'user',
              data: {
                func: 'getOpenId'
              }
            });

          case 8:
            res = _context2.sent;

            openId = res.result.data.openId;
            _index2.default.setStorage({ key: 'taro_demo_openid', data: openId });
            return _context2.abrupt("return", openId);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getOpenId() {
    return _ref2.apply(this, arguments);
  };
}();

var getIsAuth = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var openid, _ref4, userInfo, isAuth;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getOpenId();

          case 2:
            openid = _context3.sent;
            _context3.next = 5;
            return getUserInfo();

          case 5:
            _ref4 = _context3.sent;
            userInfo = _ref4.userInfo;
            isAuth = false;

            if (userInfo) {
              userInfo.isAuth = true;
              userInfo._id = openid;
              isAuth = true;
            } else {
              userInfo = {
                _id: openid,
                isAuth: false
              };
            }
            _context3.next = 11;
            return _index2.default.cloud.callFunction({
              name: 'user',
              data: {
                func: 'addUser',
                data: userInfo
              },
              success: function success(res) {
                console.log('addUser success:', res);
              },
              fail: function fail(res) {
                console.log('addUser fail:', res);
              }
            });

          case 11:
            return _context3.abrupt("return", isAuth);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getIsAuth() {
    return _ref3.apply(this, arguments);
  };
}();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _globalData = require("../constants/globalData.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.getUserInfo = getUserInfo;
exports.getOpenId = getOpenId;
exports.getIsAuth = getIsAuth;