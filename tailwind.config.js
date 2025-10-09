/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7DF52",   // yellow
        secondary: "#3C75B5", // blue
        accent: "#718355",    // green (matcha tone)
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // ✅ Poppins font
      },
    },
  },
  plugins: [require("daisyui")], // ✅ Added DaisyUI plugin
  daisyui: {
    themes: [
      {
        matcha: {
          "primary": "#F7DF52",   // yellow
          "secondary": "#3C75B5", // blue
          "accent": "#718355",    // matcha green
          "neutral": "#2a2e37",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
    darkTheme: "matcha",
  },
};
