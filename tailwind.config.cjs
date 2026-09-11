/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080B14',
          900: '#0A0E1A',
          800: '#0F1526',
          700: '#161D33',
          600: '#212A47',
        },
        navy: {
          50: '#EEF2FB',
          100: '#DCE4F5',
          200: '#B3C4E8',
          300: '#7F99D2',
          400: '#4C6EB5',
          500: '#2A4C93',
          600: '#153672',
          700: '#0F2856',
          800: '#0A1D40',
          900: '#07152E',
        },
        gold: {
          50: '#FBF6EB',
          100: '#F4E7C7',
          200: '#E9D095',
          300: '#DDB863',
          400: '#D3A64A',
          500: '#C89B3C',
          600: '#AD8430',
          700: '#8A6825',
          800: '#664C1B',
          900: '#453212',
        },
        signal: {
          50: '#EAFFFC',
          100: '#CFFAF4',
          200: '#9AF0E5',
          300: '#5FE0D2',
          400: '#33C9BC',
          500: '#1FADA1',
          600: '#178A81',
          700: '#136B65',
        },
        paper: '#FAF8F3',
        cream: '#F3EFE4',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Manrope', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(211,166,74,0.25), 0 8px 40px -8px rgba(211,166,74,0.35)',
        'signal-glow': '0 0 0 1px rgba(51,201,188,0.25), 0 8px 40px -8px rgba(51,201,188,0.35)',
        card: '0 1px 2px rgba(8,11,20,0.04), 0 12px 32px -12px rgba(8,11,20,0.18)',
        'card-lg': '0 20px 60px -20px rgba(8,11,20,0.35)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 1.2s',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.55 },
        },
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
