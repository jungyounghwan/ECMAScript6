ECMAScript6 - 01_intro

1. 'use strict' : javascript에 엄격함을 더한다.
- 변수를 선언하지 않고 사용할 수 없다.
- 일반 함수에서 this는 전역 객체가 아닌 undefinde가 된다.
- eval() 안에서 변수나 함수를 선언할 수 없다.
- with 문을 사용할 수 없다.
- 함수의 arguments 객체는 인수의 정적 사본이다.
- 같은 이름으로 함수, 멤버, 인수를 중복 정의하면 에러 처리된다.
- 8진수 리터럴을 허용하지 않는다.
- public, interface 등 확장을 위한 예약어가 키워드로 인정한다.
- 읽기 전용, 확장 불가, 삭제 불가 속성을 잘못 건드릴 경우 에러 처리한다.
    
2. &lt;script src="myCode.js" defer&gt;</script> - defer
- 속성 defer 를 추가 하면 html 파일의 모든 엘리먼트(Element)를 랜더링한 후 myCode.js 파일에 작성된 자바스크립트 코드가 실행된다.