"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../../npm/@tarojs/async-await/index.js");

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../npm/@tarojs/redux/index.js");

var _util = require("../../utils/util.js");

var _index6 = require("../../utils/index.js");

var _globalData = require("../../constants/globalData.js");

var _home = require("../../actions/home.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["indexClassNames", "floorList", "showAuthModal", "shouldIndexHidden", "homeData", "__fn_onFetchIndexList"], _this.config = {
      navigationBarTitleText: 'eshop',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      disableScroll: true
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        shouldIndexHidden: false,
        showAuthModal: false
      };
      this.env = "weapp";
    }
  }, {
    key: "onGotoPage",
    value: function onGotoPage(venderId) {
      (0, _util.jumpUrl)("/pages/shop/shop?venderId=" + venderId);
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var home = this.props.homeData;
      var pages = _index2.default.getCurrentPages();
      var page = pages[pages.length - 1];
      var path = page.route + "?id=" + page.options.id;
      var imageUrl = home.floorData && home.floorData && home.floorData.floors[0] ? home.floorData.floors[0].items[0].image : '';
      return {
        title: 'Taro商城开发样例',
        path: path,
        imageUrl: imageUrl,
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
  }, {
    key: "hideAuthModal",
    value: function hideAuthModal() {
      this.setState({
        showAuthModal: false
      });
      _index2.default.setStorage({ key: 'isHomeLongHideAuthModal', data: true });
    }
  }, {
    key: "processAuthResult",
    value: function processAuthResult(userData) {
      _index2.default.setStorage({ key: 'isHomeLongHideAuthModal', data: true });
      if (userData.userInfo) {
        (0, _globalData.setGlobalData)('userData', userData);
      }
      this.setState({
        showAuthModal: false
      });
      (0, _index6.getIsAuth)();
    }
  }, {
    key: "onPullDownRefresh",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.state.shouldIndexHidden) {
                  _context.next = 4;
                  break;
                }

                _index2.default.stopPullDownRefresh(); // 停止下拉刷新
                _context.next = 7;
                break;

              case 4:
                _context.next = 6;
                return this.__triggerPropsFn("onFetchIndexList", [null].concat([]));

              case 6:
                _index2.default.stopPullDownRefresh(); // 停止下拉刷新

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPullDownRefresh() {
        return _ref2.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // 填充首页的数据
      this.__triggerPropsFn("onFetchIndexList", [null].concat([]));
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var userData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _index6.getUserInfo)();

              case 2:
                userData = _context2.sent;

                _index2.default.getStorage({
                  key: 'isHomeLongHideAuthModal',
                  success: function success(res) {
                    var isHomeLongHideAuthModal = res.data;
                    var showAuthModal = void 0;
                    if (!userData && !_this2.state.showAuthModal && !isHomeLongHideAuthModal) {
                      showAuthModal = true;
                    } else {
                      showAuthModal = false;
                    }
                    _this2.setState({
                      showAuthModal: showAuthModal
                    });
                  },
                  fail: function fail() {
                    var showAuthModal = void 0;
                    if (!userData || !_this2.state.showAuthModal) {
                      showAuthModal = true;
                    } else {
                      showAuthModal = false;
                    }
                    _this2.setState({
                      showAuthModal: showAuthModal
                    });
                  }
                }).catch(function () {});
                (0, _index6.getIsAuth)();

              case 5:
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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _state = this.__state,
          shouldIndexHidden = _state.shouldIndexHidden,
          showAuthModal = _state.showAuthModal;
      var _props$homeData$floo = this.__props.homeData.floorData,
          floorData = _props$homeData$floo === undefined ? [] : _props$homeData$floo;

      var indexClassNames = (0, _index4.default)('container', 'index', {
        hidden: shouldIndexHidden
      });
      var floorList = floorData.map(function (item) {
        return {
          className: 'index_item',
          venderId: item.venderId,
          image: item.image
        };
      });
      Object.assign(this.__state, {
        indexClassNames: indexClassNames,
        floorList: floorList
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.properties = {
  "homeData": {
    "type": null,
    "value": null
  },
  "__fn_onFetchIndexList": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onGotoPage", "hideAuthModal", "processAuthResult"], _temp2);


var Index__Connected = (0, _index5.connect)(function (_ref4) {
  var home = _ref4.home;
  return {
    homeData: home
  };
}, function (dispatch) {
  return {
    onFetchIndexList: function onFetchIndexList() {
      dispatch((0, _home.fetchIndexList)());
    }
  };
})(Index);
exports.default = Index__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index__Connected, true));