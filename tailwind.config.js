/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
      },
      height: {
        42: "168px",
        49: "194px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
