"use strict";

var Sports = function Sports() {
    this.member = 1;
};

Sports.prototype.getMember = function () {};
var sportsObj = new Sports();
console.log(sportsObj.__proto__ == Sports.prototype);