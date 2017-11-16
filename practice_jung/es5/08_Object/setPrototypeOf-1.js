"use strict";

var Sports = function Sports() {};
Sports.prototype.getCount = function () {
    return 123;
};
var protoObj = Object.setPrototypeOf({}, Sports.prototype);
console.log(protoObj.getCount());