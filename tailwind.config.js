/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        darkBlue: "#0ea5e9",
        lightBlue: "#0369a1",
        footerBlue: {
          100: "rgb(224, 242, 254)",
          500: "#0EA5E9",
          400: "#38bdf8",
          700: "#0369a1",
        },
        inputGray: "#6b7280",
        textBlue: "#3082ce",
        iconBlue: {
          600: "#0284C7",
        },
      },
    },
  },
  plugins: [],
};
