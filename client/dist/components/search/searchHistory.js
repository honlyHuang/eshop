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

var delIcon = "/asset/ic_del.png";

var SearchHistory = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchHistory, _BaseComponent);

  function SearchHistory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchHistory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchHistory.__proto__ || Object.getPrototypeOf(SearchHistory)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["historyWords", "delIcon", "__fn_onChangeHistory", "__fn_onSearchWords"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchHistory, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchHistory.prototype.__proto__ || Object.getPrototypeOf(SearchHistory.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "goSearch",
    value: function goSearch() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (value) {
        this.__triggerPropsFn("onChangeHistory", [null].concat([{ value: value, type: 'add' }]));
        this.__triggerPropsFn("onSearchWords", [null].concat([{ keyWords: value }]));
      }
      // let url = `../list/list?words=${value}`
      // jumpUrl(url, {method: 'redirectTo'})
    }
  }, {
    key: "deleteSearch",
    value: function deleteSearch(value) {
      this.__triggerPropsFn("onChangeHistory", [null].concat([{ value: value, type: 'delete' }]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props$historyWords = this.__props.historyWords,
          historyWords = _props$historyWords === undefined ? [] : _props$historyWords;

      Object.assign(this.__state, {
        historyWords: historyWords,
        delIcon: delIcon
      });
      return this.__state;
    }
  }]);

  return SearchHistory;
}(_index.Component), _class.properties = {
  "__fn_onChangeHistory": {
    "type": null,
    "value": null
  },
  "__fn_onSearchWords": {
    "type": null,
    "value": null
  },
  "historyWords": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["goSearch", "deleteSearch"], _temp2);
exports.default = SearchHistory;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchHistory));