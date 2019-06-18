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

var _lodash = require("../../npm/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _search = require("../../actions/search.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchList, _BaseComponent);

  function SearchList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchList.__proto__ || Object.getPrototypeOf(SearchList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["keyWords", "showSearchResult", "showSearchHot", "hotWords", "showSearchHistory", "historyWords", "searchResult", "showGoTop", "scrollTop", "showError", "showNotFind", "showErrorProblem", "page", "filterObj", "changeHistory", "fetchSearchData", "restState", "search", "showResult"], _this.config = {
      navigationBarTitleText: '搜索列表',
      enablePullDownRefresh: true,
      onReachBottomDistance: 300,
      backgroundTextStyle: 'dark',
      disableScroll: true
    }, _this.state = {
      page: 1,
      keyWords: '',
      filterObj: {},
      scrollTop: 3000,
      showGoTop: false
    }, _this.showContent = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      switch (_lodash2.default.get(options, 'type', '')) {
        case 'result':
          _this.props.showResult(options.isShow);
          break;
        default:
          console.warn('type没有');
      }
    }, _this.changeHistory = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.props.changeHistory(data);
    }, _this.goSearchWords = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.keyWords) {
        _this.setState({
          keyWords: options.keyWords
        });
      } else {
        options.keyWords = _this.state.keyWords;
      }
      _this.props.fetchSearchData(options);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchList.prototype.__proto__ || Object.getPrototypeOf(SearchList.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router);
      var keyWords = _lodash2.default.get(this.$router, 'params.words', '');
      this.setState({
        keyWords: keyWords
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.changeHistory();
      var keyWords = _lodash2.default.get(this.$router, 'params.words', '');
      if (keyWords) {
        this.props.fetchSearchData({ keyWords: keyWords });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.restState();
    }

    /**
     * 微信自带下拉到底部事件
     */

  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      var searchResult = this.props.search.searchResult;

      this.goSearchWords({ page: searchResult.page + 1 });
    }
  }, {
    key: "onPageScroll",
    value: function onPageScroll(e) {
      this.setState({
        scrollTop: e.scrollTop
      });
      if (e.scrollTop > 100) {
        if (!this.state.showGoTop) {
          this.setState({
            showGoTop: true
          });
        }
      } else {
        if (this.state.showGoTop) {
          this.setState({
            showGoTop: false
          });
        }
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
          keyWords = _state.keyWords,
          showGoTop = _state.showGoTop,
          scrollTop = _state.scrollTop;
      var _props$search = this.__props.search,
          hotWords = _props$search.hotWords,
          historyWords = _props$search.historyWords,
          searchResult = _props$search.searchResult,
          showSearchResult = _props$search.showSearchResult,
          showSearchHot = _props$search.showSearchHot,
          showSearchHistory = _props$search.showSearchHistory,
          showNotFind = _props$search.showNotFind,
          showErrorProblem = _props$search.showErrorProblem;

      var showError = showNotFind || showErrorProblem;
      Object.assign(this.__state, {
        showSearchResult: showSearchResult,
        showSearchHot: showSearchHot,
        hotWords: hotWords,
        showSearchHistory: showSearchHistory,
        historyWords: historyWords,
        searchResult: searchResult,
        showError: showError,
        showNotFind: showNotFind,
        showErrorProblem: showErrorProblem
      });
      return this.__state;
    }
  }]);

  return SearchList;
}(_index.Component), _class.properties = {
  "changeHistory": {
    "type": null,
    "value": null
  },
  "fetchSearchData": {
    "type": null,
    "value": null
  },
  "restState": {
    "type": null,
    "value": null
  },
  "search": {
    "type": null,
    "value": null
  },
  "showResult": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["changeHistory", "goSearchWords", "showContent"], _temp2);


var SearchList__Connected = (0, _index3.connect)(function (_ref2) {
  var search = _ref2.search;
  return {
    search: search
  };
}, function (dispatch) {
  return {
    fetchSearchData: function fetchSearchData(data) {
      dispatch((0, _search.fetchSearchData)(data));
    },
    triggerShowSearchBar: function triggerShowSearchBar() {
      dispatch((0, _search.triggerShowSearchBar)());
    },
    showResult: function showResult(data) {
      dispatch((0, _search.showResult)(data));
    },
    changeHistory: function changeHistory() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _search.setSearchHistory)(data));
    },
    restState: function restState() {
      dispatch((0, _search.restState)());
    }
  };
})(SearchList);
exports.default = SearchList__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchList__Connected, true));