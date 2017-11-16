"use strict";

var oneObj = { one: 1 },
    twoObj = { two: 2 };
var mergeObj = Object.assign(oneObj, twoObj);

console.log(Object.is(oneObj, mergeObj));

mergeObj.one = 456;
console.log(Object.is(oneObj, mergeObj));