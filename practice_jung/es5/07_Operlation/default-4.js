"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var getTotal = function getTotal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [10, 20],
      _ref2 = _slicedToArray(_ref, 2),
      one = _ref2[0],
      two = _ref2[1];

  return one + two;
};
console.log(getTotal());

var getValue = function getValue() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { two: 20 },
      value = _ref3.two;

  return value;
};
console.log(getValue());