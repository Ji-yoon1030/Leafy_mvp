# Vercel 배포 가이드

## 📦 설치된 패키지

웹 배포를 위해 다음 패키지들이 설치되었습니다:
- `react-dom`: React를 웹 DOM에 렌더링하기 위한 패키지
- `react-native-web`: React Native 컴포넌트를 웹에서 사용할 수 있게 해주는 패키지
- `@expo/metro-runtime`: Expo 웹 빌드를 위한 런타임

## 🚀 Vercel 배포 방법

### 1. Vercel 계정 연결
1. [Vercel](https://vercel.com)에 접속하여 로그인합니다
2. GitHub 계정과 연동합니다

### 2. 프로젝트 Import
1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub에서 `Leafy_mvp` 저장소 선택
3. Import 클릭

### 3. 프로젝트 설정
Vercel이 자동으로 `vercel.json` 설정을 읽어들입니다:
- **Build Command**: `expo export -p web`
- **Output Directory**: `dist`
- **Install Command**: `npm install --legacy-peer-deps`

설정이 자동으로 적용되었는지 확인하고 "Deploy" 버튼을 클릭합니다.

### 4. 배포 완료
몇 분 후 배포가 완료되면 Vercel이 제공하는 URL로 앱에 접속할 수 있습니다.

## 🛠️ 로컬에서 웹 버전 테스트

로컬에서 웹 버전을 테스트하려면:

```bash
# 웹 개발 서버 실행
npm run web

# 또는
expo start --web
```

웹 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📝 주의사항

1. React Native 컴포넌트 중 일부는 웹에서 제대로 작동하지 않을 수 있습니다
2. 웹 전용 스타일링이 필요한 경우 `Platform.OS === 'web'` 조건을 사용하세요
3. 네이티브 기능(카메라, 위치 등)은 웹에서 다르게 동작할 수 있습니다

## 🔄 자동 배포

이제 `main` 브랜치에 push할 때마다 Vercel이 자동으로 배포를 진행합니다.

## 📚 추가 리소스

- [Expo Web 공식 문서](https://docs.expo.dev/workflow/web/)
- [React Native Web 문서](https://necolas.github.io/react-native-web/)
- [Vercel 문서](https://vercel.com/docs)

