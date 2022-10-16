/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientPurple: "#a35bcd",
        gradientBlue: "#1b60db",
        backgroundBlue: "#eef6ff",
      },
      fontFamily: {
        FrutigerNeue: "FrutigerNeue",
      },
    },
  },
  plugins: [],
};
