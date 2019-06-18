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

var _detail = require("../../actions/detail.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bagImage = "/pages/detail/bag.png";

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["sku", "isFirst", "isIpx", "detailInfoRow", "serviceInfo", "isShowCartLayer", "colorValue", "sizeValue", "bagImage", "cartNum", "systemInfo", "skuId", "areaId", "areasName", "showAddress", "showMore", "showColorValue", "showSizeValue", "fetchSkuData", "fetchCart", "fetchAddCart"], _this.config = {
      navigationBarTitleText: '商品详情',
      enablePullDownRefresh: false,
      disableScroll: true
    }, _this.toggleFold = function (idx) {
      var detailInfoRow = _this.state.detailInfoRow;

      detailInfoRow[idx].open = !detailInfoRow[idx].open;
      var newDetailInfoRow = detailInfoRow;
      _this.setState({
        detailInfoRow: newDetailInfoRow
      });
    }, _this.toggleDetailLayer = function () {
      _this.setState({ isShowCartLayer: !_this.state.isShowCartLayer });
    }, _this.toggleShowMore = function () {
      _this.setState({ showMore: !_this.state.showMore });
    }, _this.changeAttr = function (type, value) {
      if (type === 'color') {
        _this.setState({ showColorValue: value });
      } else if (type === 'size') {
        _this.setState({ showSizeValue: value });
      }
    }, _this.addToCart = function () {
      var _this$props = _this.props,
          fetchAddCart = _this$props.fetchAddCart,
          sku = _this$props.sku;
      var _this$state = _this.state,
          showColorValue = _this$state.showColorValue,
          showSizeValue = _this$state.showSizeValue;

      var newSku = [{
        skuId: sku.skuId,
        num: 1,
        color: showColorValue || sku.colorInfo.value,
        size: showSizeValue || sku.sizeInfo.value
      }];

      fetchAddCart(newSku);

      _this.setState({ isShowCartLayer: false });
    }, _this.toCartTab = function () {
      (0, _util.jumpUrl)('/pages/cart/cart_sub');
    }, _this.toShop = function (e) {
      var url = '/pages/shop/shop?venderId=' + e.currentTarget.dataset.venderid;
      (0, _util.jumpUrl)(url);
    }, _this.stopTouchMove = function (e) {
      if (_this.state.isShowCartLayer) {
        e.stopPropagation();
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        detailInfoRow: [{
          name: 'desc',
          title: '商品描述',
          show: true,
          open: true
        }, {
          name: 'size',
          title: '尺寸说明',
          show: true,
          open: false
        }, {
          name: 'service',
          title: '服务说明',
          show: true,
          open: false
        }],
        isFirst: true,
        isShowCartLayer: false,
        systemInfo: {},
        skuId: '',
        areaId: '1-72-4137-0',
        areasName: '深圳市宝安区龙光世纪大厦',
        showAddress: false,
        isIpx: false,
        showMore: false,
        showColorValue: '',
        showSizeValue: ''
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params, systemInfo, skuId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = this.$router.params;
                systemInfo = (0, _util.getSystemInfo)();

                this.setState({
                  isFirst: false,
                  isIpx: systemInfo.isIpx,
                  systemInfo: systemInfo
                });
                console.log(params, this.props);
                skuId = params.skuId || params.skuid || '1';

                _index2.default.showNavigationBarLoading();
                _context.next = 8;
                return Promise.all[(this.props.fetchSkuData(skuId), this.props.fetchCart())];

              case 8:
                _index2.default.hideNavigationBarLoading();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        isShowCartLayer: false,
        showMore: false,
        detailInfoRow: [{
          name: 'desc',
          title: '商品描述',
          show: true,
          open: true
        }, {
          name: 'editor',
          title: '编辑笔记',
          show: true,
          open: false
        }, {
          name: 'size',
          title: '尺寸说明',
          show: true,
          open: false
        }, {
          name: 'service',
          title: '服务说明',
          show: true,
          open: false
        }]
      });
    }
  }, {
    key: "connectService",


    // more里的联系客服
    value: function connectService() {
      _index2.default.makePhoneCall({
        phoneNumber: '4006563355' //仅为示例，并非真实的电话号码
      });
    }

    // 跳转去购物车

  }, {
    key: "gotoIndex",
    value: function gotoIndex() {
      {
        _index2.default.switchTab({
          url: '/pages/index/index'
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
          isFirst = _state.isFirst,
          isIpx = _state.isIpx,
          detailInfoRow = _state.detailInfoRow,
          isShowCartLayer = _state.isShowCartLayer,
          serviceInfo = _state.serviceInfo,
          systemInfo = _state.systemInfo,
          showColorValue = _state.showColorValue,
          showSizeValue = _state.showSizeValue;
      var _props = this.__props,
          sku = _props.sku,
          cartNum = _props.cartNum;
      var _sku$colorInfo = sku.colorInfo,
          colorInfo = _sku$colorInfo === undefined ? {} : _sku$colorInfo,
          _sku$sizeInfo = sku.sizeInfo,
          sizeInfo = _sku$sizeInfo === undefined ? {} : _sku$sizeInfo;


      var colorValue = showColorValue || colorInfo.value;
      var sizeValue = showSizeValue || sizeInfo.value;

      Object.assign(this.__state, {
        sku: sku,
        serviceInfo: serviceInfo,
        colorValue: colorValue,
        sizeValue: sizeValue,
        bagImage: bagImage,
        cartNum: cartNum
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.properties = {
  "fetchSkuData": {
    "type": null,
    "value": null
  },
  "fetchCart": {
    "type": null,
    "value": null
  },
  "fetchAddCart": {
    "type": null,
    "value": null
  },
  "sku": {
    "type": null,
    "value": null
  },
  "cartNum": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["connectService", "gotoIndex", "toggleShowMore", "swpierChange", "toggleFold", "gotoAfterSale", "toggleDetailLayer", "stopTouchMove", "selecteAddress", "changeAttr", "addToCart", "toCartTab"], _temp2);


var Detail__Connected = (0, _index3.connect)(function (_ref3) {
  var detail = _ref3.detail;
  return {
    isFetching: detail.isFetching,
    sku: detail.sku,
    cartInfo: detail.cartInfo,
    cartNum: detail.cartNum
  };
}, function (dispatch) {
  return {
    fetchSkuData: function fetchSkuData() {
      dispatch(_detail.fetchSkuData.apply(undefined, arguments));
    },
    fetchCart: function fetchCart() {
      dispatch(_detail.fetchCart.apply(undefined, arguments));
    },
    fetchAddCart: function fetchAddCart() {
      dispatch(_detail.fetchAddCart.apply(undefined, arguments));
    }
  };
})(Detail);
exports.default = Detail__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail__Connected, true));