import { BRAND_COLORS } from "./src/utils/constants";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Montserrat",
    },
    extend: {
      animation: {
        loading: "loading 1.5s infinite linear",
      },
      keyframes: {
        loading: {
          to: { transform: "rotate(1turn)" },
        },
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        brand: {
          ...BRAND_COLORS,
        },
      },
    },
  },
  plugins: [],
};

/*
HOW TO CREATE NEW COLORS (https://maketintsandshades.com/)
- Pass brand-500 as main color
  965 = 70%
  975 = 80%
  999 = 90%
*/
