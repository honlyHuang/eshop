"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionMap = undefined;
exports.fetchShopData = fetchShopData;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _shop = require("../constants/shop.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var actionMap = exports.actionMap = {
  shopRequest: (0, _index3.createAction)(_shop.REQUEST_SHOP),
  shop: (0, _index3.createAction)(_shop.RECEIVE_SHOP, function (data) {
    return data;
  })
};

function fetchShopData(data) {
  var _this = this;

  var venderId = data.venderId;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res, shopData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              dispatch(actionMap['shopRequest']());

              res = void 0;
              _context.next = 5;
              return _index2.default.cloud.callFunction({
                name: 'shop',
                data: {
                  func: 'getShop',
                  data: venderId
                }
              });

            case 5:
              res = _context.sent;


              if (res.result) {
                shopData = res.result.data;

                dispatch(actionMap['shop'](shopData));
              } else {
                _index2.default.redirectTo({ url: '/pages/404/404' });
              }
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);
              _index2.default.redirectTo({ url: '/pages/404/404' });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}