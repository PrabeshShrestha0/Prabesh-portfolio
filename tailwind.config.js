/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e7fc',
          100: '#e4cefa',
          200: '#d1a4f5',
          300: '#ba75ef',
          400: '#9f4ce7',
          500: '#8b2dda',
          600: '#7c25c7',
          700: '#6b22ab',
          800: '#5a1f91',
          900: '#4a1c78',
        },
        dark: {
          DEFAULT: '#0d1116',
          50: '#161b22',
          100: '#1c2128',
          200: '#21262d',
          300: '#30363d',
          400: '#484f58',
          500: '#6e7681',
          600: '#8b949e',
          700: '#c9d1d9',
          800: '#e6edf3',
          900: '#f0f6fc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
