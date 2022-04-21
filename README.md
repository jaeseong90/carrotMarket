# 당근마켓 클론코딩 
당근마켓 클론코딩을 재밌게 해보자..


## 1. Setup
- 윈도우, vscode, yarn 
- 설치할 필요 없음.
- 확장 tailwindcss intellisense
- 기타 확장 auto rename tag, colorize, eslint, highlight matching tag, intellicode, korea langeuage packa, path autocomplate, powershell, prettier-code formatter
- prisma , graphQL ,rest client, live server
- vscode-styled-components, styled-jsx language server


### 1.1. nextjs app 생성
- typescript 템플릿 적용한 nextjs app 생성 
```
yarn create next-app@latest --typescript
```
### 1.2 tailwindcss 설치 및 환경설정
- 설치
```
yarn add -D tailwindcss postcss autoprefixer
```
- tailwind 초기화 ( -p postcss.config.js 파일 생성)
```
npx tail windcss init -p
```
- tailwind.config.js (적용대상 설정 )
```
content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
```

- global.css (tailwind적용)
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Automatic Class Sorting with Prettier 플러그인
```
npm install -D prettier prettier-plugin-tailwindcss
```

### 1.3 tailwind
- 

## 참고 
- tailwindcss + prettier https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
- tailwindcss https://tailwindcss.com/







<br><br><br><br><br>

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
