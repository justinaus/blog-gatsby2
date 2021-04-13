---
date: 2021-04-13
title: "prototype"
categories: 
    - 기출문제
---

Javascript에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다

```js
let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// f 함수의 prototype 속성 값들을 추가 하자.
f.prototype.b = 3;
f.prototype.c = 4;

// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 이다.
// 마지막으로 o.[[Prototype]].[[Prototype]].[[Prototype]]은 null이다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o는 'a'라는 속성을 가지는가? 그렇다. 속성의 값은 1이다.

console.log(o.b); // 2
// o는 'b'라는 속성을 가지는가? 그렇다. 속성의 값은 2이다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않는다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부른다.

console.log(o.c); // 4
// o는 'c'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 가지는가? 가지고 값은 4이다.

console.log(o.d); // undefined
// o는 'd'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'd'라는 속성을 가지는가? 아니다. 다시 프로토타입을 확인해보자.
// o.[[Prototype]].[[Prototype]]은 null이다. 찾는 것을 그만두자.
// 속성이 발견되지 않았기 때문에 undefined를 반환한다.
```

```js
o.valueOf();
// o의 프로토타입 객체인 Object 에 정의 된 다른 멤버도 사용 가능.
```

> 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체(prototype object)를 가진다는 의미입니다.
>
> 프로토타입 객체도 또 다시 상위 프로토타입 객체로부터 메소드와 속성을 상속 받을 수도 있고 그 상위 프로토타입 객체도 마찬가지입니다. > 이를 프로토타입 체인(prototype chain)이라 부르며 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록 하는 근간입니다.
>
> 정확히 말하자면 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 prototype이라는 속성에 정의되어 있습니다.


> 프로토타입 체인에서 한 객체의 메소드와 속성들이 다른 객체로 복사되는 것이 아님을 재차 언급합니다. — 위에서 보시다 시피 체인을 타고 올라가며 접근할 뿐입니다.
>
> 특정 객체의 프로토타입 객체에 바로 접근하는 공식적인 방법은 없습니다

