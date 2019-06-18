"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = require("../../utils/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchIcon = "/asset/ic_search.png";
var cartIcon = "/asset/shopping_cart.png";
var searchDel = "/asset/ic_del.png";

var SearchBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchBar, _BaseComponent);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["searchIcon", "words", "showSearchResult", "searchDel", "cartIcon", "carNumber", "focusSearch", "keyWords", "__fn_onAddHistory", "__fn_onSearchWords", "__fn_onShowSearchResult", "placeholder"], _this.state = {
      words: '',
      focusSearch: false
    }, _this.onSearchInput = function (_ref2) {
      var _ref2$detail = _ref2.detail,
          detail = _ref2$detail === undefined ? {} : _ref2$detail;

      if (!detail.value) {
        return;
      }
      _this.setState({
        words: detail.value
      });
    }, _this.onH5Enter = function (e) {
      var key = e.key;
      var value = e.target.value;
      if (key === 'Enter') {
        _this.__triggerPropsFn("onAddHistory", [null].concat([{ value: value, type: 'add' }]));
        _this.__triggerPropsFn("onSearchWords", [null].concat([{ keyWords: value }]));
      }
    }, _this.onFocusSearch = function () {
      _this.__triggerPropsFn("onShowSearchResult", [null].concat([{ type: 'result', isShow: false }]));
    }, _this.deleteHandler = function () {
      _this.setState({
        words: ''
      });
    }, _this.cancelSearch = function () {
      _this.__triggerPropsFn("onShowSearchResult", [null].concat([{ type: 'result', isShow: true }]));
    }, _this.goSearch = function (_ref3) {
      var detail = _ref3.detail;

      if (detail.value !== '') {
        _this.__triggerPropsFn("onAddHistory", [null].concat([{ value: detail.value, type: 'add' }]));
        _this.__triggerPropsFn("onSearchWords", [null].concat([{ keyWords: detail.value }]));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchBar.prototype.__proto__ || Object.getPrototypeOf(SearchBar.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.keyWords !== nextProps.keyWords || this.state.words === '') {
        this.setState({
          words: nextProps.keyWords
        });
      }
    }
  }, {
    key: "goCart",
    value: function goCart() {
      (0, _util.jumpUrl)('../cart/cart_sub');
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props$showSearchRes = this.__props.showSearchResult,
          showSearchResult = _props$showSearchRes === undefined ? false : _props$showSearchRes;
      var words = this.__state.words;

      var carNumber = 99;
      Object.assign(this.__state, {
        searchIcon: searchIcon,
        showSearchResult: showSearchResult,
        searchDel: searchDel,
        cartIcon: cartIcon,
        carNumber: carNumber
      });
      return this.__state;
    }
  }]);

  return SearchBar;
}(_index.Component), _class.properties = {
  "keyWords": {
    "type": null,
    "value": null
  },
  "__fn_onAddHistory": {
    "type": null,
    "value": null
  },
  "__fn_onSearchWords": {
    "type": null,
    "value": null
  },
  "__fn_onShowSearchResult": {
    "type": null,
    "value": null
  },
  "showSearchResult": {
    "type": null,
    "value": null
  },
  "placeholder": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onFocusSearch", "goSearch", "onSearchInput", "onH5Enter", "deleteHandler", "goCart", "cancelSearch"], _temp2);
exports.default = SearchBar;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchBar));