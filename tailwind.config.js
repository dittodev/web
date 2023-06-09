/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#119DA4",
        themeBlack: "#121212",
        blurple: "#5865F2"
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
