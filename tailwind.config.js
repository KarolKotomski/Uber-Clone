/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    container: {
      center: true,
    },

    extend: {
      colors: {
        greyActive: "rgb(84,84,84)",
        greyHover: "rgb(51,51,51)",
        whiteHover: "rgb(226,226,226)",
        lightGrey: "rgb(246,246,246)",
        lightGrey2: "rgb(238,238,238)",
        placeholderGrey: "rgb(107,107,107)",
      },

      fontFamily: {
        UberMove: ["Uber Move", "sans-serif"],
        UberMoveText: ["Uber Move Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
