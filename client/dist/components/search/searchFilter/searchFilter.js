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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchFilter = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchFilter, _BaseComponent);

  function SearchFilter() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchFilter.__proto__ || Object.getPrototypeOf(SearchFilter)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["currentIndex", "list", "showFilterMask", "isClick", "sortContent", "sortType", "filterObj", "__fn_onGoSearchContent"], _this.selectFilter = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index, value) {
        var _this$state, sortContent, isClick, currentIndex, currentValue;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                _index2.default.pageScrollTo({
                  scrollTop: 0
                });
                _this$state = _this.state, sortContent = _this$state.sortContent, isClick = _this$state.isClick, currentIndex = _this$state.currentIndex;
                currentValue = parseInt(value, 10);

                if (currentValue === 2 || currentValue === 3) {
                  currentIndex = 2;
                  if (isClick) {
                    _this.setState({
                      isClick: false
                    });
                  } else {
                    currentValue = currentValue === 2 ? 3 : 2;
                    sortContent[2].value = currentValue;
                  }
                } else {
                  currentIndex = parseInt(index, 10);
                  sortContent[2].value = 2;
                  _this.setState({
                    isClick: true,
                    sortContent: sortContent
                  });
                }
                _this.setState({
                  sortType: currentValue,
                  currentIndex: currentIndex,
                  sortContent: sortContent
                });
                _this.goSearchContent();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.confirmSelect = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.setState({
        filterObj: data
      });
      _this.goSearchContent();
    }, _this.goSearchContent = function () {
      var _this$state2 = _this.state,
          filterObj = _this$state2.filterObj,
          sortType = _this$state2.sortType;

      _this.__triggerPropsFn("onGoSearchContent", [null].concat([_extends({ sortType: sortType }, filterObj)]));
    }, _this.showFilterMask = function () {
      console.log('showFilterMask');
      _this.setState({
        showFilterMask: !_this.state.showFilterMask
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchFilter, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SearchFilter.prototype.__proto__ || Object.getPrototypeOf(SearchFilter.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isClick: true,
        sortContent: [{
          label: '综合',
          value: 1,
          cName: 'result_filter_btn'
        }, {
          label: '最新',
          value: 4,
          cName: 'result_filter_btn'
        }, {
          label: '价格',
          value: 2,
          cName: 'result_filter_btn price_btn'
        }],
        sortType: 1,
        showFilterMask: false,
        currentIndex: 0,
        filterObj: {}
      };
      this.allListData = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _state = this.__state,
          sortContent = _state.sortContent,
          sortType = _state.sortType,
          currentIndex = _state.currentIndex,
          showFilterMask = _state.showFilterMask;

      var list = sortContent.map(function (item) {
        var cNameItem = sortType === 2 ? item.cName + ' top' : sortType === 3 ? item.cName + ' bottom' : item.cName;
        return _extends({}, item, {
          cName: cNameItem
        });
      });
      Object.assign(this.__state, {
        list: list
      });
      return this.__state;
    }
  }]);

  return SearchFilter;
}(_index.Component), _class.properties = {
  "__fn_onGoSearchContent": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["selectFilter", "showFilterMask", "confirmSelect"], _temp2);
exports.default = SearchFilter;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchFilter));