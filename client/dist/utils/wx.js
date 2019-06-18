"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSettingStatus = exports.getWxUserData = undefined;

var getWxUserData = exports.getWxUserData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userData, _userData;

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
            _userData = _context.sent;
            return _context.abrupt("return", _userData);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);

            console.log(_context.t0);
            console.log('微信登录或用户接口故障');
            return _context.abrupt("return", null);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  return function getWxUserData() {
    return _ref.apply(this, arguments);
  };
}();

var checkSettingStatus = exports.checkSettingStatus = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scope, _ref2) {
    var title = _ref2.title,
        content = _ref2.content;

    var setting, authSetting, res, _setting, _authSetting;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index2.default.getSetting();

          case 2:
            setting = _context2.sent;
            authSetting = setting.authSetting;

            if ((0, _util.isEmptyObject)(authSetting)) {
              _context2.next = 19;
              break;
            }

            if (!(authSetting[scope] === false)) {
              _context2.next = 19;
              break;
            }

            _context2.next = 8;
            return _index2.default.showModal({
              title: title,
              content: content,
              showCancel: true
            });

          case 8:
            res = _context2.sent;

            if (!res.confirm) {
              _context2.next = 19;
              break;
            }

            _context2.next = 12;
            return _index2.default.openSetting();

          case 12:
            _setting = _context2.sent;
            _authSetting = _setting.authSetting;

            if ((0, _util.isEmptyObject)(_authSetting)) {
              _context2.next = 19;
              break;
            }

            if (!(_authSetting[scope] === true)) {
              _context2.next = 19;
              break;
            }

            _context2.next = 18;
            return getWxUserData();

          case 18:
            return _context2.abrupt("return", _context2.sent);

          case 19:
            return _context2.abrupt("return", null);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function checkSettingStatus(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _globalData = require("../constants/globalData.js");

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }