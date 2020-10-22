---
date: 2020-10-22
title: "Gatsby / Netlify / Utterances"
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

## Utterances

댓글 기능을 추가한다.
[Utterances](https://utteranc.es)를 사용한다.
Githup issue search API를 이용하는 방식이다. 자세한 내용은 공홈 참고.

### Troubleshooting

Utterances 공홈에서 시키는 대로 React component 안에 script 태그를 추가하는 방식으로는 정상 작동하지 않았다.
이유는 정확히 찾아보지 못했지만, 보안 이유인 것 같았다.


[해결책](https://github.com/utterance/utterances/issues/161)
```js
componentDidMount () {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin","anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "[ENTER REPO HERE]");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute( "theme", "github-light");
    anchor.appendChild(script);
}

render() {
    return (
        <div id="inject-comments-for-uterances"></div>
    );
}
```

## 도메인 연결

- 무료 도메인을 산다(?)
    - [freenom](https://my.freenom.com/domains.php)을 이용했다.

- 주문한 도메인을 Netlify 설정에서 연결.

- Set Up Netlify DNS for your domain
    - freenom 가서 주문 한 도메인에 netlify 네임서버 추가

- https 인증

- 끝



