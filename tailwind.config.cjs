/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        head: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          100: '#EAEAEB',
          200: '#D4D5D6',
          300: '#BFC0C2',
          400: '#94969A',
          500: '#696B71',
          600: '#3E4148',
          700: '#282C34',
        },
        accent: {
          100: '#F3E4F8',
          200: '#E8C9F1',
          300: '#D6A1E7',
          400: '#C678DD',
          500: '#9E60B1',
          600: '#633C6F',
          700: '#3B2442',
        },
      },
    },
  },
  plugins: [],
};
