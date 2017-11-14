ECMAScript6 - 04_Iteration

1. Iteration 개념
- es6 의 for ..of 등의 반복을 위해서는 Iteration 개념을 알아둘 필요가 있습니다.
- 단어 그대로 보자면, Iteration : 반복의 뜻
- es6에서의 프로토콜(규칙)
    - 반복가능한 오브젝트 iterable Object
    - 반복하기 위해 메서드가 필요한 iterator Object
    
2. Iterable protocol
- iterable protocol은 아래의 Object 들이 있습니다.
    - Array, String, Typed Array, map, set, arguemnts 등
- built-in type으로 설정되어 있다.
- 프로토콜 규약이므로 만들어 쓸 수 있다.
- 주로 for of 문으로 반복이 가능하다.
- 혹은 ArrayLike도 반복이 가능하다.

3. Iterator protocol
- 오브젝트의 값을 순서대로 처리하는 규약
- 다음 값을 가져오려면 반드시 next()를 호출하여야 한다.
- next() 함수는 사용환경에 따라 정의하여 사용한다.
- Symbol.iterator()를 호출하면 이터레이터 오브젝트를 만들어 반환한다.
- String, array, TypedArray, Map, Set은 모두 내장으로 iterator() 메소드를 가지고 있다.

4. 참조문
- iterable 과 iterator : http://mollangk.tistory.com/28