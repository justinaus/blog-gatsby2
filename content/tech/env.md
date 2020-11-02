---
date: 2020-10-28
title: "모드와 환경변수"
categories: 
    - Tech
slug: "Modes and environment variables"
desc: "Modes and environment variables"
---

## 모드

모드를 정의해, 테스트 등 여러 상황에 대한 분기를 한다.

ex) 각 모드에 따른 api 경로, 테스트 모드일 때만 특정 ui 노출 등.

### vue-cli 기본 제공 모드
- development
- test
- production

활용 예)
```zsh
vue-cli-service build --mode development
vue-cli-service serve --mode production
```

process.env 로 접근 가능

```js
if (process.env.NODE_ENV === 'development') {
  // do something.
}
```


## 환경 변수

```
// .env file
VUE_APP_API_URL=https://testserver.com
```

환경 변수 이름은 vue-cli에서는 무조건 "VUE\_APP\_"으로 시작해야한다.
cra는 REACT\_APP\_


## 그 외 모드 추가

.env.[mode] 파일 생성/추가

```
// .env.staging 파일 생성/추가
NODE_ENV=staging
VUE_APP_API_URL=https://realserver.com
```

```
vue-cli-service build --mode staging
```

[참고](https://cli.vuejs.org/guide/mode-and-env.html#modes)