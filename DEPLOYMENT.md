# Vercel 배포 가이드

## 📦 기술 스택

이 프로젝트는 Next.js 14 (App Router)를 기반으로 개발되었습니다:
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment Platform**: Vercel

## 🚀 Vercel 배포 방법

### 방법 1: GitHub 연동 (추천)

#### 1. GitHub에 코드 푸시
```bash
git add .
git commit -m "Next.js 마이그레이션 완료"
git push origin main
```

#### 2. Vercel 계정 연결
1. [Vercel](https://vercel.com)에 접속하여 로그인합니다
2. GitHub 계정과 연동합니다

#### 3. 프로젝트 Import
1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub에서 `Leafy_mvp` 저장소 선택
3. Import 클릭

#### 4. 프로젝트 설정
Vercel이 Next.js 프로젝트를 자동으로 감지합니다:
- **Framework Preset**: Next.js (자동 감지)
- **Build Command**: `next build` (자동 설정)
- **Output Directory**: `.next` (자동 설정)
- **Install Command**: `npm install` (자동 설정)

설정이 올바른지 확인하고 "Deploy" 버튼을 클릭합니다.

#### 5. 배포 완료
몇 분 후 배포가 완료되면 Vercel이 제공하는 URL로 앱에 접속할 수 있습니다.
예: `https://leafy-mvp.vercel.app`

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치 (전역)
npm i -g vercel

# 프로젝트 디렉토리에서 실행
vercel

# 프로덕션 배포
vercel --prod
```

## 🛠️ 로컬에서 개발 및 테스트

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드 테스트
```bash
# 빌드 생성
npm run build

# 프로덕션 서버 실행
npm start
```

## 🔄 자동 배포

GitHub와 연동된 경우, `main` 브랜치에 push할 때마다 Vercel이 자동으로:
1. 변경사항 감지
2. 빌드 실행
3. 프로덕션 배포
4. 이전 버전 롤백 가능

## 📝 환경 변수 설정 (필요시)

Vercel 대시보드에서 환경 변수를 설정할 수 있습니다:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 변수 추가 (예: `API_KEY`, `DATABASE_URL` 등)

## 🎯 성능 최적화

Next.js는 Vercel에서 최적의 성능을 발휘합니다:
- ✅ 자동 코드 분할
- ✅ 이미지 최적화
- ✅ 서버 사이드 렌더링 (SSR)
- ✅ 정적 사이트 생성 (SSG)
- ✅ Edge Functions 지원
- ✅ 자동 HTTPS

## 📊 배포 후 모니터링

Vercel 대시보드에서 확인 가능:
- 배포 히스토리
- 빌드 로그
- 성능 메트릭
- 실시간 트래픽
- 에러 로그

## 🐛 문제 해결

### 빌드 실패 시
1. 로컬에서 `npm run build` 테스트
2. Vercel 빌드 로그 확인
3. TypeScript 에러 확인
4. 의존성 버전 확인

### 배포 후 오류 시
1. Vercel 대시보드에서 로그 확인
2. 브라우저 콘솔에서 에러 확인
3. 필요시 이전 버전으로 롤백

## 📚 추가 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Vercel 문서](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

## 🌟 추가 기능 (선택사항)

### 커스텀 도메인 연결
1. Vercel 대시보드 → Settings → Domains
2. 도메인 추가 및 DNS 설정

### 분석 도구 추가
```bash
npm install @vercel/analytics
```

`app/layout.tsx`에 추가:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```
