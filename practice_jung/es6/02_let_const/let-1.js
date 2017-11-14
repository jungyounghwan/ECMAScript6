// 'use strict'; // 변수값 지정 var 이 없는 one 로 인하여 strict 주석처리

one = 100;
function get(){
    one = 300;
    console.log('함수' + one);
}
get();
console.log('글로벌' + one);
