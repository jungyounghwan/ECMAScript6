"use strict";

var get = function get(one) {
    console.log(one);
};

get.apply(undefined, [1, 2, 3]);