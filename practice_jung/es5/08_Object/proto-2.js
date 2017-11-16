'use strict';

var Sports = function Sports() {};
Sports.prototype.get = function () {};
var sportsObj = new Sports();

sportsObj.__proto__['set'] = function () {};
sportsObj.set();
var result = Sports.prototype.set;
console.log(result);