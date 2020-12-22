---
date: 2020-12-22
title: "이벤트 버블링, 캡쳐링, 위임"
categories: 
    - 기출문제
slug: "Event Bubbling"
---

## 이벤트 단계

1. 캡처링 단계 – 이벤트가 하위 요소로 전파되는 단계
2. 타깃 단계 – 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 – 이벤트가 상위 요소로 전파되는 단계

![eventflow](../images/eventflow.svg)


## 버블링 (Bubbling)

이벤트가 자식 요소에서 부모 요소로 전파.

```html
<!-- p태그 클릭 시 alert 순서: 'p' ->'div' -> 'form' -->
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

## 캡쳐링 (Capturing)

버블링 반대 방향. 부모 요소에서 자식 요소로 전파.

## 사용

이벤트를 등록할 때 정의.

```js
// capture 옵션. default값은 false. 즉, 이벤트 핸들러는 버블링 단계에서 동작.
target.addEventListener(type, listener[, useCapture]);
```

## event.stopPropagation()

이벤트 전파 중단.

> 꼭 필요한 경우 아니면 쓰지 말라고 한다. [ko.javascript.info](https://ko.javascript.info/bubbling-and-capturing#ref-713)

## event.target

실제 이벤트 타깃 요소.
event.currentTarget은 이벤트 핸들러를 등록한 요소.

```html
<!-- p태그 클릭 시 event.target은 p. event.currentTarget은 form. -->
<form onclick="onClick">FORM
  <div>DIV
    <p>P</p>
  </div>
</form>
```

## 이벤트 위임 (Event Delegation)

캡처링과 버블링을 활용하면 강력한 이벤트 핸들링 패턴인 이벤트 위임(event delegation) 을 구현.

```html
<table>
  <tr onclick="onClickTest" />
  <tr onclick="onClickTest" />
  <tr onclick="onClickTest" />
  <!-- ... 100개. -->
</table>
```

```html
<script>
function onClickTest (event) {
  if (event.target.tagName != 'TR') return; // TR에서 발생한 게 아니라면 아무 작업도 하지 않습니다,

  // do something.
};

</script>

<table onclick="onClickTest">
  <tr />
  <tr />
  <tr />
  <!-- ... 100개. -->
</table>
```

요소마다 핸들러를 할당하지 않고, 컨테이너에 단 하나를 할당해서 제어. 