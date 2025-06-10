import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/codingApple_react/', // GitHub Pages를 사용하기 위한 베이스 경로 설정
  server: {
    port: 3000, // 개발 서버 포트 설정
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
  build: {
    outDir: 'dist', // 빌드 결과물 디렉토리 설정
    sourcemap: true, // 소스맵 생성
  },
  plugins: [react()],
})
