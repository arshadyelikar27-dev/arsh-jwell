/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory/cream backgrounds — light luxury theme
        cream: {
          50:  '#FDFAF6',
          100: '#F8F4EE', // Primary page background
          200: '#F2EDE4', // Secondary sections
          300: '#E8E0D4',
          400: '#D9CFC0',
        },
        // Charcoal kept for any shadow/overlay usage
        charcoal: {
          950: '#070708',
          900: '#0B0B0C',
          850: '#111113',
          800: '#161619',
          700: '#222227',
          600: '#323238',
        },
        ivory: {
          50:    '#FAF8F5',
          100:   '#F5F0E6',
          200:   '#EAE2D2',
          300:   '#DDD2BD',
          400:   '#C2B59D',
          muted: '#A89F8F',
        },
        gold: {
          light:  '#EAD79B',
          glow:   '#DFC07A',
          DEFAULT: '#C9A24B',
          deep:   '#997528',
          dark:   '#6E5218',
          border: 'rgba(201, 162, 75, 0.25)',
          borderSubtle: 'rgba(201, 162, 75, 0.12)',
        },
        // Logo Royal Purple — #6B2D8B (KEPT, never removed)
        royal: {
          light:  '#9B59C4',
          DEFAULT: '#6B2D8B',
          deep:   '#4A1D63',
          dark:   '#2E1240',
          muted:  'rgba(107, 45, 139, 0.15)',
          border: 'rgba(107, 45, 139, 0.30)',
          glow:   'rgba(107, 45, 139, 0.20)',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.35em',
      },
    },
  },
  plugins: [],
}

