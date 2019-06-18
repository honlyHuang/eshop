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

var _index4 = require("../../npm/classnames/index.js");

var _index5 = _interopRequireDefault(_index4);

var _cart = require("../../actions/cart.js");

var _util = require("../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Cart, _BaseComponent);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["cartClass", "showEidtBox", "isLogin", "isFixedBar", "systemInfo", "__fn_onFetchCart", "commoditys", "editSkuData", "isFetching"], _this.config = {
      navigationBarTitleText: '购物车',
      backgroundColor: '#f2efef',
      disableScroll: true
    }, _this.onViewScroll = function (e) {
      _this.pageScrollFn(e.detail.scrollTop);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Cart.prototype.__proto__ || Object.getPrototypeOf(Cart.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isLogin: true,
        isFixedBar: false,
        systemInfo: {}
      };

      this.scrollTop = 0;
      this.pageScrollFn = (0, _util.throttle)(this.isNeedFixedBar, 200, this);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var isLogin = true;
      this.__triggerPropsFn("onFetchCart", [null].concat([]));
      this.setState({
        isLogin: isLogin,
        systemInfo: (0, _util.getSystemInfo)()
      });
    }
  }, {
    key: "isNeedFixedBar",
    value: function isNeedFixedBar(top) {
      var isFixedBar = this.state.isFixedBar;

      this.scrollTop = top;
      var needTop = 45;
      if (top > needTop) {
        !isFixedBar && this.setState({ isFixedBar: true });
      } else {
        isFixedBar && this.setState({ isFixedBar: false });
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
          isLogin = _state.isLogin,
          isFixedBar = _state.isFixedBar,
          systemInfo = _state.systemInfo;
      var _props = this.__props,
          commoditys = _props.commoditys,
          editSkuData = _props.editSkuData,
          isFetching = _props.isFetching;


      var showEidtBox = editSkuData.showEidtBox;

      var hasCommodity = commoditys.length !== 0;

      var cartClass = (0, _index5.default)('cart-scroll', { 'no_bottom': !hasCommodity && !isLogin });

      var newSystemInfo = (0, _util.getSystemInfo)();

      var windowHeight = systemInfo.windowHeight;
      if (newSystemInfo.windowHeight > windowHeight && windowHeight) {
        windowHeight = newSystemInfo.windowHeight;
      }

      if (isFetching) {
        _index2.default.showLoading({ title: '请求加载中...' });
      } else {
        _index2.default.hideLoading();
      }

      Object.assign(this.__state, {
        cartClass: cartClass,
        showEidtBox: showEidtBox
      });
      return this.__state;
    }
  }]);

  return Cart;
}(_index.Component), _class.properties = {
  "__fn_onFetchCart": {
    "type": null,
    "value": null
  },
  "commoditys": {
    "type": null,
    "value": null
  },
  "editSkuData": {
    "type": null,
    "value": null
  },
  "isFetching": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onViewScroll"], _temp2);


var Cart__Connected = (0, _index3.connect)(function (_ref2) {
  var cart = _ref2.cart,
      home = _ref2.home;
  return {
    floorData: home.floorData || {},
    commoditys: cart.commoditys,
    editSkuData: cart.editSkuData,
    isFetching: cart.isFetching
  };
}, function (dispatch) {
  return {
    onFetchCart: function onFetchCart() {
      dispatch(_cart.fetchCart.apply(undefined, arguments));
    }
  };
})(Cart);
exports.default = Cart__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Cart__Connected, true));