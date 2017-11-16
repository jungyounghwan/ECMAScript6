"use strict";

var plus = function plus(one) {
  var two = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return one + two;
};
console.log(plus(1));
console.log(plus(1, undefined));
console.log(plus(1, 70));