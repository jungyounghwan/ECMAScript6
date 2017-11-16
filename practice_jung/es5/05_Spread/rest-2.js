"use strict";

var get = function get() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
    }

    console.log(rest);
};

get.apply(undefined, [1, 2, 3]);