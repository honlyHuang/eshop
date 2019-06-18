"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_TITLE = '热门搜索';

var SearchHot = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchHot, _BaseComponent);

  function SearchHot() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchHot);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchHot.__proto__ || Object.getPrototypeOf(SearchHot)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["hotWords", "titleName", "__fn_onAddHistory", "__fn_onSearchWords"], _this.goSearch = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (value) {
        _this.__triggerPropsFn("onAddHistory", [null].concat([{ value: value, type: 'add' }]));
        _this.__triggerPropsFn("onSearchWords", [null].concat([{ keyWords: value }]));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchHot, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchHot.prototype.__proto__ || Object.getPrototypeOf(SearchHot.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props = this.__props,
          hotWords = _props.hotWords,
          titleName = _props.titleName;

      Object.assign(this.__state, {
        hotWords: hotWords,
        titleName: titleName
      });
      return this.__state;
    }
  }]);

  return SearchHot;
}(_index.Component), _class.properties = {
  "__fn_onAddHistory": {
    "type": null,
    "value": null
  },
  "__fn_onSearchWords": {
    "type": null,
    "value": null
  },
  "hotWords": {
    "type": null,
    "value": null
  },
  "titleName": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["goSearch"], _temp2);


SearchHot.defaultProps = {
  hotWords: [],
  titleName: DEFAULT_TITLE
};
exports.default = SearchHot;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchHot));