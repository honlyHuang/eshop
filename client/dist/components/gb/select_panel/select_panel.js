"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPanel = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SelectPanel, _BaseComponent);

  function SelectPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["selectPanelClassName", "tips", "detail", "confirmDisable", "title", "subTitle", "confirmBtnText", "cancelBtnText", "isShow", "selectedIndex", "selectedDetail"], _this.closePanel = function () {
      _this.setState({
        isShow: false
      });
    }, _this.confirmSelect = function () {
      if (_this.state.selectedIndex !== -1) {
        _this.setState({
          isShow: false
        }, function () {
          _this.props.onSelected && _this.__triggerPropsFn("onSelected", [null].concat([_this.state.selectedDetail]));
        });
      }
    }, _this.onAnimationEnd = function () {
      if (!_this.state.isShow) {
        _this.setState({
          isShow: true,
          selectedIndex: -1,
          selectedDetail: null
        });
        _this.props.onClose && _this.__triggerPropsFn("onClose", [null].concat([]));
      }
    }, _this.touchMove = function (e) {
      e && e.stopPropagation();
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectPanel, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SelectPanel.prototype.__proto__ || Object.getPrototypeOf(SelectPanel.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isShow: true,
        selectedIndex: -1,
        selectedDetail: null
      };
    }
  }, {
    key: "seleted",
    value: function seleted(index, item) {
      this.setState({
        selectedIndex: index,
        selectedDetail: item
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props = this.__props,
          _props$detail = _props.detail,
          detail = _props$detail === undefined ? [] : _props$detail,
          title = _props.title,
          tips = _props.tips,
          subTitle = _props.subTitle,
          cancelBtnText = _props.cancelBtnText,
          confirmBtnText = _props.confirmBtnText;

      var selectPanelClassName = (0, _index4.default)('select_panel', !this.__state.isShow && 'hide');
      var confirmDisable = this.__state.selectedIndex === -1;

      Object.assign(this.__state, {
        selectPanelClassName: selectPanelClassName,
        tips: tips,
        detail: detail,
        confirmDisable: confirmDisable,
        title: title,
        subTitle: subTitle,
        confirmBtnText: confirmBtnText,
        cancelBtnText: cancelBtnText
      });
      return this.__state;
    }
  }]);

  return SelectPanel;
}(_index.Component), _class.properties = {
  "onSelected": {
    "type": null,
    "value": null
  },
  "__fn_onSelected": {
    "type": null,
    "value": null
  },
  "onClose": {
    "type": null,
    "value": null
  },
  "__fn_onClose": {
    "type": null,
    "value": null
  },
  "detail": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "tips": {
    "type": null,
    "value": null
  },
  "subTitle": {
    "type": null,
    "value": null
  },
  "cancelBtnText": {
    "type": null,
    "value": null
  },
  "confirmBtnText": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["touchMove", "onAnimationEnd", "closePanel", "seleted", "confirmSelect"], _temp2);
exports.default = SelectPanel;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SelectPanel));