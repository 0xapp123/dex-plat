/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "grey-1": "#676767",
        "grey-2": "#121616",
        "grey-3": "#1c2222",
        "grey-4": "#2e3838",
        "grey-5": "#8e8e8b",
        "grey-6": "#111515",
        "blacki": "#090b0b",
        "orang": "#FF810A",
        "green": "#06894A",
        "pink-1": "#A2024C",
        "pink-2": "#FD499D",
        "pink-3": "#DE0269",
      },
    },
  },
  plugins: [],
};
