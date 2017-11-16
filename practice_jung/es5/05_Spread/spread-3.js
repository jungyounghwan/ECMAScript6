"use strict";

var values = [10, 20, 30];
get.apply(undefined, values);

function get(one, two, three) {
    console.log(one + two + three);
};