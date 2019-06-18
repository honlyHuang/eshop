"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = require("../../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterMask = (_temp2 = _class = function (_BaseComponent) {
  _inherits(FilterMask, _BaseComponent);

  function FilterMask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FilterMask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterMask.__proto__ || Object.getPrototypeOf(FilterMask)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["showFilterMask", "filterContentClass", "promotionType", "priceMin", "priceMax", "isIpx", "__fn_onShowFilterMask", "__fn_onConfirmSelect"], _this.state = {
      priceMin: '',
      priceMax: '',
      isIpx: false,
      promotionType: -1
    }, _this.resetSearch = function () {
      _this.setState({
        priceMin: '',
        priceMax: '',
        promotionType: -1
      });
    }, _this.addPromotion = function (promotionType) {
      promotionType = _this.state.promotionType === promotionType ? 0 : promotionType;
      _this.setState({
        promotionType: promotionType
      });
    }, _this.showFilterMask = function () {
      _this.__triggerPropsFn("onShowFilterMask", [null].concat([]));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FilterMask, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(FilterMask.prototype.__proto__ || Object.getPrototypeOf(FilterMask.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        priceMin: '',
        priceMax: ''
      });
      // 获取系统信息
      var systemInfo = (0, _util.getSystemInfo)();
      this.setState({
        isIpx: systemInfo.isIpx
      });
    }
  }, {
    key: "confirmSelect",


    /**
     * 确定选择
     * @param {} event
     */
    value: function confirmSelect() {
      var _state = this.state,
          priceMin = _state.priceMin,
          priceMax = _state.priceMax,
          promotionType = _state.promotionType;

      if (parseInt(priceMin) > parseInt(priceMax)) {
        this.setState({
          priceMin: priceMax,
          priceMax: priceMin
        });
      }
      var data = {
        priceMin: this.state.priceMin,
        priceMax: this.state.priceMax,
        promotionType: promotionType
      };
      this.__triggerPropsFn("onShowFilterMask", [null].concat([]));
      this.__triggerPropsFn("onConfirmSelect", [null].concat([data]));
    }
  }, {
    key: "priceInput",
    value: function priceInput(type, _ref2) {
      var detail = _ref2.detail;

      var value = detail.value;
      if (value && value > 0) {
        value = (value + '').replace(/\b(0+)/gi, '');
      } else {
        value = (value + '').replace(/\b(0+)/gi, 0);
      }
      if (type === 'min') {
        this.setState({
          priceMin: value
        });
      } else if (type === 'max') {
        this.setState({
          priceMax: value
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

      var _state2 = this.__state,
          isIpx = _state2.isIpx,
          priceMin = _state2.priceMin,
          priceMax = _state2.priceMax,
          promotionType = _state2.promotionType;
      var showFilterMask = this.__props.showFilterMask;

      var filterContentClass = showFilterMask ? 'filter_mask_content search_animation' : 'filter_mask_content';
      Object.assign(this.__state, {
        filterContentClass: filterContentClass
      });
      return this.__state;
    }
  }]);

  return FilterMask;
}(_index.Component), _class.properties = {
  "__fn_onShowFilterMask": {
    "type": null,
    "value": null
  },
  "__fn_onConfirmSelect": {
    "type": null,
    "value": null
  },
  "showFilterMask": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["showFilterMask", "addPromotion", "priceInput", "resetSearch", "confirmSelect"], _temp2);


FilterMask.defaultProps = {
  showFilterMask: false
};
exports.default = FilterMask;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(FilterMask));