module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-shadow":
          "linear-gradient(180deg,rgba(6,13,34,0) 40%,rgba(6,13,34,.6))",
        "shadow-dark":
          "linear-gradient(0deg,rgb(40, 47, 68) 30%,rgba(40, 47, 65, .45))",
      },
      backgroundColor: {
        overlay: "rgba(31,38,49, .8)",
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
        "preview-card": "115px",
      },
      width: {
        tooltip: "290px",
        "small-card": "85px",
        "preview-relation": "240px",
      },
      margin: {
        main: "68px",
      },
      height: {
        navbar: "68px",
        "detail-cover": "400px",
        "card-result": "265px",
        "detail-card": "80px",
        "preview-card": "115px",
      },
      gridTemplateColumns: {
        "filter-wrap": "auto 42px",
        filter: "repeat(5, 170px)",
        results: "repeat(auto-fill,minmax(100px,1fr))",
        "results-sm": "repeat(auto-fill,minmax(105px,1fr))",
        "results-md": "repeat(auto-fill,minmax(125px,1fr))",
        "results-lg": "repeat(auto-fill, 185px)",
        detail: "215px auto",
        "detail-content": "208px auto",
        "detail-relation": "85px auto",
        "top-anime": "130px 130px 150px",
      },
      gridTemplateRows: {
        "min-content": "min-content auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
