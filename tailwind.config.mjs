/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Proxima-Nova, sans-serif",
        serif: "Garamond-Pro, serif",
      },
      colors: {
        base: {
          100: "#D8D8D8",
          200: "#8C8C8C",
          300: "#4A4A4A",
          400: "#3B3B3B",
          500: "#313131",
          600: "#252525",
          700: "#212121",
          800: "#171717",
        },
        primary: {
          100: "#f3eeeb",
          200: "#daccc4",
          300: "#c2a99d",
          400: "#ae8e7e",
          500: "#896756",
          600: "#624a3d",
          700: "#3b2c25",
          800: "#140f0c",
        },
      },
    },
  },
  plugins: [],
};
