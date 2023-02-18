/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#002060",
        aqua: "##00D9D5",
        "dark-grey": "##6A6A6A",
        grey: "##BEBEBE",
        blue: "#1D334F",
        white: "#FFFFFF",
        "dark-aqua": "#00A3A0",
        "blue-white": "#EFF1FB",
      },
      fontFamily: {
        gilroy: "Gilroy",
        gilroybold: "GilroyExtraBold",
        proximanova: "ProximaNova",
      },
      backgroundImage: {
        "banner-image": "url(/images/bg-banner.png)",
      },
    },
  },
  plugins: [],
};
