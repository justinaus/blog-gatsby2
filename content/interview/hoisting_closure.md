---
date: 2020-10-08
title: "호이스팅, 클로저"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - 단골 이론
tags:
    - hoisting
    - closure
---

## 호이스팅에 대해서 설명하세요

함수 안의 선언들을 유효 범위 최상단으로 끌어올리는(hoist) 것.

따라서, 선언 전에 사용이 가능하다.
단, 선언만 끌어올리는 것이고 초기화는 하지 않기 때문에, 끌어올린 변수의 값은 undefined이다.
var와 함수선언문이 대상이며, let/const, 함수표현식은 호이스팅이 일어나지 않는다.

가독성과 유지보수를 위해 호이스팅이 일어나지 않도록 하자.
결론. let/const, 함수표현식을 쓰자.

```javascript
console.log(x); // 'undefined'
var x = 1;

// 위 코드의 호이스팅 동작.
var x; // 변수 x 선언.
console.log(x); // 'undefined'
x = 1; // 초기화
```


### 그 외 호이스팅 이론들

#### 호이스팅 우선 순위

변수가 함수보다 위로 끌어올려진다.