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

var _cart = require("../../../actions/cart.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommondityContainer = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CommondityContainer, _BaseComponent);

  function CommondityContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CommondityContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommondityContainer.__proto__ || Object.getPrototypeOf(CommondityContainer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["commoditys", "editSkuData", "isEditStatus", "isFetching", "isFixedBar", "fetchCheckCart", "fetchInvertCheckCart", "checkDelCart", "inverseCheckDelCart", "showEditBox", "fetchCart", "fetchChangeCartNum", "fetchDelCart", "changeEditStatus", "__fn_onFetchCart", "__fn_onFetchCheckCart", "__fn_onFetchInvertCheckCart", "__fn_onCheckDelCart", "__fn_onInverseCheckDelCart", "__fn_onShowEditBox", "__fn_onFetchChangeCartNum", "__fn_onFetchDelCart", "__fn_onChangeEditStatus"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CommondityContainer, [{
    key: "_constructor",
    value: function _constructor() {
      var _get2;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get2 = _get(CommondityContainer.prototype.__proto__ || Object.getPrototypeOf(CommondityContainer.prototype), "_constructor", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props = this.__props,
          isFixedBar = _props.isFixedBar,
          commoditys = _props.commoditys,
          editSkuData = _props.editSkuData,
          isEditStatus = _props.isEditStatus,
          isFetching = _props.isFetching,
          fetchCheckCart = _props.fetchCheckCart,
          fetchInvertCheckCart = _props.fetchInvertCheckCart,
          checkDelCart = _props.checkDelCart,
          inverseCheckDelCart = _props.inverseCheckDelCart,
          showEditBox = _props.showEditBox,
          fetchCart = _props.fetchCart,
          fetchChangeCartNum = _props.fetchChangeCartNum,
          fetchDelCart = _props.fetchDelCart,
          changeEditStatus = _props.changeEditStatus;

      Object.assign(this.__state, {
        commoditys: commoditys,
        editSkuData: editSkuData,
        isEditStatus: isEditStatus,
        isFetching: isFetching,
        isFixedBar: isFixedBar
      });
      return this.__state;
    }
  }, {
    key: "funPrivateKzAuW",
    value: function funPrivateKzAuW() {
      this.__triggerPropsFn("fetchCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateyproj",
    value: function funPrivateyproj() {
      this.__triggerPropsFn("fetchCheckCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateyRwwE",
    value: function funPrivateyRwwE() {
      this.__triggerPropsFn("fetchInvertCheckCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivatebIfvy",
    value: function funPrivatebIfvy() {
      this.__triggerPropsFn("checkDelCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateWnKSC",
    value: function funPrivateWnKSC() {
      this.__triggerPropsFn("inverseCheckDelCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivategMWhH",
    value: function funPrivategMWhH() {
      this.__triggerPropsFn("showEditBox", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateretoe",
    value: function funPrivateretoe() {
      this.__triggerPropsFn("fetchChangeCartNum", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateqNTUW",
    value: function funPrivateqNTUW() {
      this.__triggerPropsFn("fetchDelCart", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateUnOFd",
    value: function funPrivateUnOFd() {
      this.__triggerPropsFn("changeEditStatus", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return CommondityContainer;
}(_index.Component), _class.properties = {
  "isFixedBar": {
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
  "isEditStatus": {
    "type": null,
    "value": null
  },
  "isFetching": {
    "type": null,
    "value": null
  },
  "fetchCheckCart": {
    "type": null,
    "value": null
  },
  "fetchInvertCheckCart": {
    "type": null,
    "value": null
  },
  "checkDelCart": {
    "type": null,
    "value": null
  },
  "inverseCheckDelCart": {
    "type": null,
    "value": null
  },
  "showEditBox": {
    "type": null,
    "value": null
  },
  "fetchCart": {
    "type": null,
    "value": null
  },
  "fetchChangeCartNum": {
    "type": null,
    "value": null
  },
  "fetchDelCart": {
    "type": null,
    "value": null
  },
  "changeEditStatus": {
    "type": null,
    "value": null
  },
  "__fn_onFetchCart": {
    "type": null,
    "value": null
  },
  "__fn_onFetchCheckCart": {
    "type": null,
    "value": null
  },
  "__fn_onFetchInvertCheckCart": {
    "type": null,
    "value": null
  },
  "__fn_onCheckDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onInverseCheckDelCart": {
    "type": null,
    "value": null
  },
  "__fn_onShowEditBox": {
    "type": null,
    "value": null
  },
  "__fn_onFetchChangeCartNum": {
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
  }
}, _class.$$events = ["funPrivateKzAuW", "funPrivateyproj", "funPrivateyRwwE", "funPrivatebIfvy", "funPrivateWnKSC", "funPrivategMWhH", "funPrivateretoe", "funPrivateqNTUW", "funPrivateUnOFd"], _temp2);


var CommondityContainer__Connected = (0, _index3.connect)(function (_ref2) {
  var cart = _ref2.cart;

  return {
    editSkuData: cart.editSkuData,
    commoditys: cart.commoditys,
    isEditStatus: cart.isEditStatus,
    isFetching: cart.isFetching
  };
}, function (dispatch) {
  return {
    fetchCart: function fetchCart() {
      dispatch(_cart.fetchCart.apply(undefined, arguments));
    },
    fetchCheckCart: function fetchCheckCart() {
      dispatch(_cart.fetchCheckCart.apply(undefined, arguments));
    },
    fetchInvertCheckCart: function fetchInvertCheckCart() {
      dispatch(_cart.fetchInvertCheckCart.apply(undefined, arguments));
    },
    checkDelCart: function checkDelCart() {
      dispatch(_cart.checkDelCart.apply(undefined, arguments));
    },
    inverseCheckDelCart: function inverseCheckDelCart() {
      dispatch(_cart.inverseCheckDelCart.apply(undefined, arguments));
    },
    showEditBox: function showEditBox() {
      dispatch(_cart.showEditBox.apply(undefined, arguments));
    },
    fetchChangeCartNum: function fetchChangeCartNum() {
      dispatch(_cart.fetchChangeCartNum.apply(undefined, arguments));
    },
    fetchDelCart: function fetchDelCart() {
      dispatch(_cart.fetchDelCart.apply(undefined, arguments));
    },
    changeCouponStatus: function changeCouponStatus() {
      dispatch(_cart.changeCouponStatus.apply(undefined, arguments));
    },
    changeEditStatus: function changeEditStatus() {
      dispatch(_cart.changeEditStatus.apply(undefined, arguments));
    }
  };
})(CommondityContainer);
exports.default = CommondityContainer__Connected;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CommondityContainer__Connected));