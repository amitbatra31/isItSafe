/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "color-change": "color-change 3s ease-in-out infinite",
      },
      keyframes: {
        "color-change": {
          "0%": {
            color: "red",
          },
          "100%": {
            color: "green",
          },
        },
      },
    },
  },
  plugins: [],
};
