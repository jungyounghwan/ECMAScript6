'use strict';

let Sports = function() {
    this.count = 20;
};

Sports.prototype = {
    plus : function () {
        this.count += 1;
    },
    get : function () {
        setTimeout(() => {
            this.plus();
            console.log(this === window);
            console.log(this.count === window);
            console.log(this.count);
        }, 1000)
    }
};

let newSports = new Sports();
newSports.get();