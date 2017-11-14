'use strict';

var Sports = function Sports() {
    this.count = 20;
};

Sports.prototype = {
    plus: function plus() {
        this.count += 1;
    },
    get: function get() {
        setTimeout(function () {
            console.log(this === window);
            console.log(this.plus === window);
            console.log(this.plus);
        }, 1000);
    }
};

var newSports = new Sports();
newSports.get();