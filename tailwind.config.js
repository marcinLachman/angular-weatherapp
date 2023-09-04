/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#5373EE",
        secondary: "#68757E",
      },
    },
  },
  fontFamily: {
    display: ["Poppins", "sans-serif"],
  },
  screens: {
    sm: "475pxpx",
    // => @media (min-width: 640px) { ... }

    md: "640px",
    // => @media (min-width: 768px) { ... }

    lg: "768px",
    // => @media (min-width: 1024px) { ... }

    xl: "1024px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1280px",
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
};
