"use strict";

var get = function get(one) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    console.log(one);
    console.log(rest);
};

get.apply(undefined, [1, 2, 3]);