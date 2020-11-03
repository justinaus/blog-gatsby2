---
date: 2020-11-04
title: "Mirage JS"
categories: 
    - Tech
slug: "Mirage"
desc: "API mocking library"
---

## 이게 뭔가
[API mocking library](https://miragejs.com)


## 왜 필요
프론트 작업 일정이 api 완료 시점에 영향을 많이 받는다.
api 완료 전 선작업에 들어 가는 경우, 예상 했던 것과 구조가 다르게 오는 경우의 시간/에너지 낭비.


## 해결책

api 명세만 먼저 받을 수 있다면, 바로 프론트 작업을 시작/완료할 수 있다.(이론적으론..)
miragejs를 이용해서 api 명세대로 목업 데이터를 만들어서 연결하면 된다.
api가 완료 된 후에는 miragejs 내용만 삭제하면 된다.

## 진행


### 설치

```zsh
yarn add --dev miragejs
```


### 사용

```js
// server.js
import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      }
    })
  },
})
```

호출은 실제 api 사용하는 거랑 똑같이 하면 된다.
request를 intercept 하는 방식으로 동작한다고 한다.

```js
fetch("/movies")
  .then((response) => //do something)
```


## 실제 프로젝트에 적용 후기

api 명세를 일찍 받기 어려웠고... 데이터를 좀 유동적으로 받아서 보려면 miragejs 공부가 더 필요했다.
그래도 프론트 선작업이 필요한 경우가 또 생기면, 다시 적용해 볼 생각이다. 이번엔 api 명세 일찍 받아서..
