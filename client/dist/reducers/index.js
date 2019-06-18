"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _detail = require("./detail.js");

var _detail2 = _interopRequireDefault(_detail);

var _home = require("./home.js");

var _home2 = _interopRequireDefault(_home);

var _shop = require("./shop.js");

var _shop2 = _interopRequireDefault(_shop);

var _search = require("./search.js");

var _search2 = _interopRequireDefault(_search);

var _cart = require("./cart.js");

var _cart2 = _interopRequireDefault(_cart);

var _balance = require("./balance.js");

var _balance2 = _interopRequireDefault(_balance);

var _detail3 = require("./order/detail.js");

var _detail4 = _interopRequireDefault(_detail3);

var _list = require("./order/list.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  detail: _detail2.default,
  home: _home2.default,
  shop: _shop2.default,
  search: _search2.default,
  orderDetail: _detail4.default,
  orderList: _list2.default,
  cart: _cart2.default,
  balance: _balance2.default
});