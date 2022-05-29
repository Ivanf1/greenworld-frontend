const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6651",
        "primary-tint": "#CBDCD8",
        "light-grey": "#F6F6F6",
        "accent-blue": "#0076B1",
        "accent-red": "#D64E78",
        "accent-purple": "#8E0072",
        "accent-purple-tint": "#D299C7",
      },
    },
    fontFamily: {
      thin: ["NotoSans-Thin"],
      "extra-light": ["NotoSans-ExtraLight"],
      light: ["NotoSans-Light"],
      regular: ["NotoSans-Regular"],
      medium: ["NotoSans-Medium"],
      "semi-bold": ["NotoSans-SemiBold"],
      bold: ["NotoSans-Bold"],
      "extra-bold": ["NotoSans-ExtraBold"],
      black: ["NotoSans-Black"],
    },
    fontSize: {
      xs: [".875rem"],
      sm: ["1rem"],
      lg: ["1.125rem"],
      xl: ["1.5rem"],
      "2xl": ["2.25rem"],
      "3xl": ["3rem"],
      "4xl": ["3.5rem"],
      "5xl": ["5rem"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.3xl"), fontFamily: theme("fontFamily.black") },
        h2: { fontSize: theme("fontSize.2xl"), fontFamily: theme("fontFamily.extra-bold") },
        h3: { fontSize: theme("fontSize.xl"), fontFamily: theme("fontFamily.bold") },
        h4: { fontSize: theme("fontSize.lg"), fontFamily: theme("fontFamily.semi-bold") },
      });
    }),
  ],
};
