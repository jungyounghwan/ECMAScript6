'use strict';

var _sports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var item = 'tennis';
var sports = (_sports = {}, _defineProperty(_sports, item, 1), _defineProperty(_sports, item + 'Game', '윔블던'), _defineProperty(_sports, item + 'Method', function () {
    return this[item];
}), _sports);

console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod());