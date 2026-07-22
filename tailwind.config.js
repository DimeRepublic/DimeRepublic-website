/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2438',
          50: '#F5F7F5',
          100: '#EEF1F7',
          400: '#445064',
          600: '#1B2A52',
          700: '#131F40',
          800: '#0F1930',
          900: '#0A1224',
        },
        accent: {
          DEFAULT: '#1E8F74',
          50: '#DCEFE9',
          100: '#B8DFD1',
          600: '#188A6A',
        },
        gold: {
          DEFAULT: '#D6A34D',
          50: '#F6E9D2',
          600: '#C4923A',
        },
        line: '#DEE4E1',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'display-1': ['44px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-2': ['26px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-3': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(16, 26, 52, 0.08)',
        floating: '0 12px 40px -8px rgba(16, 26, 52, 0.25)',
      },
    },
  },
  plugins: [],
};
