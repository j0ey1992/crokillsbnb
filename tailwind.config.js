/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cronos-inspired color palette
        primary: {
          50: '#e6f7ff',
          100: '#b3e7ff',
          200: '#80d6ff',
          300: '#4dc4ff',
          400: '#26b6ff',
          500: '#00a3ff', // Primary blue
          600: '#0082cc',
          700: '#006299',
          800: '#004166',
          900: '#002033',
        },
        secondary: {
          50: '#e6fff7',
          100: '#b3ffe7',
          200: '#80ffd6',
          300: '#4dffc4',
          400: '#26ffb6',
          500: '#00ffa3', // Primary green
          600: '#00cc82',
          700: '#009962',
          800: '#006641',
          900: '#003321',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#171717',
          200: '#262626',
          300: '#404040',
          400: '#525252',
        },
        light: {
          DEFAULT: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(0, 163, 255, 0.5)',
        'glow-green': '0 0 15px rgba(0, 255, 163, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
