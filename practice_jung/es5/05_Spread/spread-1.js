"use strict";

var one = [11, 12];
var two = [21, 22];
var spreadObj = [51].concat(one, [52], two);

console.log(spreadObj);
console.log(spreadObj.length);