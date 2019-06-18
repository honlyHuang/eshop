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

var _images = require("../../constants/images.js");

var _shop = require("../../actions/shop.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shop = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Shop, _BaseComponent);

  function Shop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Shop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shop.__proto__ || Object.getPrototypeOf(Shop)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "isFirst", "venderId", "SEARCH_BAR_MORE_IMAGE", "banner", "floors", "params", "showMore", "fetchShopData", "shop"], _this.config = {
      navigationBarTitleText: '',
      enablePullDownRefresh: false,
      disableScroll: true
    }, _this.toggleShowMore = function () {
      _this.setState({ showMore: !_this.state.showMore });
    }, _this.onGotoDetail = function (skuId) {
      (0, _util.jumpUrl)("/pages/detail/detail?skuId=" + skuId);
    }, _this.onGotoPage = function (pages) {
      if (pages === 'index') {
        _this.setState({
          showMore: false
        });
        {
          _index2.default.switchTab({
            url: '/pages/index/index'
          });
        }
      } else if (pages === 'cart') {
        (0, _util.jumpUrl)('/pages/cart/cart_sub');
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Shop, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Shop.prototype.__proto__ || Object.getPrototypeOf(Shop.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isFirst: true,
        params: {},
        showMore: false
      };
    }
  }, {
    key: "componentWillMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params, venderId, scene, sceneParams;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = (this.$router || this.context.$router).params;
                venderId = params.venderId || '182324';
                scene = decodeURIComponent(params.scene);

                if (scene) {
                  sceneParams = (0, _util.queryStringToJson)(scene);

                  if (sceneParams.venderId) {
                    venderId = sceneParams.venderId;
                  }
                }
                this.setState({ params: { venderId: venderId }, isFirst: true });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.fetchShopData({ venderId: this.state.params.venderId });

              case 2:
                this.setState({
                  showMore: false,
                  isFirst: false
                });
                _index2.default.setNavigationBarTitle({
                  title: this.props.shop.title
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        // title,
        path: '/pages/shop/shop?venderId=' + this.state.params.venderId,
        success: function success() {
          _index2.default.showToast({
            title: '转发成功！',
            icon: 'success'
          });
        },
        fail: function fail() {
          _index2.default.showToast({
            title: '转发失败！',
            icon: 'none'
          });
        }
      };
    }

    // 显示more

  }, {
    key: "connectService",


    // more里的联系客服
    value: function connectService() {
      _index2.default.makePhoneCall({
        phoneNumber: '4006563355' //仅为示例，并非真实的电话号码
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var isFirst = this.__state.isFirst;
      var _props$shop = this.__props.shop,
          _props$shop$banner = _props$shop.banner,
          banner = _props$shop$banner === undefined ? [] : _props$shop$banner,
          _props$shop$floors = _props$shop.floors,
          floors = _props$shop$floors === undefined ? [] : _props$shop$floors,
          venderId = _props$shop.venderId;

      var isIphonex = (0, _util.getSystemInfo)().isIpx;
      var anonymousState__temp = !isFirst ? (0, _index.internal_inline_style)(isIphonex ? 'padding-bottom: 164rpx;' : '') : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        venderId: venderId,
        SEARCH_BAR_MORE_IMAGE: _images.SEARCH_BAR_MORE_IMAGE,
        banner: banner,
        floors: floors
      });
      return this.__state;
    }
  }]);

  return Shop;
}(_index.Component), _class.properties = {
  "fetchShopData": {
    "type": null,
    "value": null
  },
  "shop": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["toggleShowMore", "connectService", "onGotoPage", "onGotoDetail"], _temp2);


var Shop__Connected = (0, _index3.connect)(function (_ref4) {
  var shop = _ref4.shop;
  return {
    shop: shop
  };
}, function (dispatch) {
  return {
    fetchShopData: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dispatch((0, _shop.fetchShopData)(data));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchShopData(_x) {
        return _ref5.apply(this, arguments);
      }

      return fetchShopData;
    }(),
    resetShopData: function resetShopData(params) {
      dispatch((0, _shop.resetShopData)(params));
    }
  };
})(Shop);
exports.default = Shop__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Shop__Connected, true));