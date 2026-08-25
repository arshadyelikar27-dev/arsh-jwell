/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#070708',
          900: '#0B0B0C', // Primary dark background
          850: '#111113',
          800: '#161619',
          700: '#222227',
          600: '#323238',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5F0E6', // Primary light background / text
          200: '#EAE2D2',
          300: '#DDD2BD',
          400: '#C2B59D',
          muted: '#A89F8F',
        },
        gold: {
          light: '#EAD79B',
          glow: '#DFC07A',
          DEFAULT: '#C9A24B', // Antique gold
          deep: '#997528',
          dark: '#6E5218',
          border: 'rgba(201, 162, 75, 0.25)',
          borderSubtle: 'rgba(201, 162, 75, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.6 },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
    },
  },
  plugins: [],
}
