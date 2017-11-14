'use strict';

const SPORTS = '축구';
try {
    SPORTS = '농구';
} catch (e) {
    console.log('const 재할당 불가');
    console.log(SPORTS);
}