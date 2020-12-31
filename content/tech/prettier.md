---
date: 2020-11-03
title: "Prettier"
categories: 
    - Tech
---

## 무엇인가

코드 스타일 정리 도구.


## 필요성

- 덜 중요한 부분에 에너지 소비를 줄인다.
- ~~작업자가 퇴사해도~~ 일관 된 스타일을 유지한다.
- 대세를 따른다.

## 적용 방법 (vue-cli 기준)

(vue-cli 처음 프로젝트 생성할 때 manually로 선택할 수도 있다. (eslint + prettier))

1. vscode extension 설치
    - ESLint
    - Prettier - Code formatter
1. prettier install
    ```zsh
    yarn add @vue/eslint-config-prettier eslint-plugin-prettier prettier -D
    ```
    - @vue/eslint-config-prettier
        - prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
1. 프로젝트 루트 위치에 .vscode/settings.json 파일 추가
    - vscode 툴에서 글로벌하게 설정할 수도 있지만, 여러모로 코드 스타일 설정 파일이 프로젝트 내에 있는 게 맞는 것 같다.
    ```json
    // 저장 시 자동 수정
    "eslint.autoFixOnSave": true,
    "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
    },
    ```
1. eslintConfig에 prettier extends
    ```js
    // .eslintrc.js
    module.exports = {
      extends: ['plugin:vue/essential', '@vue/prettier'],
    };
    ```


1. prettierrc.json 파일 생성

    ```json
    {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 80
    }
    ```
    [Prettier Options 참고](https://prettier.io/docs/en/options.html)

## 저장 시점에 auto fix 안쓰고 개별 파일 수정 방법

cmd + shift + P -> Format Document