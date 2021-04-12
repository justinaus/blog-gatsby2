---
date: 2021-04-13
title: "기타 자잘한 기출문제"
categories: 
    - 기출문제
slug: "Interview ETC"
---

# 가비지 컬렉션

객체 생성 되었을 때 자동으로 메모리 할당.
쓸모 없어졌을 때 자동으로 해제. (가비지 컬렉터가 주기적으로 체크/해제.)

```js
var a = 1; // 정수를 담기 위한 메모리 할당
var b = {c: 2} // 오브젝트와 그 오브젝트에 포함된 값들을 담기 위한 메모리 할당
```

## 해제 대상

닿을 수 없는 오브젝트

```js
var x = {
    a: 2;
}

var y = x;

x = 1;

var z = y.a;

y = 'yo';

z = null;

// 맨 처음 x가 참조했던 오브젝트를 참조하는 곳이 없어짐. 가비지 컬렉팅 대상.
```

# 결론

다 사용하고 나면 닿을 수 없게 만들어주자. (가비지 컬렉팅 대상으로)


[MDN 자바스크립트의 메모리관리](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)