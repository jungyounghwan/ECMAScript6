ECMAScript6 - 02_let_const

1. 스코프 (Scope)
- global scope(전역), local scope(지역)
- JavaScript에서 지역을 나누는 개념 (변수가 유효한 범위)
- java가 {} 블록단위로 지역을 나눴다면, JavaScript는 function 단위로 지역을 나눔

2. 블록 스코프
- if문
- function
- try catch
- switch case

3. let-this.js
- (Q) 브라우저 결과값은 음악/undefined 가 나오지만 node.js 확인에선 undefined/undefined 가 나온다.
- (G) var 값에 의한 오류인지 확인 필요!!!!!!!!!!
- (G) node.js 에선 this 값을 인지 못하는것 같은 느낌!!!!!!!!!!
- (G) var 키워드는 window 오브젝트를 참조한다 node.js 는 window 오브젝트가 아니기때문에 undefined 가 뜬다!!!!!!!!!!
- (A) ??
    
