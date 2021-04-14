---
date: 2021-04-13
title: "OOP"
categories: 
    - 기출문제
---

## Class

객체를 생성하기 위한 템플릿.
Class는 사실 특별한 함수이다.

# OOP

물체 중심의 프로그래밍 (관점).
사람이 물체를 인지하는 방식을 프로그래밍에 적용.

[이 관점에 대한 반대](#객체지향의-사실과-오해)


```js
// 기능과 상태가 같이 있다.
class Heater {
    temperature = 0;

    turnsUp() {
        this.temperature += 1;
    }

    getTemperature() {
        return this.temperature;
    }
}
```

```js
const heater = new Heater();

heater.turnsUp();

console.log(heater.getTemperature());
```

## 특징

- interface
- 다형성
- 상속/합성
- 등..

## 장점이자 주의점

우리 뇌가 이해하기 쉬우려고 물체 관점으로 가는건데,
상속이 깊어지고 과하게 추상화하고 해서 이해가 어렵게 하지 말자.

[포프TV OOP](https://www.youtube.com/watch?v=7zz5gKa7iXk)

# Functional Programming

순수 함수들을 조합해서 프로그램을 디자인.

```js
add(x, y) {
    return x + y;
}
```

## 불변성

상태를 immutable로 만들어 side effect 차단.

![Functional Programming](https://camo.githubusercontent.com/453a98039f12a5cb1663a7da935f1dc70addcfaf6ac9077f6ce482d0789fb696/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a414d38334c50397347476a49756c33633568497357672e706e67)


## 객체지향의 사실과 오해

실 세계를 모방하는 게 아니라 새로운 세계를 창조하는 것이다.
약할과 책임, 협력에 대하여 객체를 가지고 설명.