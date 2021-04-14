---
date: 2021-04-14
title: "Vue vs React"
categories: 
    - 기출문제
---

Hello.vue
```html
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
export default {
  props: {
    foo: String,
  },
  data() {
    return {
	  	greeting: 'Hello'
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

Hello.jsx
```jsx
import React, { useState } from 'react';

export function Hello({ foo }: {foo: string) {
  const [greeting, setGreeting] = useState('Hello');

  return (
    <p>{ greeting } World!</p>
  );
}
```

## Template vs JSX

Vue는 전통적인 Template을 이용해서 UI를 표현한다.
상대적으로 입문자에게 러닝 커브가 낮다고 한다.

React에서는 모든 컴포넌트는 JSX (XML 유사 문법) 를 사용하는 렌더링 함수를 통해서 UI를 표현합니다. 
**React에서는 모든 것이 JavaScript입니다.** JSX를 통해서 HTML 구조가 들어와있을 뿐만 아니라 요즘에는 CSS 관리도 JavaScript에서 하는 추세죠.


## 중요 장단점

- **React 생태계가 풍부**
- Typescript 지원. vue에서의 사용은 아직 미흡하다고 한다.
- Template은 런타임 에러가 나오기 쉽고, 테스트하기 어렵다.
- Vue.js는 .vue 파일 안에 컴포넌트에 관한 템플릿, 스타일과 스크립트를 모두 작성할 수 있는 단일 파일 컴포넌트(Single File Component)
- Vue의 [폼 입력 양방향 바인딩](https://kr.vuejs.org/v2/guide/forms.html)


## 공통점

- 가상 DOM 활용
- 반응적이고 조합 가능한 컴포넌트를 제공
- 코어 라이브러리에만 집중하고 있고 라우팅 및 전역 상태를 관리하는 컴패니언 라이브러리가 있습니다.

## 그 외 특징

- React Native
- 발전 속도. React가 훨씬 빠르다고 한다.
- data 변이

```js
// vue.js
data() {
	return {
		name: 'Foo'
	}
},
mounted() {
	this.name = 'Bar';
}
```

```js
// react.js
const [name, setName] = useState('Foo');

setName('Bar');
```

- 컴포넌트 쪼갤 경우
	- vue는 한 군데에서만 사용 될 작은 컴포넌트를 정의할 때에도 새 파일을 만들어야 한다.
	- react는 상대적으로 직관적이고 간결하다.


```jsx
// react.js
import React, { useState } from 'react'

// User 컴포넌트.
function User({ name }) {
	return <li>{name}</li>
}

// Users 리스트 컴포넌트.
export function Users({ datas }) {
  return (
    	<ul>
			{datas.map(item => (
				<User name={item} />
			))}
		</ul>
  )
}
```


## 결론

- 템플릿 형식으로 앱 제작을 원한다면 vue
- 큰 규모의 앱을 만든다면 react
	- React의 렌더링 시스템, 불변 상태가 복잡한 규모의 앱에서는 유지보수에 용이할 것.

