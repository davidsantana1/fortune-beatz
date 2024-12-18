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
          50: "#eefaff",
          100: "#d8f3ff",
          200: "#b9e9ff",
          300: "#89deff",
          400: "#52caff",
          500: "#2aacff",
          600: "#138ffd",
          700: "#0c79ef",
          800: "#115ebc",
          900: "#145194",
          950: "#11325a",
          965: "#0d344c",
          975: "#082233",
          999: "#041119",
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
