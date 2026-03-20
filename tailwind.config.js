/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#3B4537",
        brandBlue: "#486464",
        brandOrange: "#855119",
        brandBrown: "#45392C",
        brandBeige: "#BBBBB9",
      },
    },
  },
  plugins: [],
};
