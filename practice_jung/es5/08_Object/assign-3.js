'use strict';

var oneObj = {};
Object.assign(oneObj, 'ABC', undefined, null);
console.log(oneObj);

var twoObj = {};
Object.assign(twoObj, { key1: undefined, key2: null });
console.log(twoObj);