---
date: 2020-10-27
title: "여러 프로젝트에서 공통 코드 사용"
categories: 
    - Tech
desc: "Sharing code between projects"
slug: "Sharing code between projects"
---

## 하고 싶은 것

여러 프로젝트에서 공통 코드를 사용하고 싶다.

> ex) project A, project B 둘 모두 동일한 http.js 파일을 사용하고 싶다.
> 나는 vue-cli나 cra을 주로 사용하는데 여기서 공용 파일들을 어떻게 사용할지 애매해진다.

## 나의 해결책

각 프로젝트에서 alias를 이용해 외부 폴더를 연결한다.

```
project A
  - node_modules
  - src
  - package.json
project B
  - node_modules
  - src
  - package.json
shared
  - services
    - http.js
    - apiPath.js
  - etc...
```


```js
// vue.config.js
configureWebpack: {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../shared'),
    },
  },
```

```js
// project A, project B
import http from '~/services/http';
import apiPath from '~/services/apiPath';

methods: {
  getData() {
    http.get(apiPath.USERS).then(response => {
      // do something.
    });
  }
}
```

## 다른 상황

하나의 프로젝트에서 내부적으로 2개의 진입점을 만들어서, 2개의 앱처럼 사용 (이건 안해봄)
> ex) 하나의 프로젝트에 pc/mo 구분 구성.

```
project
  - node_modules
  - package.json
  - src
    - pc
    - mo
    - shared
        - services
            - http.js
            - apiPath.js
```

```js
'@pc': path.resolve(__dirname, 'src/pc),
'@mo': path.resolve(__dirname, 'src/mo),
'@shared': path.resolve(__dirname, 'src/shared),
```

```js
// package.json
"serve:pc": "vue-cli-service serve --open  src/pc/main.js",
"serve:mo": "vue-cli-service serve --open  src/mo/main.js",
"build:pc": "vue-cli-service build --dest dist/pc src/pc/main.js",
"build:mo": "vue-cli-service build --dest dist/mo src/mo/main.js"
```

[참고](https://stackoverflow.com/questions/54761154/sharing-assets-and-components-between-vue-projects)