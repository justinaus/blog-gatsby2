---
date: 2020-12-17
title: "var, let, const"
categories: 
    - 기출문제
---

## 결론부터 말하면

var는 그냥 쓰지 말고, 기본적으로 const를 쓰고, 변경이 필요한 경우만 let을 쓰자.

## 유효 범위 (Scope)

let과 const는 블록 레벨 스코프를 갖고,
var는 함수 레벨 스코프를 갖는다.

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 상위 블록과 같은 변수!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 상위 블록과 다른 변수
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

## 재선언

```javascript
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

```javascript
if (x) {
  var foo;
  var foo; // No error.
}
```

그냥 var 쓰지 맙시다..

## ~~호이스팅.~~ 선언 끌어올리기?

```javascript
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

let, const의 정의가 평가되기까지 초기화가 되지 않는다는 의미이지. [호이스팅](https://justinaus.ml/hoisting)이 되지않아 정의가 되지 않는다는 의미와는 다르다고 한다. ([임시적인 사각 지역과 오류](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let#임시적인_사각_지역과_오류))

