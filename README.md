#ECMAScript6

##일정
- 11/15 ~ 

##진행방식
- 자율진행 (자유롭게 한권 보기!)
- 교재 : ECMAScript6 / 루비페이퍼 / 김영보 지음
- 교재의 exercise 를 따라 완독
- 각 챕터당 추가 사항 및 참조 사항은 각 챕터별 README.md 생성 후 정리
- ECMAScript6 교재를 따라 정리한 tistory : http://mollangk.tistory.com/30
  
##exercise 규칙
- "exercise_개인명" 폴더를 만들고 연습
- "exercise_source" 폴더는 참고용
  
##ES5 와 비교
- Babel 설치 후 Build 를 통한 ES5 로 변환
  
##Babel 사용하기
- npm init
- npm install -g babel-cli babel-loader
- npm install --save-dev babel-cli babel-loader
- package.json 에 "babel": {"presets": ["es2015"]} 추가
- package.json 에 {"scripts": {"build": "babel ./[es6 폴더명] -d ./[build 폴더명]"} 
- npm run build

##챕터
- 01_intro
- 02_let_const
- 03_arrow
- 04_iteration
- 05_spread
- 06_destructuring
- 07_operation
- 08_Object
- 09_Number
- 10_Math
- 11_String
- 12_Template
- 13_Array
- 14_RegExp
- 15_Generator
- 16_Class
- 17_Symbol
- 18_Symbol_Property
- 19_Symbol_Method
- 20_Map
- 21_WeakMap
- 22_Set
- 23_WeakSet
- 24_Proxy
- 25_Proxy_Trap
- 26_Reflect
- 27_Promise
- 28_ArrayBuffer
- 29_TypedArray
- 30_DataView
  
##참고자료
- 2017년과 이후 JavaScript의 동향 - JavaScript(ECMAScript) : [http://d2.naver.com/helloworld/2809766](http://d2.naver.com/helloworld/2809766)
- 2015 S67 스터디 발표자료 : [http://d2.naver.com/news/5743505](http://d2.naver.com/news/5743505)
- ES6 호환성 확인 : [http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)
- Babel 사용하기 : [http://www.haruair.com/blog/2917](http://www.haruair.com/blog/2917)
