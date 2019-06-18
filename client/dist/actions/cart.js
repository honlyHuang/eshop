"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchCart = fetchCart;
exports.fetchChangeCartNum = fetchChangeCartNum;
exports.fetchCheckCart = fetchCheckCart;
exports.fetchInvertCheckCart = fetchInvertCheckCart;
exports.fetchDelCart = fetchDelCart;
exports.fetchChangeAttr = fetchChangeAttr;
exports.showEditBox = showEditBox;
exports.hideEditBox = hideEditBox;
exports.changeEditStatus = changeEditStatus;
exports.changeCouponStatus = changeCouponStatus;
exports.checkDelCart = checkDelCart;
exports.inverseCheckDelCart = inverseCheckDelCart;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/redux-actions/lib/index.js");

var _cart = require("../constants/cart.js");

var _util = require("../utils/util.js");

var _index4 = require("../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var aMap = {
  REQUEST_CART: (0, _index3.createAction)(_cart.REQUEST_CART, function (datas) {
    return datas;
  }),
  RECEIVE_CART: (0, _index3.createAction)(_cart.RECEIVE_CART, function (datas) {
    return datas;
  }),
  REQUEST_DEL_CART: (0, _index3.createAction)(_cart.REQUEST_DEL_CART, function (datas) {
    return datas;
  }),
  RECEIVE_DEL_CART: (0, _index3.createAction)(_cart.RECEIVE_DEL_CART, function (datas) {
    return datas;
  }),
  REQUEST_CHANGE_NUM: (0, _index3.createAction)(_cart.REQUEST_CHANGE_NUM, function (datas) {
    return datas;
  }),
  RECEIVE_CHANGE_NUM: (0, _index3.createAction)(_cart.RECEIVE_CHANGE_NUM, function (datas) {
    return datas;
  }),
  REQUEST_CHECK_CART: (0, _index3.createAction)(_cart.REQUEST_CHECK_CART, function (datas) {
    return datas;
  }),
  RECEIVE_CHECK_CART: (0, _index3.createAction)(_cart.RECEIVE_CHECK_CART, function (datas) {
    return datas;
  }),
  REQUEST_INVERSE_CHECK: (0, _index3.createAction)(_cart.REQUEST_INVERSE_CHECK, function (datas) {
    return datas;
  }),
  RECEIVE_INVERSE_CHECK: (0, _index3.createAction)(_cart.RECEIVE_INVERSE_CHECK, function (datas) {
    return datas;
  }),
  REQUEST_CHANGE_ATTR: (0, _index3.createAction)(_cart.REQUEST_CHANGE_ATTR, function (datas) {
    return datas;
  }),
  RECEIVE_CHANGE_ATTR: (0, _index3.createAction)(_cart.RECEIVE_CHANGE_ATTR, function (datas) {
    return datas;
  }),
  CHECK_DEL: (0, _index3.createAction)(_cart.CHECK_DEL, function (datas) {
    return datas;
  }),
  INVERSE_CHECK_DEL: (0, _index3.createAction)(_cart.INVERSE_CHECK_DEL, function (datas) {
    return datas;
  }),
  HIDE_ATTR_BOX: (0, _index3.createAction)(_cart.HIDE_ATTR_BOX, function (datas) {
    return datas;
  }),
  SHOW_ATTR_BOX: (0, _index3.createAction)(_cart.SHOW_ATTR_BOX, function (datas) {
    return datas;
  }),
  CHANGE_EDIT_STATUS: (0, _index3.createAction)(_cart.CHANGE_EDIT_STATUS, function (datas) {
    return datas;
  })
};

function fetchCart() {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(aMap[_cart.REQUEST_CART]());

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
                dispatch(aMap[_cart.RECEIVE_CART](getState().cart));
              });

            case 7:
              res = _context.sent;
              data = res.result.data;


              if (data) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_CART](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_CART](getState().cart));
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

function fetchChangeCartNum(skus) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(aMap[_cart.REQUEST_CHANGE_NUM]());

              res = void 0;
              _context2.next = 4;
              return (0, _index4.getOpenId)();

            case 4:
              _openId = _context2.sent;
              _context2.next = 7;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'editCart',
                  data: {
                    _id: _openId,
                    type: _cart.operate['CHANGE_NUM'],
                    skus: skus
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_cart.RECEIVE_CHANGE_NUM](getState().cart));
              });

            case 7:
              res = _context2.sent;
              data = res.result.data;


              if (data.length !== 0) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_CHANGE_NUM](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_CHANGE_NUM](getState().cart));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 10:
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

