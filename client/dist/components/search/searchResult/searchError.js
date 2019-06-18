"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var errIcon = "/asset/ic_search_tips.png";

var SearchError = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchError, _BaseComponent);

  function SearchError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchError.__proto__ || Object.getPrototypeOf(SearchError)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["errIcon", "showErrorProblem", "showNotFind", "showWordsTips", "__fn_onGoSearchContent", "keyWords"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchError, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchError.prototype.__proto__ || Object.getPrototypeOf(SearchError.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "refresh",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.__triggerPropsFn("onGoSearchContent", [null].concat([]));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refresh() {
        return _ref2.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props = this.__props,
          showNotFind = _props.showNotFind,
          keyWords = _props.keyWords,
          showErrorProblem = _props.showErrorProblem;

      var words = /^.*[,].*$/.test(keyWords) ? '' : keyWords;
      var showWordsTips = "\u6CA1\u6709\u627E\u5230\u4E0E\u201C" + words + " \u76F8\u5173\u7684\u5546\u54C1";

      Object.assign(this.__state, {
        errIcon: errIcon,
        showErrorProblem: showErrorProblem,
        showNotFind: showNotFind,
        showWordsTips: showWordsTips
      });
      return this.__state;
    }
  }]);

  return SearchError;
}(_index.Component), _class.properties = {
  "__fn_onGoSearchContent": {
    "type": null,
    "value": null
  },
  "showNotFind": {
    "type": null,
    "value": null
  },
  "keyWords": {
    "type": null,
    "value": null
  },
  "showErrorProblem": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["refresh"], _temp2);


SearchError.defaultProps = {
  showNotFind: false,
  keyWords: '',
  showErrorProblem: false
};
exports.default = SearchError;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchError));