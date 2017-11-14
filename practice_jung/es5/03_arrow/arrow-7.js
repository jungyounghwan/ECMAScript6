'use strict';

var Sports = function Sports() {
    this.count = 20;
};

Sports.prototype = {
    add: function add() {
        undefined.count += 1;
    }
};

var newSports = new Sports();

newSports.add();
console.log(newSports.count);
console.log(window.count);