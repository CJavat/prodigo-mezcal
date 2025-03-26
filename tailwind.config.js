/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prodigo: {
          50: "#f1e7bf",
          100: "#f1df3d",
          200: "#e4c42f",
          300: "#d9bf1f",
          400: "#cfb867",
          500: "#c29b17",
          600: "#896d17",
          700: "#6c5418",
        },
      },
    },
  },
  plugins: [],
};
