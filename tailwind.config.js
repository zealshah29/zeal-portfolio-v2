/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightgray: "#cacaca",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
          "300": "rgba(217, 217, 217, 0.5)",
        },
        blue: "#0000ee",
        dodgerblue: "#4285f4",
        dimgray: "#4e4e4e",
        gray: {
          "100": "#252525",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(37, 37, 37, 0.7)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(0, 0, 0, 0.7)",
          "700": "rgba(255, 255, 255, 0)",
        },
        whitesmoke: "#f7f7f7",
        blueviolet: "#9747ff",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
        "nunito-sans": "'Nunito Sans'",
        sen: "Sen",
      },
      borderRadius: {
        xl: "20px",
        "6xl": "25px",
        "10xs": "3px",
      },
    },
    fontSize: {
      "2xl": "21px",
      lg: "18px",
      mini: "15px",
      base: "16px",
      xs: "12px",
      "3xs": "10px",
      "2xs": "11px",
      "21xl": "40px",
      "11xl": "30px",
      xl: "20px",
      "6xl": "25px",
      "26xl": "45px",
      "16xl": "35px",
      "41xl": "60px",
      "3xl": "22px",
      "9xl": "28px",
      lgi: "19px",
      "8xl": "27px",
      "5xl": "24px",
      sm: "14px",
      smi: "13px",
      "51xl": "70px",
      "81xl": "100px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      MoTab: {
        raw: "screen and (max-width: 670px)",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};