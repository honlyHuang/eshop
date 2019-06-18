"use strict";

exports.__esModule = true;
exports.default = unflattenActionCreators;

var _constants = require("../constants.js");

var _isEmpty = _interopRequireDefault(require("./isEmpty.js"));

var _camelCase = _interopRequireDefault(require("./camelCase.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function unflattenActionCreators(flatActionCreators, _temp) {
  var _ref = _temp === undefined ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === undefined ? _constants.DEFAULT_NAMESPACE : _ref$namespace,
      prefix = _ref.prefix;

  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
    var nextNamespace = (0, _camelCase.default)(partialFlatActionTypePath.shift());

    if ((0, _isEmpty.default)(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }

      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    }
  }

  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
  });
  return nestedActionCreators;
}