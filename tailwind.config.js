/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7DF52",   // yellow
        secondary: "#3C75B5", // blue
        accent: "#718355",    // green
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // ✅ Add Poppins
      },
    },
  },
  plugins: [],
};
