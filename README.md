# AOLDA Homepage Project

아주대학교 교내 클라우드 인프라 개발/운영 소학회 **아올다(AOLDA)** 공식 홈페이지입니다.

Figma 디자인을 기반으로 제작된 현대적이고 반응형 웹사이트입니다.

## ✨ 주요 기능

- 🎨 Figma 디자인 기반의 픽셀 퍼펙트 구현
- 📱 완전한 반응형 디자인
- ⚡ Vite를 활용한 빠른 빌드와 개발 경험
- 🎯 TypeScript로 타입 안정성 보장
- 💅 Tailwind CSS를 활용한 유틸리티 퍼스트 스타일링
- 🔧 쉬운 커스터마이징

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

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#0E76C4` - 메인 브랜드 컬러
- **Gray**: `#AAAAAA`, `#F2F2F2`, `#EAEAEA` - 텍스트 및 배경
- **Red**: `#D10003` - 경고 및 금지사항 강조
- **Background**: `#FFFFFF` - 기본 배경

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

## 🎯 커스터마이징

### 색상 변경

`tailwind.config.js` 파일에서 색상을 수정할 수 있습니다:

```js
colors: {
  primary: {
    500: '#0E76C4', // 메인 컬러
    // 다른 shade 값들...
  },
}
```

### 콘텐츠 수정

각 컴포넌트 파일(`src/components/`)에서 텍스트와 데이터를 수정할 수 있습니다.

### 레이아웃 조정

Tailwind CSS의 유틸리티 클래스를 사용하여 간편하게 레이아웃을 조정할 수 있습니다.

## 🛠 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript 5** - 타입 안정성
- **Vite 7** - 빌드 도구 및 개발 서버
- **Tailwind CSS 4** - 유틸리티 퍼스트 CSS 프레임워크
- **React Router** - 라우팅 (필요시)

## 🔗 관련 링크

- [Figma 디자인 파일](https://www.figma.com/design/WhAbWCMqZRapUXu4Eu3XIT/AHP---Aolda-Homepage-Project)
- [아올다 소학회 소개](#)
- [아올다 클라우드 콘솔](#)

## 📝 라이선스

MIT

---

Made with ❤️ by AOLDA Team
