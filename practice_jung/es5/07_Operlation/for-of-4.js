'use strict';

var values = [{ item: '선물1', amount: { apple: 10, candy: 20 } }, { item: '선물2', amount: { apple: 20, candy: 40 } }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _step.value,
            one = _step$value.item,
            _step$value$amount = _step$value.amount,
            two = _step$value$amount.apple,
            five = _step$value$amount.candy;

        console.log(one, two, five);
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