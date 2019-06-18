"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconImg1 = 'data:image/png;base64,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';
var iconImg2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADXUlEQVRoge2ZzUsVURiHn3s1pZDCvlzcshLbVZuiD4oQgsAUotqUVOZfEBEFUVAtokUf1CJrU0EUFtQqKnDVIiKFIKpFSEWYFy0KKtNU9E6L8w7nYneud+acudfgPDCMznvmvL/fnTPvzDkDDofD4XA4HA7HtCQFHAU6gTQwAngl3L4DZ4Ey20argWvAWIkNBm0nbJptAQak4zGgA9gJLAYqbSYKwvO8nBvQJLp6beSpBG6gf8VOoM5Gx2HJYziRpc+IFNAlHQ0CraYdmhBkWEwbG14N9Esn74EVxooNidPwFuAXegjPtaLYkLgMbwdG5eRbwAxrig2Jw3AT2uwFVDGYNtg2vAlt9rx9uebYNFwPfJUT2uORa44tw3OA19L4PjG8ntnChuEk8FgadgEVsSo2xIbhg9LoC7AoXrnmmBpeDgxLo+b45ZpjYjgBPJcGN4sj1xwTwy0S7EMVrf+CqIYrgA8SbCueXHOiGt4rgTdM40dQLsIYTmadt0v2V4CJ4sktHf6Ub0mphYQlypCukYPfiqzVClGGdK3sPxZZa9HxDdfIfqBUQoqFb3i27AdLJaRYlEc4J4maNlahlj9Lcd8vRY3KH0APEVY0/DesO3nalAFH0NXcQz2+ngJrwiaMSDPwNiu/B3wC2sJW6T1ysCMgUTl6uugneQkMyf8jwA5rtnJzGMigP6F0oz7n+JrawxjeJgefBCQ7KfF+1MqlTxVwSWJD6Gpvm40os+PAIfStmAB2o3/41kINr0dP9iczE7U0m5HEubgr51+MaGgqHkr/pwLi+yT+rlDDdeihOpkGiXXnEbRB2rzKOpZCDb0wH7387UVWPwn0/Hx+QP4kqnh6QGqS4WHZAD00elHrVz05Olsg+748htOyr846lkHd21H4k/V3FWqUjRDwRPA8L5NIJPqBeaIhnRVuDJt8HTJc8rRp5N8rYxP/6tUHxGeh7uMMMDegeBVMGerqesD+HPEK9CrJ8VA9F8516f9eQPy0xJ/leTyFwi8Ko8AxYCHqvlmLeg57wGf0G5ttlgG/Jc8DYKXkrwMuoyv4ZluGAc4QXGTSIiJOtgI/A/KPAQemmDVFogF4JInHUUtC5wiunrapBa6iiuwEahn5NrAqn1kTww6Hw+FwOBwOh0PxF8yWc2uUXfUeAAAAAElFTkSuQmCC';
var iconImg3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAE3klEQVRoge3aWaxdUxjA8V9Lb4vr0pjaBolQlBShSAwxNKYnHhBShDQSREXUg0SIKakhEkNUggiCB4khESEiTYuI4YkaWkJaNIaqDlpTy/Hwre24nH3v2fusfS9x/8nOurn7fNNZ+3z7W99ajDHGGGP8hxjXsP5+HIujsR/2xRTsgIlYhw34EsvxLhZhacN+ZaUfF+JlbEarxrUS9+DA3M7lnOHdcCUuw0D63xa8g8Vi1j7GV9goZnbHdO2DGTgMp4inoOBVXIKPMvraE324Fpu0Z2gJ5opHtyrjcCjuFY98C1dn8TQDh4tZKwJ9GrMy6u/HqZiUUWdt5uNXEehSHD+q3jTI1nhQBPo77hQZd6TZRTwBjbIVnhHBbsIZTRssYRLW4hPs3pSRcXhcBLsaRzRlqAvG443ky3vqJcdhuSEZWIdDmjBQkZ1EsC28KHMRdZr4vf6CE3Mq7pHd8Y0I+ppcSifj66R0fi6lGZmN38QbY/8cCh8SwS5W7bHpU//9OTD8RwZxj/BxkR4f7Zni2/tJFP5V+AArsHdFuRuF8+dUkBnQfrRPq2hvEMUr6K4asi8l2S90H/TNSWaz6oXMVUn2tYpyf7K3SFQ/GlzMd8t2oqbuNui/BntmDXv94nXZEouQyhQOPFJHONFt0LfoLdiC25Oeu+sIr0jCx/TgAMMHnStYOCjp+lrF5LVfXcESyoLOGWzBF0nnzCpClyehxzM5wT+Dvk/+YOHRpHdeFaHi3XtpRkcYHHQTwRIdlxYe6HRz6xKhGWms01aZhOcwfYj7BZtxW7r+zpb0/4cr2l+WxkpV1yrxLdVZek0WPas6zbu/Xwtr2N8ryX7e6WbZDBel3boaBtdiDxF4GTdhDq7HE0N8bmUN+9+nseOSsSzgopOwsYZBIui1Q9zfkMbv8FlNG2WsT2PHenx8idDmNE7I7MxIUOSInzvdLAu4mIGqq5Z/A4XPP3S6WfZIfys6CtOwpqLB4bI07JzGm5T3nOtm6alp/LaK0LMi051d0Rijn6XPTLLPd7pZNsMfio7kwXiqosHRztKHprHjhlxZwK+ncbbYRqnKaGbp49L4ZqebZUlriWjYzdL+vf0XGBDbP7+JTbh/UBbwj3hFNN7PbcS1ZjhLvEoXKymaygKmvfCfm9WlZrkgjbVWeX3a7dmeGmMdWCj/amxW0rke25d9aKgZ/hV3pL+vl7ezvzqNdUvXThTJ9X4lRUc3bCt27Fu4KINTBdvgJJEjcnCC9gZfnYbjIM7V3kDbtVdlDdCH94WPdV6hHXk5KXxB8yd/qrJA+LZcxn3qqdoJbEEupRk4XXuT7/DcymcnxS3R5BttjtQ+SHNVU0bmiG/0d1zRlJEuOEKs4lp4rGlj80TALdwqX6btlpNELV6cGhoR++drn+BZJMOroAvGiSy8Jdl9QmToEeME7Xf0Glxs6EKmF/YV9XFLLAxyF0JdM0WcrygW7G+Lg2S5nJkqtmqLZLkKJ2fS3RNna/eyW6IQmCfOX1ZlvFjTPioaccWs3i/OZf5r2EYEWWxmFY6+JbYxzxMF/jSxbp0guiLTxaxdiSdFL+qv8k/igBGMozITREHwnMEHTqtcH+M67JnbuaZ/+BNxlNhjPlDs90zVPiC+QbSCPhV7Qu+JbsuyTsrGGGOMMf53/AEkUnXEe+3LvwAAAABJRU5ErkJggg==';
var iconImg4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB+UlEQVRoge3av2vUYBzH8dfVoq1Q6yAqIuIg4qibu7O6KU7ioEtX/wI3V3dd/DUVdHHrrCA4iZOgICilYkVRrKVXh+QwzeX0Yn54Dd83BI4nXz75vi8JPDx5CIIg2Eb0GsyexlxD2Z+x2VA2WEovMCnHw1x/d3GvTuH/LZg/nhT01x9HZLqct5P4mhv7jrWSOWUZ5xGu9fUc/LPzdYbWyKC/yQ2smbH7m2q4kYkjhLtOCHedEO46IVySQ3ivvTn0W+yt0nBV4R2YqZhRhpn0mo0TU8vtSgh3nRDuOiHcdaoKH8SK9mZaKzhQpeGqwn2sV8wow7qWJkAx09quhHDXCeGuM47wzsa7aJFxhGcb76JF4pHuOiHcdUK464Rw1wnhlrLK7qmqrc+qQcexKFlr2sA73DB6OnoBzyWb2b7hKc6OqJ3DTXxIs5fxAEcr9vxX5hUvoZzAaubcRub3kuFdftcz5/u2Ls5dy9XuwrMR2cuGpWtdghol/Dgduy/5TtzDabxOxy9navfjB37iikRoFgupzBfsydQvpBkvcSodO4JHmWtmqVW4h0+23pHBsYrdufrzI2o3cacgf/EP9Wdytfskr0NR7Zt/Vxzmkt8bPLOyFwtqp3Bbcjez9S9wuKD+GF7latdwa0QvVyVPRLb+I86V1wqCIAgmi1/tOQiqlfXZbQAAAABJRU5ErkJggg==';

