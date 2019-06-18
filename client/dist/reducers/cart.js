"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/redux-actions/lib/index.js");

var _cart = require("../constants/cart.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  commoditys: [],
  offSales: [],
  editSkuData: {
    showEidtBox: false
  },
  diviner: [],
  footmark: [],
  couponData: {
    showCouponList: false
  },
  checkCartNum: 0,
  totalPrice: 0,
  checkAll: false,
  checkDelAll: false,
  isEditStatus: false,
  isFetching: false
};

function genarateFetchActions() {
  var actionsMap = {};

  var fetchActionType = [_cart.REQUEST_CART, _cart.REQUEST_DEL_CART, _cart.REQUEST_CHANGE_NUM, _cart.REQUEST_ADD_CART, _cart.REQUEST_CHECK_CART, _cart.REQUEST_INVERSE_CHECK, _cart.REQUEST_CHANGE_ATTR, _cart.REQUEST_SKU_ATTR];

  var receiveActionType = [_cart.RECEIVE_CART, _cart.RECEIVE_DEL_CART, _cart.RECEIVE_CHANGE_NUM, _cart.RECEIVE_ADD_CART, _cart.RECEIVE_CHECK_CART, _cart.RECEIVE_INVERSE_CHECK, _cart.RECEIVE_CHANGE_ATTR];

  fetchActionType.forEach(function (type) {
    actionsMap[type] = function (state) {
      return _extends({}, state, {
        isFetching: true
      });
    };
  });
  receiveActionType.forEach(function (type) {
    actionsMap[type] = function (state, action) {
      var _action$payload = action.payload,
          _action$payload$commo = _action$payload.commoditys,
          commoditys = _action$payload$commo === undefined ? [] : _action$payload$commo,
          _action$payload$offSa = _action$payload.offSales,
          offSales = _action$payload$offSa === undefined ? [] : _action$payload$offSa,
          _action$payload$check = _action$payload.checkCartNum,
          checkCartNum = _action$payload$check === undefined ? 0 : _action$payload$check,
          _action$payload$total = _action$payload.totalPrice,
          totalPrice = _action$payload$total === undefined ? 0 : _action$payload$total,
          _action$payload$check2 = _action$payload.checkAll,
          checkAll = _action$payload$check2 === undefined ? false : _action$payload$check2;


      return _extends({}, state, {
        commoditys: commoditys,
        offSales: offSales,
        checkCartNum: checkCartNum,
        totalPrice: totalPrice,
        checkAll: checkAll,
        isFetching: false
      });
    };
  });

  return actionsMap;
}

exports.default = (0, _index.handleActions)(_extends({}, genarateFetchActions(), (_extends2 = {}, _defineProperty(_extends2, _cart.CHECK_DEL, function (state, action) {
  var _action$payload2 = action.payload,
      commoditys = _action$payload2.commoditys,
      checkDelAll = _action$payload2.checkDelAll;

  return _extends({}, state, {
    commoditys: commoditys,
    checkDelAll: checkDelAll
  });
}), _defineProperty(_extends2, _cart.INVERSE_CHECK_DEL, function (state, action) {
  var _action$payload3 = action.payload,
      commoditys = _action$payload3.commoditys,
      checkDelAll = _action$payload3.checkDelAll;

  return _extends({}, state, {
    commoditys: commoditys,
    checkDelAll: checkDelAll
  });
}), _defineProperty(_extends2, _cart.RECEIVE_SKU_ATTR, function (state, action) {
  var editSkuData = action.payload.editSkuData;

  return _extends({}, state, {
    editSkuData: editSkuData,
    isFetching: false
  });
}), _defineProperty(_extends2, _cart.SHOW_ATTR_BOX, function (state, action) {
  var editSkuData = action.payload.editSkuData;

  return _extends({}, state, {
    editSkuData: editSkuData
  });
}), _defineProperty(_extends2, _cart.HIDE_ATTR_BOX, function (state, action) {
  var editSkuData = action.payload.editSkuData;

  return _extends({}, state, {
    editSkuData: editSkuData
  });
}), _defineProperty(_extends2, _cart.CHANGE_EDIT_STATUS, function (state, action) {
  var isEditStatus = action.payload.isEditStatus;

  return _extends({}, state, {
    isEditStatus: isEditStatus
  });
}), _extends2)), _extends({}, INITIAL_STATE));