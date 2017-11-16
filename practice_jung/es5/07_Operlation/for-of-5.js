'use strict';

var values = [10, 20, 30];
Array.prototype.music = function () {
    return '음악';
};
Object.prototype.sports = function () {
    return '스포츠';
};
for (var key in values) {
    console.log(key, values[key]);
};
console.log('<<<for-of>>>');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

;