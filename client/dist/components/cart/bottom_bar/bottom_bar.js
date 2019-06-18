"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _index4 = require("../../../npm/classnames/index.js");

var _index5 = _interopRequireDefault(_index4);

var _cart = require("../../../actions/cart.js");

var _util = require("../../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(BottomBar, _BaseComponent);

  function BottomBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomBar.__proto__ || Object.getPrototypeOf(BottomBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "bottomClass", "isEditStatus", "checkDelAll", "hasDelCart", "checkAll", "checkCartNum", "showConfirm", "totalPrice", "delNum", "commoditys", "isLogin", "isSub"], _this.checkAllCart = function () {
      var _this$props = _this.props,
          isEditStatus = _this$props.isEditStatus,
          commoditys = _this$props.commoditys,
          onFetchCheckCart = _this$props.onFetchCheckCart,
          onFetchInvertCheckCart = _this$props.onFetchInvertCheckCart,
          onCheckDelCart = _this$props.onCheckDelCart,
          onInverseCheckDelCart = _this$props.onInverseCheckDelCart,
          checkAll = _this$props.checkAll,
          checkDelAll = _this$props.checkDelAll;

      var skusArr = [];
      commoditys.forEach(function (commodity) {
        commodity.skus.forEach(function (sku) {
          skusArr.push({ skuId: sku.skuId });
        });
      });
      if (skusArr.length === 0) {
        return;
      }if (isEditStatus) {
        checkDelAll ? _this.__triggerPropsFn("onInverseCheckDelCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onCheckDelCart", [null].concat([skusArr]));
      } else {
        checkAll ? _this.__triggerPropsFn("onFetchInvertCheckCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onFetchCheckCart", [null].concat([skusArr]));
      }
    }, _this.onHideDelPopup = function () {
      _this.setState({ showConfirm: false });
    }, _this.gotoBalance = function () {
      var _this$props2 = _this.props,
          checkCartNum = _this$props2.checkCartNum,
          isLogin = _this$props2.isLogin;

      if (checkCartNum <= 0) {
        return;
      }if (isLogin) {
        (0, _util.jumpUrl)('/pages/balance/balance');
      } else {
        var pages = _index2.default.getCurrentPages();
        var route = pages[pages.length - 1];
        (0, _util.jumpUrl)("../account/login/login?returnpage=/" + route.route);
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomBar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(BottomBar.prototype.__proto__ || Object.getPrototypeOf(BottomBar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        showConfirm: false,
        delNum: 0
      };
      this.delSkusArr = [];
    }
  }, {
    key: "delCart",
    value: function delCart() {
      var _props = this.props,
          onFetchDelCart = _props.onFetchDelCart,
          onChangeEditStatus = _props.onChangeEditStatus;

      this.__triggerPropsFn("onFetchDelCart", [null].concat([this.delSkusArr]));
      this.setState({ showConfirm: false });
      this.__triggerPropsFn("onChangeEditStatus", [null].concat([false]));
    }
  }, {
    key: "handleDelbtn",
    value: function handleDelbtn(hasDelCart) {
      var _this2 = this;

      if (!hasDelCart) {
        return;
      }var commoditys = this.props.commoditys;

      var delNum = 0;
      this.delSkusArr = [];
      commoditys.forEach(function (commodity) {
        commodity.skus.forEach(function (sku) {
          if (sku.checkDel) {
            delNum++;
            _this2.delSkusArr.push({ skuId: sku.skuId });
          }
        });
      });
      this.setState({
        showConfirm: true,
        delNum: delNum
      });
    }
  }, {
    key: "booleanDelCart",
    value: function booleanDelCart() {
      var _props$commoditys = this.props.commoditys,
          commoditys = _props$commoditys === undefined ? [] : _props$commoditys;

      var hasDelCart = false;
      for (var i = 0; i < commoditys.length; i++) {
        var commodity = commoditys[i];
        for (var j = 0; j < commodity.skus.length; j++) {
          var sku = commodity.skus[j];
          if (sku.checkDel) {
            hasDelCart = true;
            break;
          }
        }
        if (hasDelCart) {
          break;
        }
      }
      return hasDelCart;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props2 = this.__props,
          isLogin = _props2.isLogin,
          isSub = _props2.isSub,
          isEditStatus = _props2.isEditStatus,
          checkCartNum = _props2.checkCartNum,
          totalPrice = _props2.totalPrice,
          checkAll = _props2.checkAll,
          checkDelAll = _props2.checkDelAll,
          commoditys = _props2.commoditys;


      var hasCommodity = commoditys.length !== 0;

      var _state = this.__state,
          showConfirm = _state.showConfirm,
          delNum = _state.delNum;

      var hasDelCart = this.booleanDelCart();
      var bottomClass = (0, _index5.default)('bottom_bar_wp', { 'hide': !hasCommodity && !isLogin });
      var anonymousState__temp = (0, _index.internal_inline_style)(isSub ? 'margin-bottom: 0' : '');
      var anonymousState__temp2 = showConfirm ? "\u662F\u5426\u5220\u9664\u8FD9" + delNum + "\u79CD\u5546\u54C1" : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        bottomClass: bottomClass,
        isEditStatus: isEditStatus,
        checkDelAll: checkDelAll,
        hasDelCart: hasDelCart,
        checkAll: checkAll,
        checkCartNum: checkCartNum,
        totalPrice: totalPrice
      });
      return this.__state;
    }
  }]);

  return BottomBar;
}(_index.Component), _class.properties = {
  "isEditStatus": {
    "type": null,
    "value": null
  },
  "commoditys": {
    "type": null,
    "value": null
  },
  "onFetchCheckCart": {
    "type": null,
    "value": null
  },
  "onFetchInvertCheckCart": {
    "type": null,
    "value": null
  },
  "onCheckDelCart": {
    "type": null,
    "value": null
  },
  "onInverseCheckDelCart": {
    "type": null,
    "value": null
  },
  "checkAll": {
    "type": null,
    "value": null
  },
  "checkDelAll": {
    "type": null,
    "value": null
  },
  "__fn_onInverseCheckDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onCheckDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onFetchInvertCheckCart": {
    "type": null,
    "value": null
  },
  "__fn_onFetchCheckCart": {
    "type": null,
    "value": null
  },
  "onFetchDelCart": {
    "type": null,
    "value": null
  },
  "onChangeEditStatus": {
    "type": null,
    "value": null
  },
  "__fn_onFetchDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onChangeEditStatus": {
    "type": null,
    "value": null
  },
  "checkCartNum": {
    "type": null,
    "value": null
  },
  "isLogin": {
    "type": null,
    "value": null
  },
  "isSub": {
    "type": null,
    "value": null
  },
  "totalPrice": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["checkAllCart", "handleDelbtn", "gotoBalance", "onHideDelPopup", "delCart"], _temp2);


