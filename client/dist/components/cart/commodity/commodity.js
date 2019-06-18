"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = require("../../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Commondity = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Commondity, _BaseComponent);

  function Commondity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Commondity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Commondity.__proto__ || Object.getPrototypeOf(Commondity)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "commoditys", "isEditStatus", "changeNumMap", "hasCommodity", "showConfirm", "isNeedFixedBar", "isFixedBar", "isFetching", "editSkuData"], _this.addCartNum = function (sku) {
      if (sku.isOutOfStock) {
        return;
      }var changeNumMap = _this.state.changeNumMap;

      var newNum = changeNumMap[sku.skuId] + 1;
      if (newNum > 200) {
        _index2.default.showToast({
          icon: 'none',
          title: '最多只能买200件'
        });
        newNum = 200;
      }
      _this.setState({
        changeNumMap: _extends({}, changeNumMap, _defineProperty({}, sku.skuId, newNum))
      });
    }, _this.minusCartNum = function (sku) {
      if (sku.isOutOfStock) {
        return;
      }var changeNumMap = _this.state.changeNumMap;

      var newNum = changeNumMap[sku.skuId] - 1;
      if (newNum > 0) {
        _this.setState({
          changeNumMap: _extends({}, changeNumMap, _defineProperty({}, sku.skuId, newNum))
        });
      } else {
        _this.setState({ showConfirm: true });
        _this.delSkuArr = [{ skuId: sku.skuId }];
      }
    }, _this.handleInput = function (sku, e) {
      if (sku.isOutOfStock) {
        return;
      }var changeNumMap = _this.state.changeNumMap;

      var numReg = /^[0-9]*$/;
      var num = e.detail.value;
      if (!numReg.test(num)) {
        _index2.default.showToast({
          icon: 'none',
          title: '请输入有效数字'
        });
        _this.setState({ changeNumMap: changeNumMap });
        return;
      }
      num = Number(num, 10);
      if (num <= 0) {
        return;
      } else if (num > 200) {
        _index2.default.showToast({
          icon: 'none',
          title: '最多只能买200件'
        });
        num = 200;
      }
      _this.setState({
        changeNumMap: _extends({}, changeNumMap, _defineProperty({}, sku.skuId, num))
      });
    }, _this.handleBlur = function (sku, e) {
      if (sku.isOutOfStock) {
        return;
      }var changeNumMap = _this.state.changeNumMap;

      var numReg = /^[0-9]*$/;
      var num = e.detail.value;
      if (!numReg.test(num)) {
        _index2.default.showToast({
          icon: 'none',
          title: '请输入有效数字'
        });
        _this.setState({ changeNumMap: changeNumMap });
        return;
      }
      num = Number(num, 10);
      if (num <= 0) {
        _this.setState({ showConfirm: true });
        _this.delSkuArr = [{ skuId: sku.skuId }];
        return;
      }
    }, _this.getSkuAttr = function (sku) {
      var onShowEditBox = _this.props.onShowEditBox;

      _this.changeAllCartNum();
      _this.__triggerPropsFn("onShowEditBox", [null].concat([sku]));
    }, _this.checkOneCart = function (sku, e) {
      e.stopPropagation();
      var _this$props = _this.props,
          isEditStatus = _this$props.isEditStatus,
          onFetchCheckCart = _this$props.onFetchCheckCart,
          onFetchInvertCheckCart = _this$props.onFetchInvertCheckCart,
          onInverseCheckDelCart = _this$props.onInverseCheckDelCart,
          onCheckDelCart = _this$props.onCheckDelCart;

      var skusArr = [{ skuId: sku.skuId }];
      // 下架商品不给操作
      if (!isEditStatus && sku.isOutOfStock) {
        return;
      }if (isEditStatus) {
        sku.checkDel ? _this.__triggerPropsFn("onInverseCheckDelCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onCheckDelCart", [null].concat([skusArr]));
      } else {
        sku.isCheck ? _this.__triggerPropsFn("onFetchInvertCheckCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onFetchCheckCart", [null].concat([skusArr]));
      }
    }, _this.checkShopCart = function (commodity) {
      var shop = commodity.shop,
          skus = commodity.skus;
      var _this$props2 = _this.props,
          isEditStatus = _this$props2.isEditStatus,
          onFetchCheckCart = _this$props2.onFetchCheckCart,
          onFetchInvertCheckCart = _this$props2.onFetchInvertCheckCart,
          onInverseCheckDelCart = _this$props2.onInverseCheckDelCart,
          onCheckDelCart = _this$props2.onCheckDelCart;

      var skusArr = [];
      if (isEditStatus) {
        skus.forEach(function (sku) {
          skusArr.push({ skuId: sku.skuId });
        });
        shop.checkDelAll ? _this.__triggerPropsFn("onInverseCheckDelCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onCheckDelCart", [null].concat([skusArr]));
      } else {
        skus.forEach(function (sku) {
          if (!sku.isOutOfStock) {
            skusArr.push({ skuId: sku.skuId });
          }
        });
        shop.checkAll ? _this.__triggerPropsFn("onFetchInvertCheckCart", [null].concat([skusArr])) : _this.__triggerPropsFn("onFetchCheckCart", [null].concat([skusArr]));
      }
    }, _this.handleEditClick = function () {
      var _this$props3 = _this.props,
          isEditStatus = _this$props3.isEditStatus,
          onChangeEditStatus = _this$props3.onChangeEditStatus;

      var afterStatus = !isEditStatus;
      if (!afterStatus) {
        _this.changeAllCartNum();
      }
      _this.__triggerPropsFn("onChangeEditStatus", [null].concat([afterStatus]));
    }, _this.gotoLogin = function () {
      var pages = _index2.default.getCurrentPages();
      var route = pages[pages.length - 1];
      (0, _util.jumpUrl)("../account/login/login?returnpage=/" + route.route);
    }, _this.gotoDetail = function (skuId) {
      (0, _util.jumpUrl)("../detail/detail?skuid=" + skuId);
    }, _this.gotoShop = function (venderId) {
      if (venderId === '8888' || venderId === 8888 || venderId === '') {
        return;
      }
      (0, _util.jumpUrl)("../shop/shop?venderId=" + venderId);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Commondity, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Commondity.prototype.__proto__ || Object.getPrototypeOf(Commondity.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        showConfirm: false,
        changeNumMap: {}
      };
      this.lastIsFixedBar = false;
      this.delSkuArr = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var commoditys = nextProps.commoditys,
          isFetching = nextProps.isFetching,
          editSkuData = nextProps.editSkuData,
          isFixedBar = nextProps.isFixedBar;
      var changeNumMap = this.state.changeNumMap;

      if (isFetching || editSkuData.showEidtBox) {
        return;
      }if (isFixedBar !== this.lastIsFixedBar) {
        this.lastIsFixedBar = isFixedBar;
        return;
      }
      commoditys.forEach(function (commodity) {
        commodity.skus.forEach(function (sku) {
          changeNumMap[sku.skuId] = sku.num;
        });
      });
      this.setState({ changeNumMap: changeNumMap });
    }
  }, {
    key: "hideDelPopup",
    value: function hideDelPopup() {
      this.setState({ showConfirm: false });
    }
  }, {
    key: "delCart",
    value: function delCart() {
      var onFetchDelCart = this.props.onFetchDelCart;

      this.__triggerPropsFn("onFetchDelCart", [null].concat([this.delSkuArr]));
      this.setState({ showConfirm: false });
    }
  }, {
    key: "changeAllCartNum",
    value: function changeAllCartNum() {
      var _props = this.props,
          commoditys = _props.commoditys,
          onFetchChangeCartNum = _props.onFetchChangeCartNum;
      var changeNumMap = this.state.changeNumMap;

      var skuArrs = [];
      commoditys.forEach(function (commodity) {
        commodity.skus.forEach(function (sku) {
          if (changeNumMap[sku.skuId] !== sku.num) {
            skuArrs.push({
              skuId: sku.skuId,
              num: changeNumMap[sku.skuId]
            });
          }
        });
      });
      skuArrs.length !== 0 && this.__triggerPropsFn("onFetchChangeCartNum", [null].concat([skuArrs]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props2 = this.__props,
          isFixedBar = _props2.isFixedBar,
          isEditStatus = _props2.isEditStatus,
          _props2$commoditys = _props2.commoditys,
          commoditys = _props2$commoditys === undefined ? [] : _props2$commoditys;
      var _state = this.__state,
          showConfirm = _state.showConfirm,
          changeNumMap = _state.changeNumMap;

      var hasCommodity = commoditys.length !== 0;

      var isNeedFixedBar = isFixedBar && hasCommodity;
      var loopArray0 = commoditys.map(function (commodity) {
        commodity = {
          $original: (0, _index.internal_get_original)(commodity)
        };
        var $loopState__temp2 = (0, _index.internal_inline_style)(isEditStatus || commodity.$original.shop.showCheckAll ? 'visibility: visible' : 'visibility: hidden');
        return {
          $loopState__temp2: $loopState__temp2,
          $original: commodity.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        commoditys: commoditys,
        isEditStatus: isEditStatus,
        hasCommodity: hasCommodity,
        isNeedFixedBar: isNeedFixedBar
      });
      return this.__state;
    }
  }]);

  return Commondity;
}(_index.Component), _class.properties = {
  "onFetchDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onFetchDelCart": {
    "type": null,
    "value": null
  },
  "onShowEditBox": {
    "type": null,
    "value": null
  },
  "__fn_onShowEditBox": {
    "type": null,
    "value": null
  },
  "isEditStatus": {
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
  "onInverseCheckDelCart": {
    "type": null,
    "value": null
  },
  "onCheckDelCart": {
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
  "onChangeEditStatus": {
    "type": null,
    "value": null
  },
  "__fn_onChangeEditStatus": {
    "type": null,
    "value": null
  },
  "commoditys": {
    "type": null,
    "value": null
  },
  "onFetchChangeCartNum": {
    "type": null,
    "value": null
  },
  "__fn_onFetchChangeCartNum": {
    "type": null,
    "value": null
  },
  "isFixedBar": {
    "type": null,
    "value": null
  },
  "isFetching": {
    "type": null,
    "value": null
  },
  "editSkuData": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["gotoShop", "checkShopCart", "checkOneCart", "gotoDetail", "getSkuAttr", "minusCartNum", "handleInput", "handleBlur", "addCartNum", "gotoLogin", "handleEditClick", "hideDelPopup", "delCart"], _temp2);
exports.default = Commondity;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Commondity));