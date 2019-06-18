"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.request = request;
exports.receive = receive;
exports.fetchOrderList = fetchOrderList;
exports.fetchOrderById = fetchOrderById;
exports.fetchCancelOrder = fetchCancelOrder;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _util = require("../utils/util.js");

var _index4 = require("../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var orderMap = {
  orderList: 'ORDER_LIST',
  orderDetail: 'ORDER_DETAIL',
  orderCancel: 'ORDER_CANCEL'
};

function request(type) {
  return (0, _index3.createAction)("REQUEST_" + orderMap[type])();
}

function receive(type, data) {
  return (0, _index3.createAction)("RECEIVE_" + orderMap[type], function (iData) {
    return iData;
  })(data);
}

function fetchOrderList(callback) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res, _openId, data, orderData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _index2.default.showLoading({ title: '加载中...' });
              dispatch(request('orderList'));

              res = void 0;
              _context.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context.sent;
              _context.next = 8;
              return _index2.default.cloud.callFunction({
                name: 'order',
                data: {
                  func: 'getOrder',
                  data: {
                    _id: _openId
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(receive('orderList', getState().orderList));
              });

            case 8:
              res = _context.sent;


              _index2.default.hideLoading();
              data = res.result.data;

              if (data) {
                orderData = handleOrderData(data);

                dispatch(receive('orderList', orderData));
                if (callback) {
                  callback(orderData);
                }
              } else {
                _index2.default.showToast({
                  icon: 'none',
                  title: '请求失败，请重试！'
                });
              }

            case 12:
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

function fetchOrderById(orderId) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var res, _openId, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _index2.default.showLoading({ title: '加载中...' });
              dispatch(request('orderDetail'));
              res = void 0;
              _context2.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context2.sent;
              _context2.next = 8;
              return wx.cloud.callFunction({
                name: 'order',
                data: {
                  func: 'getOrderDetail',
                  data: {
                    _id: _openId,
                    orderId: orderId
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(receive('orderDetail', getState().orderDetail));
              });

            case 8:
              res = _context2.sent;


              _index2.default.hideLoading();
              data = res.result.data;

              if (!(data.length !== 0)) {
                _context2.next = 15;
                break;
              }

              dispatch(receive('orderDetail', data));
              _context2.next = 17;
              break;

            case 15:
              _context2.next = 17;
              return _index2.default.showToast({
                icon: 'none',
                title: '请求失败，请重试！'
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function fetchCancelOrder(oData, callback) {
  var _this3 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
      var res, _openId, data;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _index2.default.showLoading({ title: '加载中...' });
              dispatch(request('orderCancel'));

              res = void 0;
              _context3.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context3.sent;
              _context3.next = 8;
              return wx.cloud.callFunction({
                name: 'order',
                data: {
                  func: 'cancelOrder',
                  data: {
                    _id: _openId,
                    orderId: oData.orderId,
                    cancelReasonText: oData.cancelReasonText
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(receive('orderCancel', getState().orderDetail));
              });

            case 8:
              res = _context3.sent;


              _index2.default.hideLoading();
              data = res.result.data;

              if (!(data.code === 0)) {
                _context3.next = 16;
                break;
              }

              dispatch(receive('orderCancel'));
              callback && callback(data);
              _context3.next = 18;
              break;

            case 16:
              _context3.next = 18;
              return _index2.default.showToast({
                icon: 'none',
                title: '请求失败，请重试！'
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
}

// 将拿到的数据进行处理，方便前端展示
function handleOrderData(data) {
  var newOrderList = data.map(function (item) {
    var venderId = item.skuInfoList[0].venderId;
    var newItem = _extends({}, item);
    newItem.shopInfo = _extends({}, newItem.shopInfo[venderId]);
    var totalGoodsCount = 0;
    var isMulti = false;
    newItem.skuInfoList.forEach(function (sku) {
      totalGoodsCount += sku.num;
    });
    if (newItem.skuInfoList.length > 1) {
      isMulti = true;
      newItem.skuInfoList.splice(2);
    } else {
      newItem.skuItem = newItem.skuInfoList[0];
    }
    newItem.isMulti = isMulti;
    newItem.totalGoodsCount = totalGoodsCount;
    newItem.statusClassName = 'orders_item_status';
    if (newItem.orderState === -1) {
      newItem.orderStateStr = '已取消订单';
      newItem.statusClassName = 'orders_item_status cancel';
    } else if (newItem.orderState === 1) {
      newItem.orderStateStr = '待支付';
      newItem.statusClassName = 'orders_item_status pay';
    }
    newItem.shouldPayPrice = (0, _util.parseMoney)(newItem.shouldPayPrice);
    return newItem;
  });

  return newOrderList;
}