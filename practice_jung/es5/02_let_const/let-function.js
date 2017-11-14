'use strict';

var sports = '축구',
    music = '재즈';
function get() {
    var music = '클래식'; // 함수 안의 music은 함수 밖의 music 와 틀린 변수이다.
    console.log(music);
    console.log(sports);
}
get();
console.log(music); // 함수 안의 music 는 지역 변수이기 때문에 함수 밖의 music(글로벌 변수)를 불러온다.