/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#1a1a1a',
        accent: '#a07c8f',
        lightbg: '#f9f7f4',
      },
    },
  },
  plugins: [],
};
