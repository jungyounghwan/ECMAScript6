'use strict';

var sports = '축구';

if (sports) {
    var _sports = '농구'; //let 에 의하여 이름은 같지만 블록 내에 새로운 변수값이 된다. / 지역변수
    //sports = '농구'; //let 이 없을 경우 블록 밖의 동일 변수를 찾아 변경한다. / 글로벌변수
    console.log('블록 : ' + _sports);
}
console.log('글로벌 : ' + sports);