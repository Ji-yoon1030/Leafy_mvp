# Leafy MVP - 뉴스 읽기 서비스

Next.js 기반의 뉴스 읽기 웹 애플리케이션입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 기능

- 📰 카테고리별 뉴스 보기 (Hot Topic, IT, 경제)
- 📖 뉴스 상세 읽기
- ⏱️ 읽기 시간 추적
- 🎨 모던하고 깔끔한 UI/UX

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## Vercel 배포

이 프로젝트는 Vercel에 최적화되어 있습니다.

1. GitHub 저장소에 코드를 푸시합니다
2. [Vercel](https://vercel.com)에서 새 프로젝트를 생성합니다
3. GitHub 저장소를 연결합니다
4. 자동으로 빌드 및 배포가 진행됩니다

또는 Vercel CLI를 사용할 수 있습니다:

```bash
npm i -g vercel
vercel
```

## 프로젝트 구조

```
/app
  /news
    /[id]
      page.tsx        # 뉴스 상세 페이지
      page.module.css
  layout.tsx          # 루트 레이아웃
  page.tsx            # 메인 페이지
  page.module.css
  globals.css
/lib
  context.tsx         # Context API
  newsContent.ts      # 뉴스 데이터
```

## 라이선스

Private



