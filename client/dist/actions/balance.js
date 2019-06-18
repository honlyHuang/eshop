"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBalanceData = fetchBalanceData;
exports.fetchGenerateOrder = fetchGenerateOrder;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _balance = require("../constants/balance.js");

var _index4 = require("../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var aMap = {
  REQUEST_BALANCE_INFO: (0, _index3.createAction)(_balance.REQUEST_BALANCE_INFO, function (datas) {
    return datas;
  }),
  RECEIVE_BALANCE_INFO: (0, _index3.createAction)(_balance.RECEIVE_BALANCE_INFO, function (datas) {
    return datas;
  }),
  REQUEST_BALANCE_ORDER: (0, _index3.createAction)(_balance.REQUEST_BALANCE_ORDER, function (datas) {
    return datas;
  }),
  RECEIVE_BALANCE_ORDER: (0, _index3.createAction)(_balance.RECEIVE_BALANCE_ORDER, function (datas) {
    return datas;
  })

  // 获取计算页数据
};function fetchBalanceData() {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res, _openId, data, balanceData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _index2.default.showLoading({ title: '加载中...' }); // 给页面里现实加载中，友好一些
              dispatch(aMap[_balance.REQUEST_BALANCE_INFO]());
              res = void 0;
              _context.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context.sent;
              _context.next = 8;
              return _index2.default.cloud.callFunction({
                name: 'order',
                data: {
                  func: 'getBalance',
                  data: {
                    _id: _openId
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_balance.RECEIVE_BALANCE_INFO](getState().balance));
              });

            case 8:
              res = _context.sent;

              _index2.default.hideLoading(); // 拿到结果后，隐藏加载中提示
              data = res.result.data;

              if (data.length !== 0) {
                balanceData = handleBalanceData(data);

                dispatch(aMap[_balance.RECEIVE_BALANCE_INFO](balanceData));
              } else {
                dispatch(aMap[_balance.RECEIVE_BALANCE_INFO](getState().balance));
                _index2.default.showToast({
                  icon: 'none',
                  title: '请求失败'
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

function fetchGenerateOrder(freightPrice, payType, callback) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var res, _openId, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _index2.default.showLoading({ title: '加载中...' });

              dispatch(aMap[_balance.REQUEST_BALANCE_ORDER]());
              res = void 0;
              _context2.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context2.sent;
              _context2.next = 8;
              return _index2.default.cloud.callFunction({
                name: 'order',
                data: {
                  func: 'addOrder',
                  data: {
                    _id: _openId,
                    freightPrice: freightPrice,
                    payType: payType
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_balance.RECEIVE_BALANCE_ORDER](getState().balance));
              });

            case 8:
              res = _context2.sent;


              _index2.default.hideLoading();
              data = res.result.data;

              if (data.code === 0) {
                dispatch(aMap[_balance.RECEIVE_BALANCE_ORDER]());
                callback && callback(data);
              } else {
                dispatch(aMap[_balance.RECEIVE_BALANCE_ORDER](getState().balance));
                _index2.default.showToast({
                  icon: 'none',
                  title: '请求失败'
                });
              }

            case 12:
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

// 将拿到的数据进行处理，方便前端展示
function handleBalanceData(data) {
  if (!data || !data.payInfo) {
    return {
      isNeedBanlance: true,
      payCommodities: [],
      payNum: 0,
      totalPrice: 0
    };
  }

  var commoditysObj = {};
  var payCommodities = [];
  var payNum = 0;
  var totalPrice = 0;

  var payInfo = data.payInfo,
      shopMap = data.shopMap,
      isNeedBanlance = data.isNeedBanlance;

  var realShopMap = shopMap[0];

  totalPrice = data.totalPrice;

  for (var venderId in realShopMap) {
    // 整理店铺的信息
    var toplifeShop = {
      fullLogoUri: 'https://img11.360buyimg.com/ling/jfs/t24292/40/1063566259/5338/454eb23d/5b4f2575N485ac2d0.jpg',
      logoUri: '/ling/jfs/t24292/40/1063566259/5338/454eb23d/5b4f2575N485ac2d0.jpg',
      title: 'TARO',
      venderId: ''
    };
    var shopObj = realShopMap[venderId] || toplifeShop;

    var commodityObj = {};
    commodityObj.shop = shopObj;
    commodityObj.skus = [];

    commoditysObj[venderId] = commodityObj;
  }

  // 整理商品的信息
  payInfo.forEach(function (item) {
    var venderId = item.venderId;
    var skusObj = commoditysObj[venderId].skus;

    var obj = {};
    obj.skuId = item.skuId;
    obj.num = item.num;
    obj.main = item.info;
    obj.colorInfo = item.info.colorInfo;
    obj.sizeInfo = item.info.sizeInfo;

    // 增加商品数量
    payNum += obj.num;

    skusObj.push(obj);
  });

  for (var _venderId in commoditysObj) {
    var commodities = commoditysObj[_venderId];
    if (commodities.skus.length !== 0) {
      payCommodities.push(commodities);
    }
  }

  payNum > 99 && (payNum = '99+');

  return {
    payCommodities: payCommodities,
    isNeedBanlance: isNeedBanlance,
    payNum: payNum,
    totalPrice: totalPrice
  };
}