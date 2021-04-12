---
date: 2021-04-13
title: "자바스크립트 타입"
categories: 
    - 기출문제
slug: "JS Types"
---

# 기본형

## 원시(primitive)값 (원시 자료형) 

객체가 아니고 메서드가 없다.
모두 immutable이다.

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

## primitive wrapper object

- String
- Number
- BigInt
- Boolean
- Symbol

# 참조형

## Object (객체)

참조 가능한 메모리에 있는 값.

```js
var a = 1;
var b = a; // 원시 값 복사.
a = 2;
// a: 2, b = 1
```

```js
var a = {value: 1};
var b = a; // 객체의 주소 복사. 즉, 같은 객체.
a.value = 2;
// a.value: 2, b.value: 2
```

- Date
- Array
- ...

결국은 다 object이다.

```js
var a = [];
var b = new Date();
var c = 'hello'

typeof a; // "object"
typeof b; // "object"
typeof c; // "string"
```

# 결론

기본형은 값을 그대로 할당하고, 참조 타입은 값이 저장 된 주소값을 할당한다.


[MDN 자바스크립트의 자료형](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)