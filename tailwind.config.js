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
        // Deck flips along Y axis three times to simulate cards being cycled
        shuffleDeck: {
          "0%":   { transform: "perspective(700px) rotateY(0deg) scale(1)" },
          "16%":  { transform: "perspective(700px) rotateY(-90deg) scale(0.95)" },
          "33%":  { transform: "perspective(700px) rotateY(0deg) scale(1)" },
          "50%":  { transform: "perspective(700px) rotateY(-90deg) scale(0.95)" },
          "66%":  { transform: "perspective(700px) rotateY(0deg) scale(1)" },
          "83%":  { transform: "perspective(700px) rotateY(-90deg) scale(0.95)" },
          "100%": { transform: "perspective(700px) rotateY(0deg) scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out both",
        scaleIn: "scaleIn 0.3s ease-out both",
        cardFlip: "cardFlip 0.55s cubic-bezier(0.23, 1, 0.32, 1) both",
        shuffleDeck: "shuffleDeck 0.9s ease-in-out both",
      },
    },
  },
  plugins: [],
};
