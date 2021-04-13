---
date: 2020-10-09
title: "클로저"
categories: 
    - 기출문제
---

## 클로저에 대해서 설명하세요

함수가 선언 될 당시의 환경을 기억하는 함수.
이너 함수가 스코프 밖에 있는 변수에 접근.

```javascript
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
//myFunc변수에 displayName을 리턴함
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)
```
객체가 어떤 데이터와 메서드들을 연관시킨다는 점에서 객체지향 프로그래밍과 같은 맥락.


## 어떤 경우에 왜 사용하나요

- 상태를 기억하고 싶을 때
- OOP의 정보 은닉과 캡슐화

```javascript
function Counter() {
    var count = 0;

    return {
        add: function() {
            ++count;
        },
        getCount: function() {
            return count;
        }
    }
}

var counter = Counter();

counter.add();
console.log(counter.getCount()); // 1
counter.add();
console.log(counter.getCount()); // 2

counter.count = 100;

console.log(counter.getCount()); // 2
```

## 흔히 하는 실수

```javascript
for(var i=0; i<3; ++i) {
    setTimeout(function() {
        console.log(i); // 모두 3출력.
    }, 100);
}
```

해결책은. 더 많은 클로저를 사용하는 것.

```javascript
function makeCallback(value) {
    return function() {
        console.log(value);
    }
}

for(var i=0; i<3; ++i) {
    setTimeout(makeCallback(i), 100);
}
```

### 그 외 내용들

#### 이름
closure: 포섭. 
함수 선언 시의 스코프를 포섭한다나..




