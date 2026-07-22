/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101A34',
          50: '#EEF1F7',
          100: '#D8DFEE',
          400: '#3D4C77',
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
      },
      fontFamily: {
        display: ['"Lora"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(16, 26, 52, 0.08)',
        floating: '0 12px 40px -8px rgba(16, 26, 52, 0.25)',
      },
    },
  },
  plugins: [],
};
