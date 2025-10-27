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

## 🌿 Git 브랜치 전략 (3인 소수 팀용)

### 브랜치 구조

```
main (production)
  ├── feature/기능명        # 새로운 기능 개발
  ├── fix/버그명           # 버그 수정
  └── hotfix/긴급수정명     # 긴급 버그 수정
```

### 브랜치 명명 규칙

#### 1. Feature 브랜치 (기능 개발)
```bash
feature/header-responsive        # 헤더 반응형 개선
feature/add-contact-section      # 연락처 섹션 추가
feature/optimize-animations      # 애니메이션 최적화
```

#### 2. Fix 브랜치 (버그 수정)
```bash
fix/header-menu-toggle           # 헤더 메뉴 토글 버그
fix/stats-counter-overflow       # 통계 카운터 오버플로우
fix/mobile-layout-spacing        # 모바일 레이아웃 간격
```

#### 3. Hotfix 브랜치 (긴급 수정)
```bash
hotfix/critical-security         # 보안 취약점 수정
hotfix/broken-layout             # 레이아웃 깨짐 수정
```

### 워크플로우

#### 1️⃣ 새 기능 개발
```bash
# 1. main에서 최신 코드 가져오기
git checkout main
git pull origin main

# 2. feature 브랜치 생성 및 이동
git checkout -b feature/add-dark-mode

# 3. 작업 후 커밋
git add .
git commit -m "feat: 다크모드 기능 추가"

# 4. 원격 저장소에 푸시
git push origin feature/add-dark-mode
```

#### 2️⃣ Pull Request 생성
- GitHub에서 PR 생성
- PR 템플릿:
  - 변경 사항 설명
  - 스크린샷 첨부 (UI 변경 시)
  - 리뷰어 지정 (@멤버이름)

#### 3️⃣ 리뷰 및 머지
- 팀원 1명 이상 리뷰 후 머지
- 리뷰어 피드백 반영 후 최종 머지
- 머지 후 브랜치 삭제

#### 4️⃣ 버그 수정
```bash
# main에서 직접 수정 가능한 작은 버그
git checkout main
git checkout -b fix/spacing-issue
# 수정 후 바로 커밋 및 머지
```

#### 5️⃣ 긴급 수정 (Hotfix)
```bash
# 프로덕션에 긴급 수정이 필요한 경우
git checkout main
git checkout -b hotfix/critical-bug
# 수정 후 즉시 테스트 및 머지
```

### 커밋 메시지 규칙

```bash
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
perf: 성능 개선
test: 테스트 코드 추가/수정
chore: 빌드 과정 또는 보조 도구 변경
```

**예시:**
```bash
feat: Hero 섹션에 사용 가이드 카드 추가
fix: Header 스크롤 시 그림자 효과 수정
refactor: useIntersectionObserver 훅 로직 개선
perf: Stats 컴포넌트 애니메이션 최적화
```

### 충돌 방지 전략

1. **작은 단위로 자주 커밋**: 하루에 3-4번 이상 커밋
2. **작업 전 항상 최신화**: `git pull origin main` 먼저 실행
3. **파일 분담**: 서로 다른 파일/컴포넌트 담당
4. **소통 필수**: 같은 파일 수정 시 미리 공유

### 일일 워크플로우

```bash
# 아침 시작
git checkout main
git pull origin main                    # 최신 코드 가져오기
git checkout -b feature/my-feature      # 새 기능 브랜치 생성

# 작업 중간중간
git add .
git commit -m "feat: 작업 내용"
git push origin feature/my-feature      # 백업 목적

# 작업 완료
git push origin feature/my-feature       # 최종 푸시
# → GitHub에서 PR 생성
# → 팀원 리뷰 요청
# → 머지 후 브랜치 삭제
```

### 주의사항

⚠️ **절대 금지 사항:**
- `git push --force`: main 브랜치에는 절대 사용 금지
- main 브랜치에 직접 작업 금지
- 다른 사람의 브랜치에 직접 커밋 금지

✅ **권장 사항:**
- 충돌 발생 시 즉시 리뷰어에게 알림
- PR은 최대한 작은 단위로 작성
- 작업 전후 항상 빌드 테스트 (`pnpm build`)

