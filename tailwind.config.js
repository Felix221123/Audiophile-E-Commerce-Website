/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#D87D4A",
        lightDark: "#101010",
        lightGrey: "#F1F1F1",
        lightWhite: "#FAFAFA",
        lightBrown: "#fbaf85",
        pureWhite: "#FFFFFF",
        pureBlack: "#000000",
        overlayColor: "hsl(0, 0%, 59%)",
        redClr : "#CD2C2C",
      },
      fonts: {
        fontStyle : "'Manrope', sans-serif",
      },
    },
  },
  plugins: [],
};
