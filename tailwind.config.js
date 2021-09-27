const defaultTheme = require("./node_modules/tailwindcss/defaultTheme");
const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors },
    fontFamily: {
      ...defaultTheme.fontFamily,
      mono: defaultTheme.fontFamily.mono,
      sans: ["mr-eaves-xl-modern", ...defaultTheme.fontFamily.sans],
      serif: ["ivyjournal", ...defaultTheme.fontFamily.sans],
      paragraph: ["sofia-pro", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      screens: {
        print: { raw: "print" },
        mobile: "480px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
