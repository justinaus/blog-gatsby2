---
date: 2020-10-12
title: "Gatsby / Netlify"
categories: 
    - Tech
---

## Gatsby-cli

**마크다운**을 이용하는 블로그를 만들고 싶어졌다.
좀 보니까 React 기반의 프레임워크 Gatsby가 대세라고 한다.
늘 그랬듯이, 기본 셋팅이 되어 있는 [Gatsby-cli](https://www.gatsbyjs.com/docs/gatsby-cli/)를 사용한다.

```zsh
    npm install -g gatsby-cli
```
## Gatsby Starter

개츠비 프로젝트를 생성할 때, bolierplate 사이트인 [Starter](https://www.gatsbyjs.com/docs/starters/)를 선택할 수 있다(템플릿 같은 개념?).
나는 카테고리 분류를 하고 싶어서 좀 찾아보았다. [gatsby-markdown-blog-starter](https://www.gatsbyjs.com/starters/ammarjabakji/gatsby-markdown-blog-starter)

```zsh
    gatsby new my-gatsby-project https://github.com/ammarjabakji/gatsby-markdown-blog-starter
    gatsby develop
```

## Netlify

웹사이트는 만들었으니 이제 접속 가능하게 배포한다.
Netlify는 깃헙 푸시만 해도 빌드/배포 가능한 웹호스팅을 지원한다.
[Netlify 공홈](https://www.netlify.com) 가서 깃헙 계정 연결하고 시키는대로 진행하면 deploy까지 완료이다.
