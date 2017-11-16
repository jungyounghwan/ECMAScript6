'use strict';

var obj = {};
Object.defineProperty(obj, 'book', {
    get: function get() {
        return '책';
    }
});

console.log(obj.book);