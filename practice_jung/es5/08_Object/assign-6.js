'use strict';

var sports = {
    event: '축구',
    player: 11
};

var dup = Object.assign({}, sports);
console.log(dup.player);

dup.player = 33;
console.log(sports.player);

sports.event = '수영';
console.log(dup.event);