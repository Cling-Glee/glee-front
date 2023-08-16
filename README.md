# Glee-front

## Getting Started

Run the development server:

```
npm run dev
```

Open http://localhost:3000

Run Storybook:

```
npm run storybook
```

Open http://localhost:6006

## 폴더 구조

```

app                              # 앱 라우터
├─ login
├─── page.tsx
└─ ...
components                       # 컴포넌트 (공통 & 각 페이지별로 관리)
├─ common
├─ login
├─── LoginButton.tsx              # 로직 컴포넌트
├─── LoginButtonView.tsx          # 뷰 컴포넌트
├─── LoginButtonView.stories.tsx  # 스토리북 컴포넌트 (뷰 컴포넌트 import)
└─ ...
hooks                            # 커스텀 훅
utils                            # 의존성없이 static한 function

```

