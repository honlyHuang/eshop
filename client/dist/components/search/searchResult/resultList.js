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

var ResultList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ResultList, _BaseComponent);

  function ResultList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResultList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResultList.__proto__ || Object.getPrototypeOf(ResultList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["list", "showGoTop", "searchResult", "__fn_onShowFilter", "scrollTop"], _this.showFilter = function () {
      _this.__triggerPropsFn("onShowFilter", [null].concat([{ type: 'filter', isShow: true }]));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResultList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ResultList.prototype.__proto__ || Object.getPrototypeOf(ResultList.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        list: []
      };
      this.allListData = [];
      this.currentMaxPage = 1; //当前大分页
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _index2.default.getSystemInfo({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var searchResult = nextProps.searchResult,
          scrollTop = nextProps.scrollTop;

      if (searchResult.page < 10) {
        this.allListData = searchResult.wares;
        this.setState({
          list: searchResult.wares
        });
      } else if (searchResult.page > 9 && nextProps.searchResult.page !== searchResult.page) {
        this.allListData = this.allListData.concat(searchResult.wares);
        var list = this.allListData;
        if (searchResult.page % 10 === 0) {
          this.currentMaxPage = page;
        }
        if (searchResult.page > 9) {
          list = this.allListData.slice((this.currentMaxPage - 2) * 10, (searchResult.page + 8) * 10);
        }
        this.setState({
          list: list
        });
      } else if (scrollTop < 1000 && searchResult.page > 9) {
        this.setState({
          list: this.allListData.slice((this.currentMaxPage - 9) * 10, searchResult.page * 10)
        });
      } else if (scrollTop > 15000 && searchResult.page > 9) {
        this.setState({
          list: this.allListData.slice((this.currentMaxPage - 2) * 10, (searchResult.page + 10) * 10)
        });
      }
    }
  }, {
    key: "doJump",
    value: function doJump(skuid) {
      (0, _util.jumpUrl)("/pages/detail/detail?skuid=" + skuid);
    }
  }, {
    key: "srollToTop",
    value: function srollToTop() {
      _index2.default.pageScrollTo({
        scrollTop: 0,
        duration: 400
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var list = this.__state.list;
      var _props = this.__props,
          _props$searchResult = _props.searchResult,
          searchResult = _props$searchResult === undefined ? {} : _props$searchResult,
          _props$showGoTop = _props.showGoTop,
          showGoTop = _props$showGoTop === undefined ? false : _props$showGoTop;

      Object.assign(this.__state, {
        showGoTop: showGoTop,
        searchResult: searchResult
      });
      return this.__state;
    }
  }]);

  return ResultList;
}(_index.Component), _class.properties = {
  "__fn_onShowFilter": {
    "type": null,
    "value": null
  },
  "searchResult": {
    "type": null,
    "value": null
  },
  "showGoTop": {
    "type": null,
    "value": null
  },
  "scrollTop": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["doJump", "srollToTop"], _temp2);


ResultList.defaultProps = {
  searchResult: {
    wares: [],
    page: 1
  },
  showGoTop: false
};
exports.default = ResultList;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ResultList));