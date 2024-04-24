/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        branding: "#0053f7",
        gray: {
          10: "#E8E8E8",
          20: "#fbfbfb",
          30: "#939393",

          100: "#4f4f4f",
          200: "#2c2c2c",
        },
        accent: {
          primary: {
            100: "#ffa229",
            200: "#ff8900",
          },
          secondary: { 100: "#45d541", 200: "#42d43a" },
        },
      },
      fontFamily: {
        body: ["Vazirmatn"],
      },
    },
  },
  plugins: [],
};
