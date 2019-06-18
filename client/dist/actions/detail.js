"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCart = fetchCart;
exports.fetchSkuData = fetchSkuData;
exports.fetchAddCart = fetchAddCart;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _cart = require("../constants/cart.js");

var _index4 = require("../utils/index.js");

var _detail = require("../constants/detail.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var aMap = {
  REQUEST_DETAIL_CART: (0, _index3.createAction)(_detail.REQUEST_DETAIL_CART, function (data) {
    return data;
  }),
  RECEIVE_DETAIL_CART: (0, _index3.createAction)(_detail.RECEIVE_DETAIL_CART, function (data) {
    return data;
  }),
  REQUEST_DETAIL_SKU: (0, _index3.createAction)(_detail.REQUEST_DETAIL_SKU, function (data) {
    return data;
  }),
  RECEIVE_DETAIL_SKU: (0, _index3.createAction)(_detail.RECEIVE_DETAIL_SKU, function (data) {
    return data;
  }),
  REQUEST_DETAIL_ADD_CART: (0, _index3.createAction)(_detail.REQUEST_DETAIL_ADD_CART, function (data) {
    return data;
  }),
  RECEIVE_DETAIL_ADD_CART: (0, _index3.createAction)(_detail.RECEIVE_DETAIL_ADD_CART, function (data) {
    return data;
  })
};

function fetchCart() {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res, _openId, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(aMap[_detail.REQUEST_DETAIL_CART]());

              res = void 0;
              _context.next = 4;
              return (0, _index4.getOpenId)();

            case 4:
              _openId = _context.sent;
              _context.next = 7;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'getCart',
                  data: {
                    _id: _openId
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_detail.RECEIVE_DETAIL_CART](getState().detail));
              });

            case 7:
              res = _context.sent;
              data = res.result.data;

              if (data.cartNum >= 0) {
                dispatch(aMap[_detail.RECEIVE_DETAIL_CART](data));
              } else {
                dispatch(aMap[_detail.RECEIVE_DETAIL_CART](getState().detail));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function fetchSkuData(skuId) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res, skuData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              dispatch(aMap[_detail.REQUEST_DETAIL_SKU]());

              res = void 0;
              _context2.next = 5;
              return _index2.default.cloud.callFunction({
                name: 'shop',
                data: {
                  func: 'getSku',
                  data: skuId
                }
              });

            case 5:
              res = _context2.sent;


              if (res.result) {
                skuData = res.result.data;

                dispatch(aMap[_detail.RECEIVE_DETAIL_SKU](skuData));
              } else {
                _index2.default.redirectTo({ url: '/pages/404/404' });
              }
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

              console.log(_context2.t0);
              _index2.default.redirectTo({ url: '/pages/404/404' });

            case 13:
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

function fetchAddCart(skus) {
  var _this3 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
      var res, _openId, data;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(aMap[_detail.REQUEST_DETAIL_ADD_CART]());

              res = void 0;
              _context3.next = 4;
              return (0, _index4.getOpenId)();

            case 4:
              _openId = _context3.sent;
              _context3.next = 7;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'editCart',
                  data: {
                    _id: _openId,
                    type: _cart.operate['ADD'],
                    skus: skus
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_detail.RECEIVE_DETAIL_ADD_CART](getState().detail));
              });

            case 7:
              res = _context3.sent;
              data = res.result.data;

              if (data.length !== 0) {
                dispatch(aMap[_detail.RECEIVE_DETAIL_ADD_CART](data));
                _index2.default.showToast({
                  title: '添加购物车成功'
                });
              } else {
                dispatch(aMap[_detail.RECEIVE_DETAIL_CART](getState().detail));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
}