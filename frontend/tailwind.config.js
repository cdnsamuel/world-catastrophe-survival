/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        wcs: {
          primary: "#2B529B",
          secondary: "#E5B01E",
          accent: "#A9ACBE",
          neutral: "#555555",
          "base-100": "#EAE4D5",
          "base-200": "#D9D9D9",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