var OrderDetail = (_dec = (0, _index3.connect)(function (_ref) {
  var orderDetail = _ref.orderDetail;
  return {
    orderDetail: orderDetail.all
  };
}, function (dispatch) {
  return {
    fetchOrderById: function fetchOrderById(orderId, callback) {
      dispatch((0, _order.fetchOrderById)(orderId, callback));
    },
    fetchCancelOrder: function fetchCancelOrder(orderId, callback) {
      dispatch((0, _order.fetchCancelOrder)(orderId, callback));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderDetail, _BaseComponent);

  function OrderDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "isFirst", "canShowDetail", "isShowTip", "orderState", "iconImg1", "iconImg2", "venderId", "shopInfoSrc", "skuInfoList", "iconImg3", "iconImg4", "isShowCancelReasonPanel", "cancelTips", "cancelReason", "isShowRefundReasonPanel", "refundReason", "isShowUserAuthModal", "isIpx", "isShowUserAuth", "detail", "orderId", "orderStateStr", "cancelReasonText", "orderDate", "totalGoodsCount", "payType", "ptKey", "fetchOrderById", "fetchCancelOrder", "orderDetail"], _this.config = {
      navigationBarTitleText: '订单详情',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      disableScroll: true
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
    }, _this.closeTip = function () {
      _this.setState({
        isShowTip: false
      });
    }, _this.payOrder = function () {
      _index2.default.showToast({
        title: '你点击了付款',
        icon: 'none'
      });
    }, _this.contactService = function () {
      _index2.default.makePhoneCall({
        phoneNumber: '4006563355'
      });
    }, _this.getCancelReason = function () {
      _this.setState({
        isShowCancelReasonPanel: true
      });
    }, _this.onHideCancelReason = function () {
      _this.setState({
        isShowCancelReasonPanel: false
      });
    }, _this.hideRefundReasonPanel = function () {
      _this.setState({
        isShowRefundReasonPanel: false
      });
    }, _this.onCancelOrder = function (reason, e) {
      _this.props.fetchCancelOrder({
        orderId: _this.state.orderId,
        cancelReasonText: reason.desc
      }, function (res) {
        _index2.default.showToast({
          icon: 'none',
          title: '订单取消成功，请稍后刷新'
        });
        setTimeout(function () {
          (0, _util.jumpUrl)('../list/list', {
            method: 'switchTab'
          });
        }, 1500);
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderDetail.prototype.__proto__ || Object.getPrototypeOf(OrderDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        ptKey: false,
        isFirst: true,
        orderId: '',
        isShowTip: true,
        isShowCancelReasonPanel: false,
        isShowRefundReasonPanel: false,
        isShowUserAuth: false,
        isShowUserAuthModal: false,
        cancelTips: ['订单取消后无法恢复。', '拆单后取消订单，所使用的优惠券不再返还。'],
        cancelReason: [{
          desc: '不想买了'
        }, {
          desc: '选错了尺码'
        }, {
          desc: '太贵了，手滑点错'
        }, {
          desc: '我只是测试人员，点来测试的'
        }, {
          desc: '就是想取消，没什么原因'
        }]
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var ptKey = (0, _util.getLoginStatus)();
      var orderId = this.$router.params.orderId;

      var systemInfo = (0, _util.getSystemInfo)();
      var userData = (0, _globalData.getGlobalData)('userData');
      this.setState({
        ptKey: ptKey,
        orderId: orderId,
        isFirst: true,
        isShowTip: true,
        isShowUserAuth: isShowUserAuth,
        isIpx: systemInfo.isIpx,
        systemInfo: systemInfo
      });
      if (_index2.default.getEnv() === 'WEB') {
        return;
      }var isShowUserAuth = false;
      if (!userData) {
        isShowUserAuth = true;
      }
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.init(true);
    }
  }, {
    key: "onPullDownRefresh",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.init(false);

              case 2:
                _index2.default.stopPullDownRefresh();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPullDownRefresh() {
        return _ref3.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: "init",
    value: function init() {
      var orderId = this.state.orderId;
      this.props.fetchOrderById(orderId);
      this.setState({
        isFirst: false
      });
    }
  }, {
    key: "gotoBrand",
    value: function gotoBrand(venderId) {
      if (venderId) {
        (0, _util.jumpUrl)("../../../shop/shop?venderId=" + venderId);
      }
    }
  }, {
    key: "gotoDetail",
    value: function gotoDetail(skuId) {
      (0, _util.jumpUrl)("../../../detail/detail?skuId=" + skuId);
    }
  }, {
    key: "deleteOrder",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _index2.default.showModal({
                  title: '提示',
                  content: '您确定要删除当前订单吗？',
                  showCancel: true,
                  cancelText: '容我想想',
                  cancelColor: '#232321',
                  confirmText: '确定删除',
                  confirmColor: '#999999'
                });

              case 2:
                res = _context2.sent;

                if (res.confirm) {
                  _index2.default.showToast({
                    icon: 'none',
                    title: '你触发了删除订单'
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteOrder(_x) {
        return _ref4.apply(this, arguments);
      }

      return deleteOrder;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _state = this.__state,
          orderId = _state.orderId,
          isShowTip = _state.isShowTip,
          cancelTips = _state.cancelTips,
          isShowCancelReasonPanel = _state.isShowCancelReasonPanel,
          isShowRefundReasonPanel = _state.isShowRefundReasonPanel,
          isFirst = _state.isFirst,
          isShowUserAuthModal = _state.isShowUserAuthModal,
          isShowUserAuth = _state.isShowUserAuth,
          isIpx = _state.isIpx,
          cancelReason = _state.cancelReason;
      var _props = this.__props,
          detail = _props.detail,
          refundReason = _props.refundReason;
      var _props$orderDetail = this.__props.orderDetail,
          _props$orderDetail$sk = _props$orderDetail.skuInfoList,
          skuInfoList = _props$orderDetail$sk === undefined ? [] : _props$orderDetail$sk,
          _props$orderDetail$sh = _props$orderDetail.shouldPayPrice,
          shouldPayPrice = _props$orderDetail$sh === undefined ? 0 : _props$orderDetail$sh,
          shopInfo = _props$orderDetail.shopInfo,
          _props$orderDetail$da = _props$orderDetail.dateSubmit,
          dateSubmit = _props$orderDetail$da === undefined ? {} : _props$orderDetail$da,
          orderState = _props$orderDetail.orderState,
          payType = _props$orderDetail.payType,
          cancelReasonText = _props$orderDetail.cancelReasonText;

      var shopInfoSrc = void 0;
      var venderId = void 0;

      var totalGoodsCount = 0;
      skuInfoList = skuInfoList.slice(0).map(function (sku) {
        venderId = sku.venderId;
        shopInfoSrc = shopInfo[sku.venderId].thumbnail;
        var newSku = _extends({}, sku);
        newSku.imageUrl = sku.info.images[0];
        totalGoodsCount += newSku.num;
        return newSku;
      });

      var orderDate = (0, _util.getParseDay)(dateSubmit.$date) + " " + (0, _util.getParseTime)(dateSubmit.$date);
      var orderStateStr = orderState === 1 ? '待支付' : '已取消';
      var canShowDetail = skuInfoList;
      var freightPrice = 14;

      var anonymousState__temp = !isFirst && canShowDetail ? (0, _util.parseMoney)(shouldPayPrice - freightPrice) : null;
      var anonymousState__temp2 = !isFirst && canShowDetail ? (0, _util.parseMoney)(freightPrice) : null;
      var anonymousState__temp3 = !isFirst && canShowDetail ? (0, _util.parseMoney)(shouldPayPrice) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        canShowDetail: canShowDetail,
        orderState: orderState,
        iconImg1: iconImg1,
        iconImg2: iconImg2,
        venderId: venderId,
        shopInfoSrc: shopInfoSrc,
        skuInfoList: skuInfoList,
        iconImg3: iconImg3,
        iconImg4: iconImg4,
        refundReason: refundReason,
        isIpx: isIpx,
        detail: detail,
        orderStateStr: orderStateStr,
        cancelReasonText: cancelReasonText,
        orderDate: orderDate,
        totalGoodsCount: totalGoodsCount,
        payType: payType
      });
      return this.__state;
    }
  }]);

  return OrderDetail;
}(_index.Component), _class2.properties = {
  "fetchOrderById": {
    "type": null,
    "value": null
  },
  "fetchCancelOrder": {
    "type": null,
    "value": null
  },
  "detail": {
    "type": null,
    "value": null
  },
  "refundReason": {
    "type": null,
    "value": null
  },
  "orderDetail": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["closeTip", "gotoBrand", "gotoDetail", "onHideCancelReason", "onCancelOrder", "hideRefundReasonPanel", "refundOrder", "onHideUserAuthModal", "onProcessAuthResult", "deleteOrder", "contactService", "getCancelReason", "payOrder", "showUserAuthModal"], _temp2)) || _class);
exports.default = OrderDetail;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderDetail, true));