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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // 3D flip: card comes in edge-on from the left, rotates to face forward
        cardFlip: {
          "0%": {
            transform: "perspective(1200px) rotateY(-90deg) scale(0.95)",
            opacity: "0",
          },
          "60%": {
            transform: "perspective(1200px) rotateY(8deg) scale(1.01)",
            opacity: "1",
          },
          "100%": {
            transform: "perspective(1200px) rotateY(0deg) scale(1)",
            opacity: "1",
          },
        },
        // Deck wiggles left-right like it's being shuffled
        shuffleDeck: {
          "0%": { transform: "rotate(0deg) translateX(0px)" },
          "15%": { transform: "rotate(-4deg) translateX(-6px)" },
          "30%": { transform: "rotate(4deg) translateX(6px)" },
          "45%": { transform: "rotate(-3deg) translateX(-4px)" },
          "60%": { transform: "rotate(3deg) translateX(4px)" },
          "75%": { transform: "rotate(-1deg) translateX(-2px)" },
          "90%": { transform: "rotate(1deg) translateX(2px)" },
          "100%": { transform: "rotate(0deg) translateX(0px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out both",
        scaleIn: "scaleIn 0.3s ease-out both",
        cardFlip: "cardFlip 0.55s cubic-bezier(0.23, 1, 0.32, 1) both",
        shuffleDeck: "shuffleDeck 0.6s ease-in-out both",
      },
    },
  },
  plugins: [],
};
