---
date: 2020-12-17
title: "호이스팅"
categories: 
    - 기출문제
slug: "Hoisting"
---

## 호이스팅에 대해서 설명하세요

함수 안의 선언들을 유효 범위 최상단으로 끌어올리는(hoist) 것.

따라서, 선언 전에 사용이 가능하다.
단, 선언만 끌어올리는 것이고 초기화는 하지 않기 때문에, 끌어올린 변수의 값은 undefined이다.

```javascript
console.log(x); // 'undefined'
var x = 1;

// 위 코드의 호이스팅 동작.
var x; // 변수 x 선언.
console.log(x); // 'undefined'
x = 1; // 초기화
```

## 선언 끌어올리기?

~~var와 함수선언문이 대상이며, let/const, 함수표현식은 호이스팅이 일어나지 않는다.~~

let, const의 정의가 평가되기까지 초기화가 되지 않는다는 의미이지. 호이스팅이 되지않아 정의가 되지 않는다는 의미와는 다르다고 한다. ([임시적인 사각 지역과 오류](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let#임시적인_사각_지역과_오류))

```javascript
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

## 결론

가독성과 유지보수를 위해 호이스팅이 일어나지 않도록 하자.
let/const, 함수표현식을 쓰자. ([참고](/var-let-const))




## 그 외 내용들

### 호이스팅 우선 순위

변수가 함수보다 위로 끌어올려진다.

