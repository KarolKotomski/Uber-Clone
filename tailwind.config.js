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
      "2xl": "1440px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },

    extend: {
      colors: {
        greyActive: "rgb(84,84,84)",
        greyHover: "rgb(51,51,51)",
        whiteHover: "rgb(226,226,226)",
      },

      backgroundImage: {
      },

      fontFamily: {
        UberMove: ["Uber Move", "sans-serif"],
        UberMoveText: ["Uber Move Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
