---
date: 2020-11-13
title: "git branch 전략"
categories: 
    - 사소한 팁
slug: "branch"
---

거창한 거 절대 아니고.. 그냥 사소한 실제 깃 사용 후기.

## 사용기

여러 사람과 협업을 하며 개발 코드와 배포 버전 코드의 분리가 힘들었다.

개발 브랜치(develop)를 다 같이 사용하고, 여러 기능을 동시에 개발 진행 한다.
거기서 일부 건만 상용 배포해야하는 경우들이 생긴다.
~~커밋 한개 한개 revert를 한적도~~


검색해보니 이런 저런 복잡한 [브랜치 전략 이론](https://lucamezzalira.com/2014/03/10/git-flow-vs-github-flow/)이 많이 있는데, 지금은 그렇게까지 하기 싫어서
간단한 규칙만 만들었다.

- master: 상용 버전 브랜치
- develop: 상용 배포 준비 브랜치. 즉 기능 별 작업이 완료 된 후 여기 머지한다.
- feature/{feature-name}: 기능 별 브랜치. 작업 완료 후 develop에 머지 후 제거한다.



