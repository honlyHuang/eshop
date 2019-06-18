"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../npm/@tarojs/redux/index.js");

var _order = require("../../../../actions/order.js");

var _globalData = require("../../../../constants/globalData.js");

var _util = require("../../../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var orderLoading = "/asset/order_loading.gif";
var icSearchTips = "/asset/ic_search_tips.png";

var OrderList = (_dec = (0, _index3.connect)(function (_ref) {
  var orderList = _ref.orderList;
  return {
    orderList: orderList.orderList
  };
}, function (dispatch) {
  return {
    fetchOrderList: function fetchOrderList(callback) {
      dispatch((0, _order.fetchOrderList)(callback));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderList, _BaseComponent);

  function OrderList() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["orderList", "isShowUserAuth", "icSearchTips", "isFirst", "orderLoading", "isShowUserAuthModal", "userInfo", "page", "pageSize", "fetchOrderList"], _this.config = {
      navigationBarTitleText: '订单中心',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.showUserAuthModal = function () {
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

  _createClass(OrderList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderList.prototype.__proto__ || Object.getPrototypeOf(OrderList.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        userInfo: null,
        page: 1,
        pageSize: 10,
        isFirst: true,
        isShowUserAuth: false,
        isShowUserAuthModal: false
      };
    }
  }, {
    key: "gotoLogin",
    value: function gotoLogin() {
      (0, _util.goLogin)({
        fromPageType: 'switchTab'
      });
    }
  }, {
    key: "gotoCoupon",
    value: function gotoCoupon() {
      (0, _util.jumpUrl)('../../../coupon/coupon');
    }
  }, {
    key: "gotoBrand",
    value: function gotoBrand(venderId) {
      if (venderId) {
        (0, _util.jumpUrl)("/pages/shop/shop?venderId=" + venderId);
      }
    }
  }, {
    key: "gotoDetail",
    value: function gotoDetail(orderId) {
      (0, _util.jumpUrl)("/pages/user/order/detail/detail?orderId=" + orderId);
    }
  }, {
    key: "gotoHome",
    value: function gotoHome() {
      _index2.default.switchTab({
        url: '/pages/index/index'
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var userData = (0, _globalData.getGlobalData)('userData');
      var isShowUserAuth = false;
      if (_index2.default.getEnv() === 'WEB') {
        return;
      }if (!userData) {
        isShowUserAuth = true;
      }
      this.setState({
        isShowUserAuth: isShowUserAuth
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.initFetchData();
    }
  }, {
    key: "initFetchData",
    value: function initFetchData() {
      var fetchOrderList = this.props.fetchOrderList;

      var userData = (0, _globalData.getGlobalData)('userData');
      var userInfo = userData && userData.userInfo;
      this.setState({
        userInfo: userInfo,
        page: 1
      });
      fetchOrderList();
    }
  }, {
    key: "payOrder",
    value: function payOrder() {
      _index2.default.showToast({
        title: '你触发了去支付',
        duration: 2000
      });
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.initFetchData();
      _index2.default.stopPullDownRefresh();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _state = this.__state,
          isFirst = _state.isFirst,
          isShowUserAuthModal = _state.isShowUserAuthModal,
          isShowUserAuth = _state.isShowUserAuth;
      var orderList = this.__props.orderList;

      Object.assign(this.__state, {
        orderList: orderList,
        icSearchTips: icSearchTips,
        orderLoading: orderLoading
      });
      return this.__state;
    }
  }]);

  return OrderList;
}(_index.Component), _class2.properties = {
  "fetchOrderList": {
    "type": null,
    "value": null
  },
  "orderList": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["gotoBrand", "gotoDetail", "payOrder", "showUserAuthModal", "gotoHome", "onHideUserAuthModal", "onProcessAuthResult"], _temp2)) || _class);
exports.default = OrderList;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderList, true));