function fetchCheckCart(skus) {
  var _this3 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(aMap[_cart.REQUEST_CHECK_CART]());

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
                    type: _cart.operate['CHECK'],
                    skus: skus
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_cart.RECEIVE_CHECK_CART](getState().cart));
              });

            case 7:
              res = _context3.sent;
              data = res.result.data;

              if (data.length !== 0) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_CHECK_CART](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_CHECK_CART](getState().cart));
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

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
}

function fetchInvertCheckCart(skus) {
  var _this4 = this;

  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(skus);
              dispatch(aMap[_cart.REQUEST_INVERSE_CHECK]());
              res = void 0;
              _context4.next = 5;
              return (0, _index4.getOpenId)();

            case 5:
              _openId = _context4.sent;
              _context4.next = 8;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'editCart',
                  data: {
                    _id: _openId,
                    type: _cart.operate['INVERT_CHECK'],
                    skus: skus
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_cart.RECEIVE_INVERSE_CHECK](getState().cart));
              });

            case 8:
              res = _context4.sent;
              data = res.result.data;

              if (data.length !== 0) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_INVERSE_CHECK](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_INVERSE_CHECK](getState().cart));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
}

function fetchDelCart(skus) {
  var _this5 = this;

  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch(aMap[_cart.REQUEST_DEL_CART]());

              res = void 0;
              _context5.next = 4;
              return (0, _index4.getOpenId)();

            case 4:
              _openId = _context5.sent;
              _context5.next = 7;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'editCart',
                  data: {
                    _id: _openId,
                    type: _cart.operate['DEL'],
                    skus: skus
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_cart.RECEIVE_DEL_CART](getState().cart));
              });

            case 7:
              res = _context5.sent;
              data = res.result.data;

              if (data.length !== 0) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_DEL_CART](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_DEL_CART](getState().cart));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
}

function fetchChangeAttr(sku) {
  var _this6 = this;

  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState) {
      var res, _openId, data, cartData;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch(aMap[_cart.REQUEST_CHANGE_ATTR]());

              res = void 0;
              _context6.next = 4;
              return (0, _index4.getOpenId)();

            case 4:
              _openId = _context6.sent;
              _context6.next = 7;
              return _index2.default.cloud.callFunction({
                name: 'cart',
                data: {
                  func: 'editCart',
                  data: {
                    _id: _openId,
                    type: _cart.operate['CHANGE_ATTR'],
                    skus: sku
                  }
                }
              }).catch(function (err) {
                console.log(err);
                dispatch(aMap[_cart.RECEIVE_CHANGE_ATTR](getState().cart));
              });

            case 7:
              res = _context6.sent;
              data = res.result.data;

              if (data.length !== 0) {
                cartData = handleCartData(data);

                dispatch(aMap[_cart.RECEIVE_CHANGE_ATTR](cartData));
              } else {
                dispatch(aMap[_cart.RECEIVE_CHANGE_ATTR](getState().cart));
                data.code !== 3 && _index2.default.showToast({
                  icon: 'none',
                  title: '服务器繁忙'
                });
              }

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function showEditBox(sku) {
  return function (dispatch, getState) {
    var editSkuData = getState().cart.editSkuData;

    var newEditSkuData = _extends({}, editSkuData, {
      sku: sku,
      showEidtBox: true
    });
    dispatch(aMap[_cart.SHOW_ATTR_BOX]({
      editSkuData: newEditSkuData
    }));
  };
}

function hideEditBox() {
  return function (dispatch, getState) {
    var editSkuData = getState().cart.editSkuData;

    var newEditSkuData = _extends({}, editSkuData, {
      showEidtBox: false
    });
    dispatch(aMap[_cart.HIDE_ATTR_BOX]({
      editSkuData: newEditSkuData
    }));
  };
}

function changeEditStatus(boolean) {
  return function (dispatch) {
    var isEditStatus = boolean;
    dispatch(aMap[_cart.CHANGE_EDIT_STATUS]({ isEditStatus: isEditStatus }));
  };
}

function changeCouponStatus(boolean) {
  return function (dispatch, getState) {
    var couponData = getState().cart.couponData;

    var newCouponData = _extends({}, couponData, {
      showCouponList: boolean
    });
    dispatch(aMap[CHANGE_COUPON_STATUS]({
      couponData: newCouponData
    }));
  };
}

function checkDelCart(delSkus) {
  return function (dispatch, getState) {
    var commoditys = getState().cart.commoditys;

    var commoditysCheckDelAll = true;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = commoditys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var commodity = _step.value;
        var shop = commodity.shop,
            skus = commodity.skus;

        var checkDelAll = true;
        var newSkus = skus.map(function (sku) {
          var isChoose = delSkus.filter(function (delSku) {
            return delSku.skuId === sku.skuId;
          }).length !== 0;
          // 是否处于选中态
          if (isChoose) {
            sku = _extends({}, sku, {
              checkDel: true
            });
          }
          if (!sku.checkDel) checkDelAll = false;
          return sku;
        });
        commodity.skus = newSkus;
        shop.checkDelAll = checkDelAll;
        if (!shop.checkDelAll) commoditysCheckDelAll = false;
      }
      // 返回新的数组
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var newCommoditys = commoditys.map(function (commodity) {
      return _extends({}, commodity);
    });

    dispatch(aMap[_cart.CHECK_DEL]({
      commoditys: newCommoditys,
      checkDelAll: commoditysCheckDelAll
    }));
  };
}

