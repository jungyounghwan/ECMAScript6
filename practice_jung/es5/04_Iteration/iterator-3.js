'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var arrayObj = [1, 2];
var iteratorObj = arrayObj[Symbol.iterator]();
console.log('1:', typeof iteratorObj === 'undefined' ? 'undefined' : _typeof(iteratorObj));

console.log('2:', iteratorObj.next());
console.log('3:', iteratorObj.next());
console.log('4:', iteratorObj.next());