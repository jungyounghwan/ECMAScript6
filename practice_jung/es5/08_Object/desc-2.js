'use strict';

var obj = {};
Object.defineProperty(obj, 'item', {
    set: function set(param) {
        this.sports = param;
    }
});

obj.item = '야구';
console.log(obj.sports);