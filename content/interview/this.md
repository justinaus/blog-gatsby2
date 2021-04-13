---
date: 2021-04-13
title: "this"
categories: 
    - 기출문제
---

함수 내부에서 this의 값은 함수를 호출한 방법에 의해 동적으로 좌우됩니다.

## 그냥 함수로서 호출

```js
function test() {
    console.log(this === window); // true.
}

test();
```

### strict mode에서는 undefined.

```js
function f2(){
  "use strict";
  return this;
}

f2() === undefined; // true
```


## 메서드로서 호출

함수를 어떤 객체의 메서드로 호출하면 this의 값은 그 객체를 사용합니다.

```js
var o = {
    a: 3,
    test: function() {
        console.log(this.a); // this는 o.
    }
};

console.log(o.test()); // 3
```

## 생성자로서

함수를 new 키워드와 함께 생성자로 사용하면 this는 새로 생긴 객체에 묶입니다.

```js
function Foo() {
  this.a = 37;
}

var o = new Foo();
console.log(o.a); // 37
```

## call, bind, apply

this를 명시적으로 바인딩.

```js
var obj = {a: 'Custom'};

var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

### apply vs call

call() 은 함수에 전달될 인수 리스트를 받는데 비해, apply() 는 인수들의 단일 배열을 받는다는 점입니다.

### bind

```js
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind는 한 번만 동작함!
console.log(h()); // azerty
```

## 화살표 함수

화살표 함수에서 this는 자신을 감싼 정적 범위 lexical context 입니다. 전역 코드에서는 전역 객체를 가리킵니다.

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this|는 Person 객체를 참조
  }, 1000);
}

var p = new Person();
```

```js
'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.




