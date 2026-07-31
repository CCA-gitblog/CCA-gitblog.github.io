/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        cca: {
          // CCA 오리지널 브랜드 컬러 (라이트 모드 메인, 다크 모드 딥 포인트)
          primary: '#006738',   
          primaryDark: '#022414',
          // 다크 모드에서 빛을 발할 하이엔드 테크 네온 (CCA 그린의 밝은 버전)
          neon: '#00E57A',      
          
          // 배경색 세팅
          bgLight: '#F7F9FC',
          bgDark: '#050505',
          surfaceLight: '#FFFFFF',
          surfaceDark: '#0A0A0A',
          borderLight: '#E2E8F0',
          borderDark: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}