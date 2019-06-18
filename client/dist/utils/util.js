"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryStringToJson = exports.jsonToQueryString = exports.jumpUrl = exports.createUrl = exports.getSystemInfo = exports.throttle = exports.getParseTime = exports.getWeekDay = exports.parseMoney = exports.isEmptyObject = exports.getParseDay = exports.getJdLogin = exports.getUserInfo = exports.getQueryParam = exports.goLogin = exports.getLoginStatus = exports.getAreas = undefined;

// 获取用户信息
var getUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (userInfo) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return _index2.default.getUserInfo();

          case 4:
            userData = _context.sent;


            userInfo = userData.userInfo;

          case 6:
            return _context.abrupt("return", userInfo);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            console.log('getUserInfo error');
            return _context.abrupt("return", '');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function getUserInfo() {
    return _ref.apply(this, arguments);
  };
}();

// 返回四级地址


var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var WEEK_DAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var PAGE_LEVEL_LIMIT = 10;

var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var concat = Function.bind.call(Function.call, Array.prototype.concat);
var keys = Reflect.ownKeys;

if (!Object.values) {
  Object.values = function values(O) {
    return reduce(keys(O), function (v, k) {
      return concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []);
    }, []);
  };
}function getAreas() {
  var defaultArea = {
    areaIds: [1, 72, 2799, 0],
    commonAreaId: null
  };
  var areasobj = _index2.default.getStorageSync('areaobj') || null;
  if (!areasobj) {
    return {
      areas: defaultArea.areaIds.join('-')
    };
  }
  return areasobj;
}

// 返回ptKey
function getLoginStatus() {
  var ptKey = _index2.default.getStorageSync || _index2.default.getStorageSync('jdlogin_pt_key') || null; // 登录状态
  return ptKey;
}

// 去登录
function goLogin(data) {
  var arrpageShed = _index2.default.getCurrentPages();
  var strCurrentPage = '/' + arrpageShed[arrpageShed.length - 1].__route__;
  var _data = [];
  var _dataString = '';
  if (data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        _data.push(key + "=" + data[key]);
      }
    }
  }
  if (_data.length > 0) {
    _dataString = '?' + _data.join('&');
  }
  var returnpage = encodeURIComponent(strCurrentPage + _dataString);
  var urlString = '/pages/account/login/login?returnpage=' + returnpage;
  // console.log(urlString)
  _index2.default.navigateTo({
    url: urlString
  });
}

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

// 判断是否登录
function getJdLogin() {
  var ptKey = _index2.default.getStorageSync || _index2.default.getStorageSync('jdlogin_pt_key') || null; // 登录状态
  return {
    ptKey: ptKey
  };
}

// 获取地址里的query param
function getQueryParam(url, param) {
  if (url.split('?').length === 2) {
    var params = url.split('?')[1].split('&');
    var obj = {};
    for (var i = 0; i < params.length; i++) {
      var key = params[i].split('=')[0];
      var val = params[i].split('=')[1];
      obj[key] = val;
    }
    return obj[param];
  }
}

//拼接url
function createUrl(url, params) {
  var newUrl = '';
  if (url && params) {
    for (var key in params) {
      if (params[key]) {
        var item = '&' + key + '=' + params[key];
        newUrl += item;
      }
    }
  }

  url = url.indexOf('?') > -1 ? url + newUrl : url + '?' + newUrl.substr(1);
  return url.replace(' ', '');
}

//获取当前系统信息
function getSystemInfo() {
  var systemInfo = _index2.default.getSystemInfoSync() || {
    model: ''
  };
  systemInfo.isIpx = systemInfo.model && systemInfo.model.indexOf('iPhone X') > -1 ? true : false;
  return systemInfo;
}

function parseDate(time) {
  if (time instanceof Date) {
    return time;
  }
  if (time) {
    time = typeof time === 'string' ? time.replace(/-/g, '/') : time;
    return new Date(time);
  }
  return new Date();
}

function getWeekDay(time) {
  var date = parseDate(time);
  return WEEK_DAYS[date.getDay()];
}

function getParseDay(time, weekDay, symbol) {
  symbol = symbol || '-';
  var date = parseDate(time);
  var WEEK_DAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  var month = date.getMonth() + 1;
  var parseMonth = month.toString().length < 2 ? "0" + month : month;
  var lparseDate = date.getDate();
  lparseDate = lparseDate.toString().length < 2 ? "0" + lparseDate : lparseDate;
  var parseDay = weekDay ? "" + date.getFullYear() + symbol + parseMonth + symbol + lparseDate + " " + WEEK_DAYS[date.getDay()] : "" + date.getFullYear() + symbol + parseMonth + symbol + lparseDate;
  return parseDay;
}

function getParseTime(time) {
  var date = parseDate(time);
  var hours = date.getHours().toString().length > 1 ? date.getHours() : "0" + date.getHours();
  var minutes = date.getMinutes().toString().length > 1 ? date.getMinutes() : "0" + date.getMinutes();
  var seconds = date.getSeconds().toString().length > 1 ? date.getSeconds() : "0" + date.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

function parseMoney(num) {
  num = num.toString().replace(/\$|,/g, '');
  if (isNaN(num)) num = '0';

  // let sign = (num === (num = Math.abs(num)))

  num = Math.floor(num * 100 + 0.50000000001);
  var cents = num % 100;
  num = Math.floor(num / 100).toString();

  if (cents < 10) cents = '0' + cents;
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
  }

  return num + '.' + cents;
}

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last = void 0,
      deferTimer = void 0;
  return function () {
    var context = scope || this;

    var now = +new Date();
    var args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// 处理微信跳转超过10层
function jumpUrl(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var pages = _index2.default.getCurrentPages();
  var method = options.method || 'navigateTo';
  if (url && typeof url === 'string') {
    if (method == 'navigateTo' && pages.length >= 7) {
      method = 'redirectTo';
    }

    if (method == 'navigateToByForce') {
      method = 'navigateTo';
    }

    if (method == 'navigateTo' && pages.length == PAGE_LEVEL_LIMIT) {
      method = 'redirectTo';
    }

    _index2.default[method]({
      url: url
    });
  }
}

function jsonToQueryString(json) {
  return '?' + Object.keys(json).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
}

function queryStringToJson(queryString) {
  if (queryString.indexOf('?') > -1) {
    queryString = queryString.split('?')[1];
  }
  var pairs = queryString.split('&');
  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

exports.getAreas = getAreas;
exports.getLoginStatus = getLoginStatus;
exports.goLogin = goLogin;
exports.getQueryParam = getQueryParam;
exports.getUserInfo = getUserInfo;
exports.getJdLogin = getJdLogin;
exports.getParseDay = getParseDay;
exports.isEmptyObject = isEmptyObject;
exports.parseMoney = parseMoney;
exports.getWeekDay = getWeekDay;
exports.getParseTime = getParseTime;
exports.throttle = throttle;
exports.getSystemInfo = getSystemInfo;
exports.createUrl = createUrl;
exports.jumpUrl = jumpUrl;
exports.jsonToQueryString = jsonToQueryString;
exports.queryStringToJson = queryStringToJson;