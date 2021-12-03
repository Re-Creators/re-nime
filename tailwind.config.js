module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#282F44",
        secondary: "#191d32",
        active: "#4B8F8C",
      },
      maxWidth: {
        container: "1140px;",
      },
      minWidth: {
        container: "320px",
      },
      maxHeight: {
        option: "500px",
      },
      width: {
        tooltip: "290px",
      },
      height: {
        "card-result": "256px",
      },
      gridTemplateColumns: {
        "filter-wrap": "auto 42px",
        filter: "repeat(5, 170px)",
        results: "repeat(auto-fill, 185px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
