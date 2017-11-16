"use strict";

function total(_ref) {
    var one = _ref.one,
        _ref$plus = _ref.plus,
        two = _ref$plus.two,
        five = _ref$plus.five;

    console.log(one + two + five);
};
total({ one: 1, plus: { two: 2, five: 5 } });