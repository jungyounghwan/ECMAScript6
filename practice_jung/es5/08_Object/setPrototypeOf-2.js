"use strict";

var Sports = function Sports() {};
Sports.prototype.getCount = function () {
    return 123;
};
var fnObj = Object.setPrototypeOf({}, Sports);

console.log(fnObj.getCount);
console.log(fnObj.prototype.getCount.call(Sports));