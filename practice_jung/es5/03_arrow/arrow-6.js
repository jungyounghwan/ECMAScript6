'use strict';

var Sports = function Sports() {
    this.count = 20;
};

Sports.prototype = {
    plus: function plus() {
        this.count += 1;
    },
    get: function get() {
        var _this = this;

        setTimeout(function () {
            _this.plus();
            console.log(_this === window);
            console.log(_this.count === window);
            console.log(_this.count);
        }, 1000);
    }
};

var newSports = new Sports();
newSports.get();