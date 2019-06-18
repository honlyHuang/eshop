"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _util = require("../../utils/util.js");

var _globalData = require("../../constants/globalData.js");

var _balance = require("../../actions/balance.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Balance = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Balance, _BaseComponent);

  function Balance() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Balance);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Balance.__proto__ || Object.getPrototypeOf(Balance)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["showTip", "freightPrice", "payCommodities", "allPrice", "aniShowPayWay", "showPayWay", "paymentType", "isShowUserAuthModal", "payNum", "isShowUserAuth", "totalPrice", "reachTop", "payWay", "noStockSkuList", "fetchBalanceInfo", "fetchGenerateOrder", "isNeedBanlance"], _this.config = {
      navigationBarTitleText: '确认订单',
      disableScroll: true
    }, _this.defaultProps = {}, _this.closeTip = function () {
      var showTip = _this.state.showTip;

      _this.setState({
        showTip: !showTip
      });
    }, _this.submitOrder = function () {
      console.log('submitOrder');
      var freightPrice = _this.props.freightPrice;
      var paymentType = _this.state.paymentType;

      _this.props.fetchGenerateOrder(freightPrice, paymentType, _this.submitOrderCb);
    }, _this.submitOrderCb = function (data) {
      var orderId = data.data.orderId;
      (0, _util.jumpUrl)("/pages/user/order/detail/detail?orderId=" + orderId);
    }, _this.showUserAuthModal = function () {
      console.log('showUserAuthModal');
      _this.setState({
        isShowUserAuthModal: true
      });
    }, _this.onHideUserAuthModal = function () {
      _this.setState({
        isShowUserAuthModal: false
      });
    }, _this.onProcessAuthResult = function (userData) {
      _this.setState({
        isShowUserAuthModal: false
      });
      if (userData.userInfo) {
        (0, _globalData.setGlobalData)('userData', userData);
        _this.setState({
          isShowUserAuth: false
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Balance, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Balance.prototype.__proto__ || Object.getPrototypeOf(Balance.prototype), "_constructor", this).apply(this, arguments);
      this.currentScrollTop = 0;
      this.state = {
        reachTop: true,
        showTip: true,
        showPayWay: false,
        aniShowPayWay: false,
        payWay: 0, // 在线支付：0；货到付款：1
        noStockSkuList: null,
        paymentType: 4,
        isShowUserAuth: false,
        isShowUserAuthModal: false
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.firstIn = true;
      var userData = (0, _globalData.getGlobalData)('userData');
      if (_index2.default.getEnv() === 'WEB') {
        return;
      }if (!userData) {
        this.setState({
          isShowUserAuth: true
        });
      }
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.props.fetchBalanceInfo();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      var isNeedBanlance = nextProps.isNeedBanlance;

      if (!isNeedBanlance) {
        this.backToCart();
      }
    }
  }, {
    key: "onPageScroll",
    value: function onPageScroll(e) {
      if (!e.scrollTop && !this.state.reachTop) {
        this.setState({
          reachTop: true
        });
        return;
      }
      if (this.state.reachTop) {
        this.setState({
          reachTop: false
        });
      }
    }
  }, {
    key: "showPayWayBox",
    value: function showPayWayBox() {
      if (!this.state.showPayWay) {
        this.setState({
          showPayWay: true,
          aniShowPayWay: true
        });
      }
    }
  }, {
    key: "closePayWay",
    value: function closePayWay() {
      this.setState({
        showPayWay: false
      });
    }
  }, {
    key: "checkPayWay",
    value: function checkPayWay(payWay) {
      this.setState({
        paymentType: payWay
      });
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(page) {
      var url = "../" + page + "/" + page;
      (0, _util.jumpUrl)(url, { method: 'navigateToByForce' });
    }
  }, {
    key: "backToCart",
    value: function backToCart() {
      _index2.default.redirectTo({ url: '../cart/cart_sub' });
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd() {
      if (!this.state.showPayWay) {
        this.setState({
          aniShowPayWay: false
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _state = this.__state,
          paymentType = _state.paymentType,
          reachTop = _state.reachTop,
          showTip = _state.showTip,
          aniShowPayWay = _state.aniShowPayWay,
          showPayWay = _state.showPayWay,
          isShowUserAuth = _state.isShowUserAuth,
          isShowUserAuthModal = _state.isShowUserAuthModal;
      var _props = this.__props,
          payCommodities = _props.payCommodities,
          freightPrice = _props.freightPrice,
          totalPrice = _props.totalPrice,
          payNum = _props.payNum,
          allPrice = _props.allPrice;


      Object.assign(this.__state, {
        freightPrice: freightPrice,
        payCommodities: payCommodities,
        allPrice: allPrice,
        payNum: payNum,
        totalPrice: totalPrice
      });
      return this.__state;
    }
  }]);

  return Balance;
}(_index.Component), _class.properties = {
  "fetchBalanceInfo": {
    "type": null,
    "value": null
  },
  "freightPrice": {
    "type": null,
    "value": null
  },
  "fetchGenerateOrder": {
    "type": null,
    "value": null
  },
  "payCommodities": {
    "type": null,
    "value": null
  },
  "totalPrice": {
    "type": null,
    "value": null
  },
  "payNum": {
    "type": null,
    "value": null
  },
  "allPrice": {
    "type": null,
    "value": null
  },
  "isNeedBanlance": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["closeTip", "showPayWayBox", "onAnimationEnd", "closePayWay", "checkPayWay", "submitOrder", "showUserAuthModal"], _temp2);


var Balance__Connected = (0, _index3.connect)(function (_ref2) {
  var balance = _ref2.balance;
  return {
    isNeedBanlance: balance.isNeedBanlance,
    payCommodities: balance.payCommodities,
    freightPrice: balance.freightPrice,
    totalPrice: balance.totalPrice,
    allPrice: balance.allPrice,
    payNum: balance.payNum,
    isFetching: balance.isFetching
  };
}, function (dispatch) {
  return {
    fetchBalanceInfo: function fetchBalanceInfo() {
      dispatch((0, _balance.fetchBalanceData)());
    },
    fetchGenerateOrder: function fetchGenerateOrder() {
      dispatch(_balance.fetchGenerateOrder.apply(undefined, arguments));
    }
  };
})(Balance);
exports.default = Balance__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Balance__Connected, true));