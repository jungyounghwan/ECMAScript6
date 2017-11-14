'use strict';

var sports = '축구';
var music = '재즈';

function get() {
    var sports = '농구';
    var music = '클래식';
    console.log('1 : ' + sports);
    console.log('2 : ' + this.sports); // this 는 window.get() 을 통하여 window 오브젝트를 참조한다.
    console.log('3 : ' + this.music);
}
window.get(); // window 오브젝트 참조 호출
get(); // 오브젝트 없이 호출