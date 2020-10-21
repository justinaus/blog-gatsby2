---
date: 2020-10-21
title: "검색 엔진 최적화 (SEO)"
categories: 
    - Tech
---

## SEO가 무엇인가

[네이버 가이드](https://searchadvisor.naver.com/guide/seo-basic-intro)가 정말 좋네요.. 자세한 내용은 네이버에서..

## 그럼 뭐뭐를 해야하는가

코드 레벨은 다루지 않고, 기본적으로 해야할 것만 나열하겠다.

### 1. meta tag 추가

[네이버 가이드](https://searchadvisor.naver.com/guide/markup-content)

```html
<head>
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="keywords" content="">
  ...
  <meta property="og:type" content="website">
  <meta property="og:title" content="페이지 제목">
  <meta property="og:description" content="페이지 설명">
  <meta property="og:image" content="http://www.mysite.com/article/article1_featured_image.jpg">
  <meta property="og:url" content="http://www.mysite.com/article/article1.html">
  ...
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="페이지 제목">
  <meta name="twitter:description" content="페이지 설명">
  <meta name="twitter:image" content="http://www.mysite.com/article/article1.html">
  <meta name="twitter:domain" content="사이트 명">
</head>
```

### 2. title

각 페이지에서 동적으로 타이틀을 표시.
나는 [vue-meta](https://vue-meta.nuxtjs.org)를 썼지만, react에서는 [react-helmet](https://github.com/nfl/react-helmet)을 사용하면 될 것 같다.

```html
// Component.vue
{
  metaInfo: {
    title: '페이지 제목'
    meta: [
      { name: 'description', content: '페이지 설명' },
      {
        property: 'og:title',
        content: 'SNS에 표시할 제목',
      },
    ]
  }
}
```

### 3. robots.txt

[네이버 가이드](https://searchadvisor.naver.com/guide/seo-basic-robots)

```
User-agent: *
Allow: /
Sitemap: https://도메인/sitemap.xml
```

### 4. sitemap.xml

[네이버 가이드](https://searchadvisor.naver.com/guide/request-feed)

```html
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://도메인/페이지1</loc>
  </url>
  <url>
    <loc>http://도메인/페이지2</loc>
  </url>  
</urlset>
```

### 5. noscript tag

noscript tag에 따라 검색 최적화에 악영향을 끼칠 수 있다고 한다. [참고](https://northcutt.com/seo/how-the-noscript-tag-impacts-seo-hint-be-very-careful/)

#### 결론

잘 모르겠다. 
noscript tag에 유의미한 내용을 넣으면 될 것 같다..

### 6. Google Analytics, Google Search Console 등록

자세한 내용은 생략한다.

### 7. 네이버에 웹사이트 등록
 
[네이버 가이드](https://searchadvisor.naver.com/start)






