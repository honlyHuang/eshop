"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/redux/index.js");

require("./npm/@tarojs/async-await/index.js");

var _index4 = require("./store/index.js");

var _index5 = _interopRequireDefault(_index4);

var _globalData = require("./constants/globalData.js");

var _wx = require("./utils/wx.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _index5.default)();

(0, _index3.setStore)(store);

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/index/index', 'pages/shop/shop', 'pages/user/order/list/list', 'pages/user/order/detail/detail', 'pages/cart/cart', 'pages/cart/cart_sub', 'pages/detail/detail', 'pages/list/list', 'pages/balance/balance'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTitleText: 'TARO商城',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#7b7b7a',
        selectedColor: '#c0a369',
        backgroundColor: '#222222',
        list: [{
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'asset/home.png',
          selectedIconPath: 'asset/home_active.png'
        }, {
          pagePath: 'pages/cart/cart',
          text: '购物车',
          iconPath: 'asset/shoppingbag.png',
          selectedIconPath: 'asset/shoppingbag_active.png'
        }, {
          pagePath: 'pages/user/order/list/list',
          text: '订单',
          iconPath: 'asset/mine.png',
          selectedIconPath: 'asset/mine_active.png'
        }]
      },
      cloud: true,
      networkTimeout: {
        request: 6000,
        connectSocket: 10000,
        uploadFile: 10000,
        downloadFile: 10000
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _index2.default.cloud.init({
                  env: 'wushufang-h36jx', // 获取环境ID：前往 云开发控制台-设置-环境ID
                  traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
                });
                _context.next = 3;
                return (0, _wx.getWxUserData)();

              case 3:
                userData = _context.sent;

                (0, _globalData.setGlobalData)('userData', userData);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});