function inverseCheckDelCart(delSkus) {
  return function (dispatch, getState) {
    var commoditys = getState().cart.commoditys;

    var commoditysCheckDelAll = true;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = commoditys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var commodity = _step2.value;
        var shop = commodity.shop,
            skus = commodity.skus;

        var checkDelAll = true;
        var newSkus = skus.map(function (sku) {
          var isChoose = delSkus.filter(function (delSku) {
            return delSku.skuId === sku.skuId;
          }).length !== 0;
          // 是否处于删除态
          if (isChoose) {
            sku = _extends({}, sku, {
              checkDel: false
            });
          }
          if (!sku.checkDel) checkDelAll = false;
          return sku;
        });
        commodity.skus = newSkus;
        shop.checkDelAll = checkDelAll;
        if (!shop.checkDelAll) commoditysCheckDelAll = false;
      }
      // 返回新的数组
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var newCommoditys = commoditys.map(function (commodity) {
      return _extends({}, commodity);
    });

    dispatch(aMap[_cart.INVERSE_CHECK_DEL]({
      commoditys: newCommoditys,
      checkDelAll: commoditysCheckDelAll
    }));
  };
}

// 将拿到的数据进行处理，方便前端展示
function handleCartData(data) {
  if (!data || !data.cartInfo) {
    return {
      commoditys: [],
      offSales: [],
      checkCartNum: 0,
      totalPrice: 0,
      checkAll: false
    };
  }

  var commoditysObj = {};
  var commoditys = [];
  var offSales = [];
  var checkCartNum = 0;
  var totalPrice = 0;
  var checkAll = data.cartNum !== 0;

  var cartInfo = data.cartInfo,
      shopMap = data.shopMap;

  var realShopMap = shopMap[0];

  // 结算总价格
  totalPrice = (0, _util.parseMoney)(data.totalPrice);

  for (var venderId in realShopMap) {
    // 整理店铺的信息
    var toplifeShop = {
      fullLogoUri: 'https://img11.360buyimg.com/ling/jfs/t24292/40/1063566259/5338/454eb23d/5b4f2575N485ac2d0.jpg',
      logoUri: '/ling/jfs/t24292/40/1063566259/5338/454eb23d/5b4f2575N485ac2d0.jpg',
      title: 'TARO',
      venderId: ''
    };
    var shopObj = realShopMap[venderId] || toplifeShop;
    // 店铺是否全选
    shopObj.checkAll = true;
    // 店铺是否显示全选这个标题，有无货商品时不显示
    shopObj.showCheckAll = false;
    // 店铺是否全选删除
    shopObj.checkDelAll = false;

    var commodityObj = {};
    commodityObj.shop = shopObj;
    commodityObj.skus = [];

    commoditysObj[venderId] = commodityObj;
  }

  // 整理商品的信息
  cartInfo.forEach(function (item) {
    var venderId = item.venderId;
    var skusObj = commoditysObj[venderId].skus;
    var shopObj = commoditysObj[venderId].shop;

    // 显示全选
    shopObj.showCheckAll = true;

    var obj = {};
    obj.skuId = item.skuId;
    obj.num = item.num;
    obj.main = item.info;
    obj.isCheck = item.isCheck;
    obj.colorInfo = item.info.colorInfo;
    obj.sizeInfo = item.info.sizeInfo;
    // 商品是否选中删除
    obj.checkDel = false;

    // 增加商品数量
    obj.isCheck && (checkCartNum += obj.num);

    // 商品是否无货
    obj.isOutOfStock = false;

    // 是否全选
    if (!obj.isCheck) shopObj.checkAll = false;

    if (!shopObj.checkAll) checkAll = false;

    skusObj.push(obj);
  });

  checkCartNum > 99 && (checkCartNum = '99+');

  commoditys = Object.values(commoditysObj);

  return {
    commoditys: commoditys,
    offSales: offSales,
    checkCartNum: checkCartNum,
    totalPrice: totalPrice,
    checkAll: checkAll
  };
}