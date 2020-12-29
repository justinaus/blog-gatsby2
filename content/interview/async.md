---
date: 2020-12-30
title: "비동기 프로그래밍"
categories: 
    - 기출문제
slug: "Async"
---

# Promise

Promise는 비동기 작업의 결과를 나타내는 객체이다.
함수에 콜백을 전달하는 대신에, 콜백을 첨부하는 방식이다.

```js
const getMyInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
          id: 'justinaus'
        });
    }, 1000);
  });
}

getMyInfo().then((result) => {
  // 비동기 연산이 종료 된 후 실행.
});
```

## 장점

Chaining을 활용한 콜백 지옥 해소

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log("Got the final result: " + finalResult))
  .catch(failureCallback);
```

![frontend.turing.io](https://pbs.twimg.com/media/COYihdoWgAE9q3Y.jpg)

[이미지 출처: frontend.turing.io](https://frontend.turing.io/lessons/module-3/promises.html)

## 에러 처리

```js
const getMyInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // error.
      reject({
        status: "401",
        message: "인증이 필요합니다.",
      });
    }, 1000);
  });
};

getMyInfo()
  .then((result) => {
    console.log("success", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
```

# async/await

비동기 처리를 위한 문법

```js
const getMyName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('justinaus');
    }, 1000);
  });
};

const printMyName = async () => {
  const myName = await getMyName();
  
  console.log('My name is ' + myName);
}

printMyName();
```


## 장점

기본적으로 한줄 한줄 읽는 게 이해가 가장 잘 된다.(동기스럽게) 

```js
async function cookSteak(meat) {
  const meat1 = await salt(meat);
  const meat2 = await fry(meat1);
  const meat3 = await rest(meat2);
}
```

## 단점

여러 Promise들에 의해 느려질 수 있다.

### 이 단점을 완화할 수 있는 패턴

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
} // 9초

async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
} // 거의 3초
```



## 기타
async 함수는 항상 promise를 반환한다.


# Generator (생성자)

Generator 객체는 generator function 으로부터 반환된 값이며 반복자와 반복자 프로토콜을 준수합니다.

```js
function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Iterator (반복자)

반복자(Iterator)는 시퀀스를 정의하고  종료시의 반환값을 잠재적으로 정의하는 객체입니다.  더 구체적으로 말하자면, 반복자는 두 개의 속성( value, done)을 반환하는 next() 메소드 사용하여  객체의 Iterator protocol을 구현합니다.

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    var nextIndex = start;
    var n = 0;

    var rangeIterator = {
       next: function() {
           var result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
           } else if (nextIndex == end) {
               result = { value: n, done: true }
           } else {
               result = { done: true };
           }
           nextIndex += step;
           n++;
           return result;
       }
    };
    return rangeIterator;
}
```

```js
var it = makeRangeIterator(1, 4);

var result = it.next();
while (!result.done) {
 console.log(result.value); // 1 2 3
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);
```

![https://medium.com/@rdsubhas/es6-from-callbacks-to-promises-to-generators-87f1c0cd8f2e](https://miro.medium.com/max/700/1*hkb9fD1Q-LFVRkZnPdFhXA.png)

[이미지 출처: https://medium.com/@rdsubhas/es6-from-callbacks-to-promises-to-generators-87f1c0cd8f2e](https://frontend.turing.io/lessons/module-3/promises.html)