module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "cover-shadow":
          "linear-gradient(180deg,rgba(6,13,34,0) 40%,rgba(6,13,34,.6))",
        "shadow-dark":
          "linear-gradient(0deg,rgb(40, 47, 68) 30%,rgba(40, 47, 65, .45))",
      },
      colors: {
        primary: "#282F44",
        secondary: "#191d32",
        active: "rgb(61,180,242)",
      },
      maxWidth: {
        container: "1140px;",
        navbar: "1050px",
        text: "900px",
      },
      minWidth: {
        container: "320px",
        tooltip: "290px",
      },
      maxHeight: {
        option: "500px",
      },
      width: {
        tooltip: "290px",
      },
      margin: {
        main: "68px",
      },
      height: {
        navbar: "68px",
        "detail-cover": "400px",
        "card-result": "256px",
        "detail-card": "80px",
      },
      gridTemplateColumns: {
        "filter-wrap": "auto 42px",
        filter: "repeat(5, 170px)",
        results: "repeat(auto-fill, 185px)",
        detail: "215px auto",
        "detail-content": "208px auto",
        "detail-relation": "85px auto",
        "top-anime": "130px 130px 150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
