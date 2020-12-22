---
date: 2020-12-23
title: "Event Loop"
categories: 
    - 기출문제
---

자세한 설명의 좋은 글들을 보고, 이론을 간단히 정리해본다.
그냥 더 좋은 글 보세요..

- https://meetup.toast.com/posts/89
- https://velog.io/@thms200/Event-Loop-이벤트-루프
- https://javascriptbit.com/what-is-the-event-loop-in-javascript/



## 동시성 (Concurrency)

자바스크립트는 단일 스레드 기반의 언어이다. (Call Stack이 하나)

그러나 동시에 여러 일이 가능한 것처럼 보인다. (http call 등)
어떻게 가능한가?

자바스크립트 엔진이 돌아가는 환경. 즉, 브라우저나 node.js가 한다.

![event-loop](https://javascriptbit.com/static/event-loop-833fa9b4297875ee574ce9291e3690d1-a79e3.png)

실제로 우리가 비동기 호출을 위해 사용하는 settimeout은 javascript engine이 아닌 web apis에 정의되어 있다.
이벤트 루프나 콜백 큐도 마찬가지로 js엔진의 외부에 구현.

- 자바스크립트 엔진
- Web Api: 브라우저에서 제공하는 api (DOM, AJAX, Timeout 등)
- Callback Queue(Task Queue): 비동기적으로 실행 된 콜백 함수가 보관 되는 영역 
- Event Loop


```js
function foo() {
  bar();
  console.log('foo'); // 2
}

function bar() {
  console.log('bar'); // 1
}

function baz() {
  console.log('baz'); // 3
}

setTimeout(baz, 0);
foo();
```

동작 방식을 생각해보자면. (정확하게 맞는건지 잘 모르겠다. 틀린 부분 있으면 댓글 부탁)

1. setTimeout 함수가 스택에 추가. 브라우저에 타이머 이벤트를 요청. 스택에서 제거.
1. foo 함수가 스택에 추가.
1. bar 함수가 스택에 추가.
1. console.log('bar') 스택에 추가. 실행. 제거.
1. bar 함수 스택에서 제거.
1. console.log('foo') 스택에 추가. 실행. 제거.
1. foo 함수 스택에서 제거.
1. 브라우저의 타이머가 baz 함수를 **Callback Queue에 추가**
1. **이벤트 루프는 Call stack과 Callback Queue 상태를 체크해, Call Stack 이 빈 상태가 되면, Callback Queue의 첫번째 콜백을(baz 함수) Call Stack으로 밀어넣는다.**
1. baz 실행.


## 프라미스, 마이크로 태스크

```js
Promise.resolve().then(() => {
    console.log(1); // 1
}).then(() => {
    console.log(2); // 2
});

setTimeout(() => {
    console.log(3); // 3
});
```

이벤트 루프는 Microtask Queue를 Task Queue보다 우선적으로 체크하고 담는다.


