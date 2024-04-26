/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        green: {
          1: "5px 5px 0 0 rgba(98, 197, 57, 0.7)",
          2: "80px 0 0 80px rgba(215, 240, 210, 0.3)",
          3: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
          4: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        },
      },

      fontSize: {
        nuno: ["6px", "6px"],
      },

      spacing: {
        0.5: "1px",
        128: "32rem",
      },
      colors: {
        branding: "#0053f7",
        gray: {
          5: "#F7F7F7",
          10: "#B3B3B3",
          20: "#E9E9E9",
          30: "#939393",

          100: "#4f4f4f",
          200: "#2c2c2c",
        },
        red: { 10: "#FF004F" },
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
