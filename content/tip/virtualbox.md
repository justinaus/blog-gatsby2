---
date: 2020-11-05
title: "VirtualBox 자동 종료 막기"
categories: 
    - 사소한 팁
slug: "virtualbox"
---

## 문제

윈도우 환경에서 테스트를 위해 VirtualBox를 종종 사용하는데, 일정 시간이 지나면 자동으로 꺼져서 짜증난다.


## 해결 방법

프롬프트 열고
```zsh
slmgr /rearm
```

자세한 내용은 [링크](https://superuser.com/questions/479376/virtualbox-machine-auto-shutting-down-how-do-i-stop-it-from-auto-shutdown) 참고


## Troubleshooting

```
Error: 0xC004F025 Access denied: the requested action requires elevated privileges.
```

프롬프트를 열 때 우클릭 - 관리자 권한으로 실행.



