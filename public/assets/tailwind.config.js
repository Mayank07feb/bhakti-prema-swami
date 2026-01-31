/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./partials/**/*.ejs",
    "./*.ejs",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        /* Section background */
        "section-bg": "#F6E3D2",

        /* Primary accent (red-700) */
        primary: "#a30f0f",

        /* Primary hover & dark strip (red-800) */
        "primary-hover": "#991B1B",

        /* Body text (gray-700) */
        "text-body": "#374151",
      },

      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },

      fontSize: {
        base: "15px",
        h1: "48px",
        h2: "36px",
        h3: "28px",
        h4: "22px",
        h5: "18px",
        h6: "16px",
      },
    },
  },
  plugins: [],
};
