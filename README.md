# AOLDA Homepage Project(클론 코딩)
Figma MCP + Cursor AI 활용하여 웹페이지 제작

## ✨ 기술

- 🎨 Figma
- ⚡ Vite
- 🎯 TypeScript
- 💅 Tailwind CSS
- 향후 Docker + Github Actions로 CI/CD 구현 예정?? 

## 📋 섹션 구성

1. **Header (헤더)**: 반응형 네비게이션 메뉴
2. **Hero (히어로)**: 메인 비주얼과 가이드 카드
3. **Stats (통계)**: 숫자로 보는 아올다
4. **Service Intro (서비스 소개)**: 아올다 클라우드 소개
5. **Use Cases (사용 사례)**: 실제 사용 중인 서비스들
6. **Rules (약속사항)**: 지켜야 할 3가지 약속
7. **Benefits (혜택)**: 아올다가 제공하는 3가지 혜택
8. **CTA (행동 유도)**: 콘솔 이동 및 팀 합류 버튼
9. **Footer (푸터)**: 연락처 및 정보


### 타이포그래피
- 본문: Noto Sans CJK KR
- 로고: Leon Sans (대체: Arial)
- 크기: 12px ~ 32px (반응형)

## 🚀 시작하기

### 필수 요구사항

- Node.js (v16 이상)
- pnpm (v8 이상)

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작 (http://localhost:5173)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 빌드 미리보기
pnpm preview
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Header.tsx          # 헤더 및 네비게이션
│   ├── Hero.tsx            # 메인 히어로 섹션
│   ├── Stats.tsx           # 통계 섹션
│   ├── ServiceIntro.tsx    # 서비스 소개
│   ├── UseCases.tsx        # 사용 사례
│   ├── Rules.tsx           # 약속사항
│   ├── Benefits.tsx        # 혜택
│   ├── CTA.tsx             # Call-to-Action
│   └── Footer.tsx          # 푸터
├── App.tsx                 # 메인 앱 컴포넌트
├── main.tsx               # 엔트리 포인트
└── index.css              # 글로벌 스타일
```

