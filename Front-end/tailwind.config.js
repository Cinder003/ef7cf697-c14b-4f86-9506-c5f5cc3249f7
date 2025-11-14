/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-purple': '#8b5cf6',
        'bright-blue': '#3b82f6',
        'bright-pink': '#ec4899',
        'bright-orange': '#f97316',
        'bright-cyan': '#06b6d4',
        'bright-teal': '#14b8a6',
        'bright-rose': '#f43f5e',
        'bright-green': '#10b981',
        'bright-amber': '#f59e0b',
      },
      animation: {
        'gradient-pulse': 'gradient-pulse 6s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        'gradient-pulse': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}