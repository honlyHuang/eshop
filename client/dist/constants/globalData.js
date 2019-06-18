"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;
var globalData = {};

function setGlobalData(key, val) {
  globalData[key] = val;
}

function getGlobalData(key) {
  return globalData[key];
}