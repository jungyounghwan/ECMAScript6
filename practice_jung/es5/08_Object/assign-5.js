'use strict';

var sports = {
    event: '축구',
    player: 11
};

var dup = {};

for (var key in sports) {
    dup[key] = sports[key];
}

sports.player = 33;
console.log(dup.player);
console.log(dup);
console.log(sports);