---
date: 2021-05-12
title: "디자인 패턴"
categories: 
    - 기출문제
slug: "Design Pattern"
---

## Singleton

단일 인스턴스만 허용.

```ts
export class LogManager {
  private static _instance: LogManager;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  log(message: string) {
    console.log(message);
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new LogManager();
    }

    return this._instance;
  }
}
```

```js
LogManager.instance.log('Hello!');
```

# Factory Method Pattern

객체를 생성하는 공장을 만든다.


```ts
interface IPasta {
  getPrice: () => number;
}

class Spaghetti implements IPasta {
  getPrice() {
    return 3000;
  }
}

class Penne implements IPasta {
  getPrice() {
    return 5000;
  }
}

enum PastaType {
  Spaghetti;
  Penne;
  Linguine;
}

class PastaFactory {
  static create(type: PastaType): IPasta {
    switch(type) {
      case PastaType.Spaghetti: return new Spaghetti();
      case PastaType.Penne: return new Penne();
      case PastaType.Linguine: return new Linguine();
      default: return null;
    }
  }
}
```

```ts
const spaghetti: IPasta = PastaFactory.create(PastaType.Spaghetti);
const penne: IPasta = PastaFactory.create(PastaType.Penne);

spaghetti.getPrice();
penne.getPrice();
```

좀 찾아보니까 언어마다 조금씩 패턴이 다른 것 같은데,

핵심은 객체를 생성하기 위한 인터페이스를 정의하고 (추상화),
어떤 클래스의 인스턴스를 생성할지 결정은 서브 클래스가 한다.

- 구체적인 타입을 몰라도 객체를 생성/사용 할 수 있게 한다.
- 객체 간의 결합도를 낮춘다. 유연하고 확장성 있는 구조.
- 객체들을 한 곳에서 관리할 수 있다는 장점도 있다.


## 추상 팩토리 패턴

```ts
interface PastaFactory {
  create: () => IPasta
}
```

```ts
class SpaghettiFactory implements PastaFactory {
  create() {
    return new Spaghetti();
  }
}

class PenneFactory implements PastaFactory {
  create() {
    return new Penne();
  }
}
```

```ts
const spaghetti: IPasta = SpaghettiFactory.create();
const penne: IPasta = PenneFactory.create();

spaghetti.getPrice();
penne.getPrice();
```

[![abstract-factory](https://www.dofactory.com/img/diagrams/javascript/javascript-abstract-factory.jpg)](https://www.dofactory.com/javascript/design-patterns/abstract-factory)


# Pub-Sub

발행-구독

[Sample](https://github.com/justinaus/mk-react/commit/0d25a3ec98d5f603cdcf1e27f3e6e6b727f1d1dd)