var BottomBar__Connected = (0, _index3.connect)(function (_ref2) {
  var cart = _ref2.cart;
  return {
    commoditys: cart.commoditys,
    checkAll: cart.checkAll,
    checkDelAll: cart.checkDelAll,
    checkCartNum: cart.checkCartNum,
    totalPrice: cart.totalPrice,
    isEditStatus: cart.isEditStatus
  };
}, function (dispatch) {
  return {
    onFetchCheckCart: function onFetchCheckCart() {
      dispatch(_cart.fetchCheckCart.apply(undefined, arguments));
    },
    onFetchInvertCheckCart: function onFetchInvertCheckCart() {
      dispatch(_cart.fetchInvertCheckCart.apply(undefined, arguments));
    },
    onCheckDelCart: function onCheckDelCart() {
      dispatch(_cart.checkDelCart.apply(undefined, arguments));
    },
    onInverseCheckDelCart: function onInverseCheckDelCart() {
      dispatch(_cart.inverseCheckDelCart.apply(undefined, arguments));
    },
    onFetchDelCart: function onFetchDelCart() {
      dispatch(_cart.fetchDelCart.apply(undefined, arguments));
    },
    onChangeEditStatus: function onChangeEditStatus() {
      dispatch(_cart.changeEditStatus.apply(undefined, arguments));
    }
  };
})(BottomBar);
exports.default = BottomBar__Connected;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BottomBar__Connected));