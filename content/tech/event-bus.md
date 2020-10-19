---
date: 2020-10-20
title: "Event bus"
categories: 
    - Tech
---

## 왜 필요

부모/자식 간 이벤트 보다, 글로벌하게 전파하고 싶은 이벤트가 있다.
여러 컴포넌트에서 해당 이벤트를 듣고, 각각 어떤 액션이 필요한 경우.

상태 관리 라이브러리를 사용할 수도 있지만, 상태 관리가 필요 없고, 단순 이벤트 전파만 필요한 경우가 있다.

## 어떻게 사용

```js
//event-bus.vue
import Vue from 'vue';
export const EventBus = new Vue();

// 이벤트 전파
import { EventBus } from './event-bus.js';
EventBus.$emit('eventName', 'value');

// 각 컴포넌트에서 이벤트 듣기
import { EventBus } from './event-bus.js';
EventBus.$on('eventName', value => {
  // do something.
});
```





