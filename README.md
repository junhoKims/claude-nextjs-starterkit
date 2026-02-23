# Next.js Starterkit

> Next.js 16 + React 19 + TailwindCSS v4 + shadcn/ui로 구성된 현대적인 프로덕션 레디 스타터킷

## 소개

이 프로젝트는 현대적인 웹 애플리케이션 개발을 위한 완성도 높은 시작점을 제공합니다.
최신 프론트엔드 기술 스택을 미리 설정하여 비즈니스 로직 개발에 바로 집중할 수 있도록 구성되어 있습니다.

## 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| [Next.js](https://nextjs.org) | 16.1.6 | React 풀스택 프레임워크 |
| [React](https://react.dev) | 19 | UI 라이브러리 |
| [TypeScript](https://www.typescriptlang.org) | 5 | 타입 안전성 |
| [TailwindCSS](https://tailwindcss.com) | 4 | 유틸리티 퍼스트 CSS |
| [shadcn/ui](https://ui.shadcn.com) | latest | 재사용 가능한 UI 컴포넌트 |
| [Lucide React](https://lucide.dev) | latest | 아이콘 라이브러리 |
| [pnpm](https://pnpm.io) | latest | 빠른 패키지 매니저 |

## 설치 방법

### 사전 요구사항

- Node.js 20 이상
- pnpm 9 이상

### 설치

```bash
# 저장소 복제
git clone https://github.com/your-username/claude-nextjs-starterkit.git

# 디렉토리 이동
cd claude-nextjs-starterkit

# 의존성 설치
pnpm install
```

### 환경변수 설정

`.env.local` 파일을 프로젝트 루트에 생성하세요:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username/your-repo
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

## 폴더 구조

```
claude-nextjs-starterkit/
├── app/
│   ├── globals.css        # CSS 변수 및 다크모드 설정
│   ├── layout.tsx         # 루트 레이아웃 (폰트, 메타데이터)
│   └── page.tsx           # 홈 페이지
├── components/
│   ├── sections/          # 페이지 섹션 컴포넌트
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── features-section.tsx
│   │   └── getting-started-section.tsx
│   └── ui/                # shadcn/ui 기반 공통 컴포넌트
│       ├── button.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       └── separator.tsx
├── lib/
│   ├── config.ts          # 사이트 전역 설정 (URL, 이름 등)
│   └── utils.ts           # 공통 유틸리티 함수
├── __tests__/             # 테스트 파일
│   ├── components/
│   │   └── site-header.test.tsx
│   └── lib/
│       └── config.test.ts
├── vitest.config.ts       # Vitest 테스트 설정
└── vitest.setup.ts        # 테스트 전역 설정
```

## 사용 가능한 스크립트

```bash
pnpm dev          # 개발 서버 실행 (http://localhost:3000)
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 실행
pnpm lint         # ESLint 검사
pnpm test         # 테스트 watch 모드 실행
pnpm test:run     # 테스트 단일 실행
```

## 커스터마이징 가이드

### 사이트 기본 정보 변경

`lib/config.ts` 파일의 `siteConfig` 객체를 수정하거나,
환경변수(`.env.local`)를 통해 URL을 재정의할 수 있습니다.

```typescript
// lib/config.ts
export const siteConfig = {
  name: "내 프로젝트 이름",        // 수정
  description: "프로젝트 설명",    // 수정
  githubUrl: "...",               // .env.local로 관리 권장
};
```

### 새 UI 컴포넌트 추가

이 프로젝트는 [shadcn/ui](https://ui.shadcn.com)를 사용합니다. 다음 명령으로 컴포넌트를 추가할 수 있습니다:

```bash
pnpm dlx shadcn@latest add [컴포넌트명]
# 예시
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add input
```

### 새 페이지 추가

Next.js App Router를 사용합니다. `app/` 디렉토리에 폴더와 `page.tsx`를 추가하면 자동으로 라우팅됩니다:

```
app/
├── about/
│   └── page.tsx    # /about 라우트 자동 생성
└── blog/
    └── page.tsx    # /blog 라우트 자동 생성
```

### 다크모드 설정

`app/globals.css`에서 `:root`(라이트)와 `.dark`(다크) CSS 변수를 수정하여 색상 테마를 커스터마이징할 수 있습니다.

## 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.
